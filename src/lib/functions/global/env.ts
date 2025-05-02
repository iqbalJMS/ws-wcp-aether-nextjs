interface ServerEnv {
  PATH_URL: string;
  BASE_URL: string;
  DRUPAL_ENDPOINT: string;
  DRUPAL_AUTH: string;
  DRUPAL_PASSWORD: string;
}

type ValidationErrors = Partial<Record<keyof ServerEnv, string>>;

const createEnv = (): ServerEnv => {
  const envVars = {
    PATH_URL: process.env.PATH_URL || process.env.NEXT_PUBLIC_PATH_URL,
    BASE_URL: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
    DRUPAL_ENDPOINT: process.env.DRUPAL_ENDPOINT || process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT,
    DRUPAL_AUTH: process.env.DRUPAL_AUTH || 'DEFAULT',
    DRUPAL_PASSWORD: process.env.DRUPAL_PASSWORD || 'DEFAULT',
  };

  const errors: ValidationErrors = {};

  Object.entries(envVars).forEach(([key, value]) => {
    const typedKey = key as keyof ServerEnv;
    if (!value || value.trim() === '') {
      errors[typedKey] = 'Required but missing or empty';
    }
  });

  if (Object.keys(errors).length > 0) {
    throw new Error(
      `Invalid environment variables provided.
The following variables are missing or invalid:
${Object.entries(errors)
        .map(([key, message]) => `- ${key}: ${message}`)
        .join('\n')}
`
    );
  }

  return {
    PATH_URL: envVars.PATH_URL as string,
    BASE_URL: envVars.BASE_URL as string,
    DRUPAL_ENDPOINT: envVars.DRUPAL_ENDPOINT as string,
    DRUPAL_AUTH: envVars.DRUPAL_AUTH as string,
    DRUPAL_PASSWORD: envVars.DRUPAL_PASSWORD as string
  };
};

export const env: Readonly<ServerEnv> = Object.freeze(createEnv());