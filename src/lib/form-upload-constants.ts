/** How long assessment form uploads stay in Blob before cron deletes them. */
export const FORM_UPLOAD_RETENTION_DAYS = 90;

export const FORM_UPLOAD_RETENTION_MS =
  FORM_UPLOAD_RETENTION_DAYS * 24 * 60 * 60 * 1000;
