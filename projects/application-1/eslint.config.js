import { webAppConfig } from 'eslint-config';

export default [
	...webAppConfig,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname
			}
		}
	}
];
