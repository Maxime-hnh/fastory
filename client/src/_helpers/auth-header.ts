export function authHeader(type: 'json' | 'form' | 'text' = "json"): HeadersInit {

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
  let header: HeadersInit = {};

  switch (type) {
    case "json":
      header = Object.assign(header, {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Accept: "application/json",
      });
      break;
    case "form":
      header = Object.assign(header, {
        "Cache-Control": "no-cache",
        Accept: "application/json",
      });
      break;
    default:
      header = Object.assign(header, {
        "Cache-Control": "no-cache",
        "Content-Type": "text/plain",
      });
      break;
  }

  if (loggedUser && loggedUser.token) {
    header["Authorization"] = "Basic " + loggedUser.token;
  }

  return header;
}
