import { toast } from "@/hooks/use-toast";
import AuthService from "@/configs/axios/services/AuthService";
import { getCookieItem, removeCookieItem } from "@/utils/storageUtils";
import {
    ACCESS_TOKEN_STORAGE_KEY,
    REFRESH_TOKEN_STORAGE_KEY,
} from "@/constants/AuthConstants";
import ROUTES from "@/constants/RouteConstants";

/**
 * Logout utility function that:
 * 1. Calls the logout API with refresh token
 * 2. Removes cookies
 * 3. Redirects to login page
 * 4. Shows success/error toast
 */
const handleLogout = async () => {
    try {
        const refreshToken = getCookieItem(REFRESH_TOKEN_STORAGE_KEY);

        if (refreshToken && refreshToken !== "null") {
            await AuthService.logout({ refresh_token: refreshToken });
        }
    } catch (error) {
        console.error("Logout API error:", error);
        // Continue with local logout even if API call fails
    } finally {
        // Always remove cookies and redirect
        removeCookieItem(ACCESS_TOKEN_STORAGE_KEY);
        removeCookieItem(REFRESH_TOKEN_STORAGE_KEY);

        // Clear any authorization headers
        if (typeof window !== "undefined") {
            window.location.replace(ROUTES.LOGIN);
        }

        toast({
            title: "Logged out",
            description: "You have been successfully logged out.",
        });
    }
};

export default handleLogout;
