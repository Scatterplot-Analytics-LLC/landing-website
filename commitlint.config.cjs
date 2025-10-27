module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(SPL-[0-9]+):\s+([A-Z]+)\s+(.*)$|^(Merge\sbranch\s(.*)\sinto\s(.*))$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'FIX',
        'FEATURE',
        'RENAME',
        'REFACTOR',
        'REVERT',
        'DELETE',
        'WIP',
        'RESOLVE',
      ],
    ],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', ['upper-case']],
    'subject-case': [2, 'always', ['sentence-case']],
  },
}
