export function formattedDate(date) {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function simpleFormattedDate(date) {
  return new Date(date).toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const differenceInSeconds = Math.floor((now - past) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} detik yang lalu`;
  }

  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} menit yang lalu`;
  }

  const differenceInHours = Math.floor(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours} jam yang lalu`;
  }

  const differenceInDays = Math.floor(differenceInHours / 24);
  if (differenceInDays < 30) {
    return `${differenceInDays} hari yang lalu`;
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);
  if (differenceInMonths < 12) {
    return `${differenceInMonths} bulan yang lalu`;
  }

  const differenceInYears = Math.floor(differenceInMonths / 12);
  return `${differenceInYears} tahun yang lalu`;
}
