const application = {
  types: {
    "application/mp4": "MP4",
    "application/atom+xml": "ATOM",
    "application/json": "JSON",
    "application/javascript": "JS",
    "application/ogg": "OGG, OGV, OGA, OGX, SPX, OPUS, OGM",
    "application/pdf": "PDF",
    "application/postscript": "PS",
    "application/font-woff": "WOFF",
    "application/xhtml+xml": "XHTML, XHT, XML, HTML, HTM",
    "application/zip": "ZIP, ZIPX",
    "application/gzip": "GZIP",
    "application/xml": "XML",
    "application/msword": "DOC, DOCX, RTF",
    "application/vnd.oasis.opendocument.text": "ODT",
    "application/vnd.oasis.opendocument.spreadsheet": "ODS",
    "application/vnd.oasis.opendocument.presentation": "ODP",
    "application/vnd.oasis.opendocument.graphics": "ODG",
    "application/vnd.ms-excel":
      "OOXML, DOCX, XLSX, PPTX, DBT, FPT, IDX, NTX, CDX, MDX, CSV",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      "OOXML, DOCX, XLSX, PPTX, DBT, FPT, IDX, NTX, CDX, MDX, CSV",
    "application/vnd.ms-excel.sheet.macroEnabled.12": "PPTX",
    "application/vnd.ms-powerpoint": "PPTX",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      "PPTX",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      "DOC, DOCX, RTF",
    "application/vnd.google-earth.kml+xml": "KML, KMZ",
    "application/x-dvi": "DVI",
    "application/x-font-ttf": "TTF, TTE, DFONT",
    "application/x-shockwave-flash": "FLV, FLA",
    "application/x-rar-compressed": "RAR",
    "application/x-tar": "TAR",
    "application/*":
      "ATOM, JSON, JS, OGG, OGV, OGA, OGX, SPX, OPUS, OGM, PDF, PS, WOFF, XHTML, XHT, XML, HTML, HTM, ZIP, ZIPX, GZIP, XML, DOC, DOCX, RTF, ODT, ODS, ODP, ODG, OOXML, DOCX, XLSX, PPTX, DBT, FPT, IDX, NTX, CDX, MDX, CSV, PPTX, KML, KMZ, DVI, TTF, TTE, DFONT, FLV, FLA, RAR, TAR",
  },
  expansion: {
    ".atom": "ATOM",
    ".json": "JSON",
    ".js": "JS",
    ".ogg": "OGG",
    ".ogv": "OGV",
    ".oga": "OGA",
    ".ogx": "OGX",
    ".spx": "SPX",
    ".opus": "OPUS",
    ".ogm": "OGM",
    ".pdf": "PDF",
    ".ps": "PS",
    ".woff": "WOFF",
    ".xhtml": "XHTML",
    ".xht": "XHT",
    ".xml": "XML",
    ".html": "HTML",
    ".htm": "HTM",
    ".zip": "ZIP",
    ".zipx": "ZIPX",
    ".gzip": "GZIP",
    ".doc": "DOC",
    ".docx": "DOCX",
    ".rtf": "RTF",
    ".odt": "ODT",
    ".ods": "ODS",
    ".odp": "ODP",
    ".odg": "ODG",
    ".ooxml": "OOXML",
    ".xlsx": "XLSX",
    ".pptx": "PPTX",
    ".dbt": "DBT",
    ".fpt": "FPT",
    ".idx": "IDX",
    ".ntx": "NTX",
    ".cdx": "CDX",
    ".mdx": "MDX",
    ".csv": "CSV",
    ".kml": "KML",
    ".kmz": "KMZ",
    ".dvi": "DVI",
    ".ttf": "TTF",
    ".tte": "TTE",
    ".dfont": "DFONT",
    ".flv": "FLV",
    ".fla": "FLA",
    ".rar": "RAR",
    ".tar": "TRA",
  },
};
const audio = {
  types: {
    "audio/mp4": "MP4",
    "audio/aac": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/aacp": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/3gpp": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/3gpp2": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/mp4a-latm": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/mpeg4-generic": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/x-aac": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/x-m4a": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/x-m4p": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/x-m4b": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/mp4a": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/mpga": "AAC, M4A, M4P, M4B, MP4, 3GP",
    "audio/mpeg": "MP3",
    "audio/ogg": "OGG, OGV, OGA, OGX, SPX, OPUS, OGM, SB0, SPX, FLAC",
    "audio/vorbis": "OGG, OGA, SB0",
    "audio/x-ms-wma": "WMA",
    "audio/x-ms-wax": "WMA",
    "audio/vnd.rn-realaudio": "RM",
    "audio/vnd.wave": "WAV",
    "audio/webm": "WEBM",
    "audio/*":
      "MP4, AAC, M4A, M4P, M4B, MP4, 3GP, MP3, OGG, OGV, OGA, OGX, SPX, OPUS, OGM, SB0, SPX, FLAC, WMA, RM, WAV, WEBM",
  },
  expansion: {
    ".mp4": "MP4",
    ".acc": "AAC",
    ".m4a": "M4A",
    ".m4p": "M4P",
    ".m4b": "M4B",
    ".3gp": "3GP",
    ".mp3": "MP3",
    ".ogg": "OGG",
    ".ogv": "OGV",
    ".oga": "OGA",
    ".ogx": "OGX",
    ".spx": "SPX",
    ".opus": "OPUS",
    ".ogm": "OGM",
    ".sb0": "SB0",
    ".flac": "FLAC",
    ".wma": "WMA",
    ".rm": "RM",
    ".wav": "WAV",
    ".webm": "WEBM",
  },
};
const image = {
  types: {
    "image/gif": "GIF",
    "image/jpeg": "JPG, JPEG",
    "image/pjpeg": "JPG, JPEG",
    "image/png": "PNG",
    "image/svg+xml": "SVG, SVGZ",
    "image/tiff": "TIF, TIFF",
    "image/vnd.microsoft.icon": "ICO",
    "image/vnd.wap.wbmp": "WBMP",
    "image/webp": "WEBP",
    "image/*": "GIF, JPG, JPEG, PNG, SVG, SVGZ, TIF, TIFF, ICO, WBMP, WEBP",
  },
  expansion: {
    ".gif": "GIF",
    ".jpg": "JPG",
    ".JPG": "JPG",
    ".jpeg": "JPEG",
    ".JPEG": "JPEG",
    ".png": "PNG",
    ".svg": "SVG",
    ".svgz": "SVGZ",
    ".tif": "TIF",
    ".tiff": "TIFF",
    ".ico": "ICO",
    ".wbmp": "WBMP",
    ".webp": "WEBP",
  },
};
const text = {
  types: {
    "text/css": "CSS",
    "text/csv": "CSV",
    "text/html": "HTML, HTM",
    "text/javascript": "JS",
    "text/php": "PHP",
    "text/xml": "XML",
    "text/*": "CSS, CSV, HTML, HTM, JS, PHP, XML",
  },
  expansion: {
    ".css": "CSS",
    ".csv": "CSV",
    ".html": "HTML",
    ".htm": "HTM",
    ".js": "JS",
    ".php": "PHP",
    ".xml": "XML",
  },
};
const video = {
  types: {
    "video/mpeg": "MPG, MPEG, MP1, MP2, MP3, M1V, MPV, M1A, M2A, MPA",
    "video/mp4": "MP4",
    "video/ogg": "OGG, OGV, OGA, OGX, SPX, OPUS, OGM",
    "video/webm": "WEBM",
    "video/x-ms-wmv": "WMV",
    "video/x-flv": "FLV",
    "video/3gpp": "3GPP, 3GP",
    "video/3gpp2": "3GPP2, 3G2",
    "video/*":
      "MPG, MPEG, MP1, MP2, MP3, M1V, MPV, M1A, M2A, MPA, MP4, OGG, OGV, OGA, OGX, SPX, OPUS, OGM, WEBM, WMV, FLV, 3GPP, 3GP, 3GPP2, 3G2",
  },
  expansion: {
    ".mpg": "MPG",
    ".mpeg": "MPEG",
    ".mp1": "MP1",
    ".mp2": "MP2",
    ".mp3": "MP3",
    ".m1v": "M1V",
    ".mpv": "MPV",
    ".m1a": "M1A",
    ".m2a": "M2A",
    ".mpa": "MPA",
    ".mp4": "MP4",
    ".ogg": "OGG",
    ".ogv": "OGV",
    ".oga": "OGA",
    ".ogx": "OGX",
    ".spx": "SPX",
    ".opus": "OPUS",
    ".ogm": "OGM",
    ".webm": "WEBM",
    ".wmv": "WMV",
    ".flv": "FLV",
    ".3gpp": "3GPP",
    ".3gp": "3GP",
    ".3gpp2": "3GPP2",
    ".3g2": "3G2",
  },
};

export const mimes = {
  types: {
    ...application.types,
    ...audio.types,
    ...image.types,
    ...text.types,
    ...video.types,
  },
  expansion: {
    ...application.expansion,
    ...audio.expansion,
    ...image.expansion,
    ...text.expansion,
    ...video.expansion,
  },
  default: {
    application: application.expansion,
    audio: audio.expansion,
    image: image.expansion,
    text: text.expansion,
    video: video.expansion,
  },
};
