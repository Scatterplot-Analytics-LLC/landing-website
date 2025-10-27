import FileService from "@/configs/axios/services/FileService";
import { IPresignedUrlRequest } from "@/configs/axios/services/service.interface";

export interface LogoUploadResult {
    logo_key: string;
    logo_file_name: string;
    logo_file_type: string;
    logo_size: number;
    logo_url?: string;
}

export interface FileUploadOptions {
    maxSizeMB?: number;
    allowedTypes?: string[];
    uploadType?: string;
}

const DEFAULT_OPTIONS: Required<FileUploadOptions> = {
    maxSizeMB: 2,
    allowedTypes: ["image/png", "image/jpeg", "image/jpg"],
    uploadType: "logo",
};

/**
 * Common utility function for uploading logo files
 * @param file - The file to upload
 * @param userId - User ID for the upload
 * @param options - Upload options (size limits, file types, etc.)
 * @returns Promise with upload result
 */
export const uploadLogoFile = async (
    file: File,
    userId: string,
    options: FileUploadOptions = {}
): Promise<LogoUploadResult> => {
    const { maxSizeMB, allowedTypes, uploadType } = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        throw new Error(
            `File size must be less than ${maxSizeMB}MB. Selected file is ${fileSizeMB}MB.`
        );
    }

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
        const allowedTypesStr = allowedTypes
            .map((type) => type.split("/")[1].toUpperCase())
            .join(", ");
        throw new Error(`Only ${allowedTypesStr} files are allowed.`);
    }

    // Get presigned URL
    const presignedUrlRequest: IPresignedUrlRequest = {
        user_id: userId,
        file_name: file.name,
        file_type: file.type,
        upload_type: uploadType,
    };

    const presignedUrlResponse = await FileService.getPresignedUrl(
        presignedUrlRequest
    );
    const { presigned_url: presignedUrl, file_key: fileKey } =
        presignedUrlResponse.data.data;

    // Upload file to S3
    await FileService.uploadToPresignedUrl(presignedUrl, file, file.type);

    return {
        logo_key: fileKey,
        logo_file_name: file.name,
        logo_file_type: file.type,
        logo_size: file.size,
    };
};

/**
 * Validates a file before upload
 * @param file - The file to validate
 * @param options - Validation options
 * @returns Object with validation result and error message
 */
export const validateFile = (
    file: File,
    options: FileUploadOptions = {}
): { isValid: boolean; error?: string } => {
    const { maxSizeMB, allowedTypes } = { ...DEFAULT_OPTIONS, ...options };

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        return {
            isValid: false,
            error: `File size must be less than ${maxSizeMB}MB. Selected file is ${fileSizeMB}MB.`,
        };
    }

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
        const allowedTypesStr = allowedTypes
            .map((type) => type.split("/")[1].toUpperCase())
            .join(", ");
        return {
            isValid: false,
            error: `Only ${allowedTypesStr} files are allowed.`,
        };
    }

    return { isValid: true };
};
