const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  wpApi: getEnvironmentVariable("WORDPRESS_API_URL"),
  smtpUser: getEnvironmentVariable("SMTP_USER"),
  smtpPassword: getEnvironmentVariable("SMTP_PASSWORD"),
};
