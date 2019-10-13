export interface StatusDataObject {
  emoji: String;
  message: String;
  description: String;
}

interface StatusDataCollection {
  [key: string]: StatusDataObject;
}

export const defaultErrorCode: StatusDataObject = {
  emoji: "😅",
  message: "Unknown",
  description: "An unknown error has occurred"
};

export const errorData: StatusDataCollection = {
  "100": {
    emoji: "🏁",
    message: "Continue",
    description:
      "The server has received the request headers, and the client should proceed to send the request body."
  },
  "101": {
    emoji: "🔌",
    message: "Switching Protocols",
    description: "The requester has asked the server to switch protocols."
  },
  "102": {
    emoji: "🖥",
    message: "Processing",
    description:
      "This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost."
  },
  "103": {
    emoji: "🗣",
    message: "Early Hints",
    description:
      "Used to return some response headers before final HTTP message."
  },
  "200": {
    emoji: "✅",
    message: "OK",
    description:
      "The request is OK (this is the standard response for successful HTTP requests)."
  },
  "201": {
    emoji: "📝",
    message: "Created",
    description:
      "The request has been fulfilled, and a new resource is created."
  },
  "202": {
    emoji: "🔄",
    message: "Accepted",
    description:
      "The request has been accepted for processing, but the processing has not been completed."
  },
  "203": {
    emoji: "💫",
    message: "Non-Authoritative Information",
    description:
      "The request has been successfully processed, but is returning information that may be from another source."
  },
  "204": {
    emoji: "💭",
    message: "No Content",
    description:
      "The request has been successfully processed, but is not returning any content."
  },
  "205": {
    emoji: "🎉",
    message: "Reset Content",
    description:
      "The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view."
  },
  "206": {
    emoji: "🎊",
    message: "Partial Content",
    description:
      "The server is delivering only part of the resource due to a range header sent by the client."
  },
  "207": {
    emoji: "🎏",
    message: "Multi-Status",
    description:
      "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made."
  },
  "208": {
    emoji: "📢",
    message: "Already Reported",
    description:
      "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again."
  },
  "218": {
    emoji: "🆗",
    message: "This is fine",
    description:
      "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled."
  },
  "226": {
    emoji: "📣",
    message: "IM Used",
    description:
      "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
  },
  "300": {
    emoji: "🔀",
    message: "Multiple Choices",
    description:
      "A link list. The user can select a link and go to that location. Maximum five addresses."
  },
  "301": {
    emoji: "🚚",
    message: "Moved Permanently",
    description: "The requested page has moved to a new URL."
  },
  "302": {
    emoji: "🔎",
    message: "Found",
    description: "The requested page has moved temporarily to a new URL."
  },
  "303": {
    emoji: "📨",
    message: "See Other",
    description: "The requested page can be found under a different URL."
  },
  "304": {
    emoji: "💠",
    message: "Not Modified",
    description:
      "Indicates the requested page has not been modified since last requested."
  },
  "306": {
    emoji: "🔃",
    message: "Switch Proxy",
    description:
      'No longer used. Originally meant "Subsequent requests should use the specified proxy."'
  },
  "307": {
    emoji: "ℹ️",
    message: "Temporary Redirect",
    description: "The requested page has moved temporarily to a new URL."
  },
  "308": {
    emoji: "🆕",
    message: "Permanent Redirect",
    description:
      "Used in the resumable requests proposal to resume aborted PUT or POST requests."
  },
  "400": {
    emoji: "🚫",
    message: "Bad Request",
    description: "The request cannot be fulfilled due to bad syntax."
  },
  "401": {
    emoji: "🔐",
    message: "Unauthorized",
    description:
      "The request was a legal request, but the server is refusing to respond to it. For use when authentication is possible but has failed or not yet been provided."
  },
  "402": {
    emoji: "💰",
    message: "Payment Required",
    description:
      "Not yet implemented by RFC standards, but reserved for future use."
  },
  "403": {
    emoji: "⛔",
    message: "Forbidden",
    description:
      "The request was a legal request, but the server is refusing to respond to it."
  },
  "404": {
    emoji: "❓",
    message: "Not Found",
    description:
      "The requested page could not be found but may be available again in the future."
  },
  "405": {
    emoji: "❗",
    message: "Method Not Allowed",
    description:
      "A request was made of a page using a request method not supported by that page."
  },
  "406": {
    emoji: "🛡",
    message: "Not Acceptable",
    description:
      "The server can only generate a response that is not accepted by the client."
  },
  "407": {
    emoji: "🔩",
    message: "Proxy Authentication Required",
    description: "The client must first authenticate itself with the proxy."
  },
  "408": {
    emoji: "⌛️",
    message: "Request Timeout",
    description: "The server timed out waiting for the request."
  },
  "409": {
    emoji: "💥",
    message: "Conflict",
    description:
      "The request could not be completed because of a conflict in the request."
  },
  "410": {
    emoji: "💨",
    message: "Gone",
    description: "The requested page is no longer available."
  },
  "411": {
    emoji: "📏",
    message: "Length Required",
    description:
      'The "Content-Length" is not defined. The server will not accept the request without it.'
  },
  "412": {
    emoji: "🛑",
    message: "Precondition Failed",
    description:
      "The precondition given in the request evaluated to false by the server."
  },
  "413": {
    emoji: "🗃",
    message: "Payload Too Large",
    description:
      "The server will not accept the request, because the request entity is too large."
  },
  "414": {
    emoji: "🆖",
    message: "URI Too Long",
    description:
      "The server will not accept the request, because the URL is too long. Occurs when you convert a POST request to a GET request with a long query information."
  },
  "415": {
    emoji: "📼",
    message: "Unsupported Media Type",
    description:
      "The server will not accept the request, because the media type is not supported."
  },
  "416": {
    emoji: "📐",
    message: "Range Not Satisfiable",
    description:
      "The client has asked for a portion of the file, but the server cannot supply that portion."
  },
  "417": {
    emoji: "🤔",
    message: "Expectation Failed",
    description:
      "The server cannot meet the requirements of the Expect request-header field."
  },
  "418": {
    emoji: "🍵",
    message: "I'm a Teapot",
    description:
      'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.'
  },
  "419": {
    emoji: "🕰",
    message: "Page Expired",
    description:
      "Used by the Laravel Framework when a CSRF Token is missing or expired."
  },
  "420": {
    emoji: "🤖",
    message: "Method Failure",
    description:
      "A deprecated response used by the Spring Framework when a method has failed."
  },
  "421": {
    emoji: "🔂",
    message: "Misdirected Request",
    description:
      "The request was directed at a server that is not able to produce a response (for example because a connection reuse)."
  },
  "422": {
    emoji: "💩",
    message: "Unprocessable Entity",
    description:
      "The request was well-formed but was unable to be followed due to semantic errors."
  },
  "423": {
    emoji: "🔒",
    message: "Locked",
    description: "The resource that is being accessed is locked."
  },
  "424": {
    emoji: "😒",
    message: "Failed Dependency",
    description:
      "The request failed due to failure of a previous request (e.g., a PROPPATCH)."
  },
  "426": {
    emoji: "📤",
    message: "Upgrade Required",
    description:
      "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field."
  },
  "428": {
    emoji: "⛓",
    message: "Precondition Required",
    description: "The origin server requires the request to be conditional."
  },
  "429": {
    emoji: "🌋",
    message: "Too Many Requests",
    description:
      "The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes."
  },
  "431": {
    emoji: "🤮",
    message: "Request Header Fields Too Large",
    description:
      "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large."
  },
  "440": {
    emoji: "🛂",
    message: "Login Time",
    description: "The client's session has expired and must log in again. (IIS)"
  },
  "444": {
    emoji: "🗑",
    message: "No Response",
    description:
      "A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most commonly used to deny malicious or malformed requests."
  },
  "449": {
    emoji: "🛃",
    message: "Retry With",
    description:
      "The server cannot honour the request because the user has not provided the required information. (IIS)"
  },
  "450": {
    emoji: "🔞",
    message: "Blocked by Windows Parental Controls",
    description:
      "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage."
  },
  "451": {
    emoji: "🔏️",
    message: "Unavailable For Legal Reasons",
    description:
      "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource."
  },
  "494": {
    emoji: "🐳",
    message: "Request header too large",
    description:
      "Used by nginx to indicate the client sent too large of a request or header line that is too long."
  },
  "495": {
    emoji: "🏅",
    message: "SSL Certificate Error",
    description:
      "An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate."
  },
  "496": {
    emoji: "🏷",
    message: "SSL Certificate Required",
    description:
      "An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided."
  },
  "497": {
    emoji: "❎",
    message: "HTTP Request Sent to HTTPS Port",
    description:
      "An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests."
  },
  "498": {
    emoji: "🆔",
    message: "Invalid Token",
    description:
      "Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token."
  },
  "499": {
    emoji: "🚶🏽",
    message: "Client Closed Request",
    description:
      "A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request."
  },
  "500": {
    emoji: "💣",
    message: "Internal Server Error",
    description:
      "An error has occurred in a server side script, a no more specific message is suitable."
  },
  "501": {
    emoji: "📭",
    message: "Not Implemented",
    description:
      "The server either does not recognize the request method, or it lacks the ability to fulfill the request."
  },
  "502": {
    emoji: "🚧",
    message: "Bad Gateway",
    description:
      "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
  },
  "503": {
    emoji: "🚨",
    message: "Service Unavailable",
    description: "The server is currently unavailable (overloaded or down)."
  },
  "504": {
    emoji: "⏲",
    message: "Gateway Timeout",
    description:
      "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
  },
  "505": {
    emoji: "🕯",
    message: "HTTP Version Not Supported",
    description:
      "The server does not support the HTTP protocol version used in the request."
  },
  "506": {
    emoji: "💔",
    message: "Variant Also Negotiates",
    description:
      "Transparent content negotiation for the request results in a circular reference."
  },
  "507": {
    emoji: "💯",
    message: "Insufficient Storage",
    description:
      "The server is unable to store the representation needed to complete the request."
  },
  "508": {
    emoji: "➰",
    message: "Loop Detected",
    description:
      "The server detected an infinite loop while processing the request (sent instead of 208 Already Reported)."
  },
  "509": {
    emoji: "📈",
    message: "Bandwidth Limit Exceeded",
    description:
      "The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers."
  },
  "510": {
    emoji: "🏗",
    message: "Not Extended",
    description:
      "Further extensions to the request are required for the server to fulfil it."
  },
  "511": {
    emoji: "🔑",
    message: "Network Authentication Required",
    description: "The client needs to authenticate to gain network access."
  },
  "520": {
    emoji: "🔴",
    message: "Unknown Error",
    description:
      'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.'
  },
  "521": {
    emoji: "💤",
    message: "Web Server Is Down",
    description: "The origin server has refused the connection from Cloudflare."
  },
  "522": {
    emoji: "⌚️",
    message: "Connection Timed Out",
    description:
      "Cloudflare could not negotiate a TCP handshake with the origin server."
  },
  "523": {
    emoji: "🏚",
    message: "Origin Is Unreachable",
    description:
      "Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect."
  },
  "524": {
    emoji: "⏰",
    message: "A Timeout Occurred",
    description:
      "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response."
  },
  "525": {
    emoji: "🤝",
    message: "SSL Handshake Failed",
    description:
      "Cloudflare could not negotiate a SSL/TLS handshake with the origin server."
  },
  "526": {
    emoji: "🚑",
    message: "Invalid SSL Certificate",
    description:
      "Used by Cloudflare and Cloud Foundry's gorouter to indicate failure to validate the SSL/TLS certificate that the origin server presented."
  },
  "527": {
    emoji: "🔘",
    message: "Railgun Error",
    description:
      "Error 527 indicates that the request timed out or failed after the WAN connection had been established."
  },
  "530": {
    emoji: "🌨",
    message: "Site is frozen",
    description:
      "Error 530 indicates that the requested host name could not be resolved on the Cloudflare network to an origin server."
  },
  "598": {
    emoji: "🥀",
    message: "Network read timeout error",
    description:
      "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy."
  }
};
