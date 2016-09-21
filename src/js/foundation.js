var $ = require("../../node_modules/foundation-sites/vendor/jquery/dist/jquery.min.js");
window.jQuery = $; // foundation en a besoin donc on l'accroche à window pour qu'elle soit globale

require('../../node_modules/foundation-sites/dist/foundation.min.js');

$(document).foundation();
