import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierEslint from 'eslint-config-prettier';

export default tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json'
			}
		}
	},
	prettierEslint,
	{
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }],
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/no-use-before-define': ['error', { functions: false }],
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/dot-notation': 'error',
			eqeqeq: ['error', 'always', { null: 'ignore' }],
			'no-fallthrough': 'off',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	}
);
