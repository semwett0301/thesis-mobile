import { format } from "date-fns";

export const toDay = (date: Date) => format(date, "dd.MM");
export const toRussianDate = (date: Date) => format(date, "dd.MM.yyyy");
