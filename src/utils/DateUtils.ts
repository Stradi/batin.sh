function toShortDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short"
  }).format(date);
}

function toReadableFullDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

function seperateArrayByYears(array: any[], yearKey?: string): Record<number, object[]> {
  const seperated = {};
  array.forEach(v => {
    const year = v[yearKey].getFullYear();
    if(!seperated[year]) {
      seperated[year] = [];
    }

    seperated[year] = [v, ...seperated[year]];
  });

  return seperated;
}

export {
  toShortDate,
  toReadableFullDate,
  seperateArrayByYears
}