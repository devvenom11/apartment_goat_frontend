"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/search-geo/route";
exports.ids = ["app/api/search-geo/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch-geo%2Froute&page=%2Fapi%2Fsearch-geo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch-geo%2Froute.tsx&appDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch-geo%2Froute&page=%2Fapi%2Fsearch-geo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch-geo%2Froute.tsx&appDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_HDD_2TB_client_repo_apartment_src_app_api_search_geo_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/search-geo/route.tsx */ \"(rsc)/./src/app/api/search-geo/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search-geo/route\",\n        pathname: \"/api/search-geo\",\n        filename: \"route\",\n        bundlePath: \"app/api/search-geo/route\"\n    },\n    resolvedPagePath: \"/Volumes/HDD 2TB/client-repo-apartment/src/app/api/search-geo/route.tsx\",\n    nextConfigOutput,\n    userland: _Volumes_HDD_2TB_client_repo_apartment_src_app_api_search_geo_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search-geo/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2gtZ2VvJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZWFyY2gtZ2VvJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VhcmNoLWdlbyUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVm9sdW1lcyUyRkhERCUyMDJUQiUyRmNsaWVudC1yZXBvLWFwYXJ0bWVudCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVm9sdW1lcyUyRkhERCUyMDJUQiUyRmNsaWVudC1yZXBvLWFwYXJ0bWVudCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLz82NDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL0hERCAyVEIvY2xpZW50LXJlcG8tYXBhcnRtZW50L3NyYy9hcHAvYXBpL3NlYXJjaC1nZW8vcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZWFyY2gtZ2VvL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VhcmNoLWdlb1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VhcmNoLWdlby9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Wb2x1bWVzL0hERCAyVEIvY2xpZW50LXJlcG8tYXBhcnRtZW50L3NyYy9hcHAvYXBpL3NlYXJjaC1nZW8vcm91dGUudHN4XCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZWFyY2gtZ2VvL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch-geo%2Froute&page=%2Fapi%2Fsearch-geo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch-geo%2Froute.tsx&appDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/search-geo/route.tsx":
/*!******************************************!*\
  !*** ./src/app/api/search-geo/route.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function GET(req) {\n    try {\n        // Extract search parameters from the request URL\n        const { searchParams } = new URL(req.url);\n        // Construct the external API URL\n        const apiUrl = new URL(\"https://api.dibze.com/api/v1/search/geo\");\n        // Append all the query parameters from the request to the external API URL\n        searchParams.forEach((value, key)=>{\n            apiUrl.searchParams.append(key, value);\n        });\n        console.log(\"Constructed API URL:\", apiUrl.toString()); // Debugging\n        // Fetch data from the external API\n        const response = await fetch(apiUrl.toString(), {\n            method: \"GET\",\n            headers: {\n                \"X-API-Key\": \"pk_live_51Abcd1234EfghIjklMnop5678\",\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        // Check if the external API response is successful\n        if (!response.ok) {\n            const errorText = await response.text(); // Get the response error message\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Failed to fetch data: ${errorText}`\n            }, {\n                status: response.status\n            });\n        }\n        // Parse the response data\n        const data = await response.json();\n        // Handle case where the API returns \"No results found\"\n        if (data.code === 404 && data.message === \"No results found\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                results: []\n            }, {\n                status: 200\n            });\n        }\n        // Return the successful response data\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data, {\n            status: 200\n        });\n    } catch (error) {\n        // Handle any server-side errors\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Failed to fetch data\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZWFyY2gtZ2VvL3JvdXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxlQUFlQyxJQUFJQyxHQUFZO0lBQ3BDLElBQUk7UUFDRixpREFBaUQ7UUFDakQsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO1FBRXhDLGlDQUFpQztRQUNqQyxNQUFNQyxTQUFTLElBQUlGLElBQUk7UUFFdkIsMkVBQTJFO1FBQzNFRCxhQUFhSSxPQUFPLENBQUMsQ0FBQ0MsT0FBT0M7WUFDM0JILE9BQU9ILFlBQVksQ0FBQ08sTUFBTSxDQUFDRCxLQUFLRDtRQUNsQztRQUVBRyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCTixPQUFPTyxRQUFRLEtBQUssWUFBWTtRQUVwRSxtQ0FBbUM7UUFDbkMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNVCxPQUFPTyxRQUFRLElBQUk7WUFDOUNHLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxhQUFhO2dCQUNiLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUEsbURBQW1EO1FBQ25ELElBQUksQ0FBQ0gsU0FBU0ksRUFBRSxFQUFFO1lBQ2hCLE1BQU1DLFlBQVksTUFBTUwsU0FBU00sSUFBSSxJQUFJLGlDQUFpQztZQUMxRSxPQUFPcEIscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPLENBQUMsc0JBQXNCLEVBQUVILFVBQVUsQ0FBQztZQUFDLEdBQzlDO2dCQUFFSSxRQUFRVCxTQUFTUyxNQUFNO1lBQUM7UUFFOUI7UUFFQSwwQkFBMEI7UUFDMUIsTUFBTUMsT0FBTyxNQUFNVixTQUFTTyxJQUFJO1FBRWhDLHVEQUF1RDtRQUN2RCxJQUFJRyxLQUFLQyxJQUFJLEtBQUssT0FBT0QsS0FBS0UsT0FBTyxLQUFLLG9CQUFvQjtZQUM1RCxPQUFPMUIscURBQVlBLENBQUNxQixJQUFJLENBQUM7Z0JBQUVNLFNBQVMsRUFBRTtZQUFDLEdBQUc7Z0JBQUVKLFFBQVE7WUFBSTtRQUMxRDtRQUVBLHNDQUFzQztRQUN0QyxPQUFPdkIscURBQVlBLENBQUNxQixJQUFJLENBQUNHLE1BQU07WUFBRUQsUUFBUTtRQUFJO0lBQy9DLEVBQUUsT0FBT0QsT0FBWTtRQUNuQixnQ0FBZ0M7UUFDaEMsT0FBT3RCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUN0QjtZQUFFSyxTQUFTO1lBQXdCSixPQUFPQSxNQUFNSSxPQUFPO1FBQUMsR0FDeEQ7WUFBRUgsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLy4vc3JjL2FwcC9hcGkvc2VhcmNoLWdlby9yb3V0ZS50c3g/ZjA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IHNlYXJjaCBwYXJhbWV0ZXJzIGZyb20gdGhlIHJlcXVlc3QgVVJMXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGV4dGVybmFsIEFQSSBVUkxcbiAgICBjb25zdCBhcGlVcmwgPSBuZXcgVVJMKFwiaHR0cHM6Ly9hcGkuZGliemUuY29tL2FwaS92MS9zZWFyY2gvZ2VvXCIpO1xuXG4gICAgLy8gQXBwZW5kIGFsbCB0aGUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIHRoZSByZXF1ZXN0IHRvIHRoZSBleHRlcm5hbCBBUEkgVVJMXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGFwaVVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3RlZCBBUEkgVVJMOlwiLCBhcGlVcmwudG9TdHJpbmcoKSk7IC8vIERlYnVnZ2luZ1xuXG4gICAgLy8gRmV0Y2ggZGF0YSBmcm9tIHRoZSBleHRlcm5hbCBBUElcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybC50b1N0cmluZygpLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1BUEktS2V5XCI6IFwicGtfbGl2ZV81MUFiY2QxMjM0RWZnaElqa2xNbm9wNTY3OFwiLCAvLyBBZGQgeW91ciBYLUFQSS1LRVkgaGVyZVxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZXh0ZXJuYWwgQVBJIHJlc3BvbnNlIGlzIHN1Y2Nlc3NmdWxcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IC8vIEdldCB0aGUgcmVzcG9uc2UgZXJyb3IgbWVzc2FnZVxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBgRmFpbGVkIHRvIGZldGNoIGRhdGE6ICR7ZXJyb3JUZXh0fWAgfSxcbiAgICAgICAgeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHRoZSByZXNwb25zZSBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIEhhbmRsZSBjYXNlIHdoZXJlIHRoZSBBUEkgcmV0dXJucyBcIk5vIHJlc3VsdHMgZm91bmRcIlxuICAgIGlmIChkYXRhLmNvZGUgPT09IDQwNCAmJiBkYXRhLm1lc3NhZ2UgPT09IFwiTm8gcmVzdWx0cyBmb3VuZFwiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXN1bHRzOiBbXSB9LCB7IHN0YXR1czogMjAwIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBkYXRhXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEsIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAvLyBIYW5kbGUgYW55IHNlcnZlci1zaWRlIGVycm9yc1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImFwaVVybCIsImZvckVhY2giLCJ2YWx1ZSIsImtleSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJlcnJvclRleHQiLCJ0ZXh0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImNvZGUiLCJtZXNzYWdlIiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/search-geo/route.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch-geo%2Froute&page=%2Fapi%2Fsearch-geo%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch-geo%2Froute.tsx&appDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FHDD%202TB%2Fclient-repo-apartment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();