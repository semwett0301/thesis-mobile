import { format } from "date-fns";

export const toRussianDate = (date: Date) => format(date, "dd.MM.yyyy");
