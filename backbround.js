// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function (tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var activeTab = tabs[0]
//     chrome.tabs.sendMessage(activeTab.id, { 'message': 'clicked_browser_action' })
//   })
// })
//
// // This block is new!
// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === 'open_new_tab') {
//       chrome.tabs.create({ 'url': request.url })
//     }
//   }
// )
//
// chrome.browserAction.onClicked.addListener(function (tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!')
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   })
// })
//
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete' && tab.active) {
//
//     // do your things
//
//   }
// })