const LOCALE_WITH_ISO8601_DATE_FORMAT = "en-ca";

export const getTodayAsIso8601Date = () => {
  return Intl.DateTimeFormat(LOCALE_WITH_ISO8601_DATE_FORMAT).format(
    new Date()
  );
};
