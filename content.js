let previewModal, scanner

function drawButton (input) {
  let inputHeight = getComputedStyle(input).getPropertyValue('height')
  let scanButton = document.createElement('div')
  let backgroundSize = parseInt(inputHeight) * 0.8
  scanButton.style = `cursor: pointer; opacity: 0.6; position: absolute; right: 40px; height: ${inputHeight}; width: ${inputHeight}; z-index: 99999997; background: url(data:image/png;base64,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) no-repeat left center; background-size: ${backgroundSize}px;`

  return scanButton
}

function drawVideoPreview () {
  let pageWidth = parseInt(getComputedStyle(document.body).getPropertyValue('width'))

  let previewBG = document.createElement('div')
  previewBG.style = `position: absolute; width: 100%; height: 100%; background-color: rgba(50,50,50,0.8);  z-index: 99999999;`
  document.body.prepend(previewBG)

  let closeButton = document.createElement('div')
  closeButton.textContent = '[X]'
  closeButton.addEventListener('click', stopScanning)

  closeButton.style = `position: fixed; top: 50px; right: 50px; z-index: 999999999; color: white; font-size: 30px;`
  previewBG.appendChild(closeButton)

  let preview = document.createElement('video')
  preview.style = `position: fixed; top: 25%; right: ${(pageWidth - 300) / 2}px; width: 300px; z-index: 999999999; color: white;`

  previewBG.appendChild(preview)

  return { modal: previewBG, video: preview }
}

function stopScanning () {
  scanner.stop()
  document.body.removeChild(previewModal)
}

function scan (input) {
  return function () {
    let videoPanel = drawVideoPreview()
    previewModal = videoPanel.modal

    scanner = new Instascan.Scanner({ video: videoPanel.video })
    scanner.addListener('scan', inputScannedContent(input))

    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0])
      } else {
        stopScanning()
        console.error('No cameras found.')
      }
    }).catch(function (e) {
      stopScanning()
      console.error(e)
    })
  }
}

function inputScannedContent (input) {
  return function (content) {
    stopScanning()
    input.value = content
  }
}

function decorateInputs () {
  const inputTypesToDecorate = ['email', 'password', 'search', 'text', 'url']
  let inputs = document.getElementsByTagName('input')

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]
    
    if (inputTypesToDecorate.includes(input.getAttribute('type'))) {
      let scanButton = drawButton(input)
      scanButton.addEventListener('click', scan(input))

      input.before(scanButton)
    }
  }
}

decorateInputs()

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === 'clicked_browser_action') {
//       var firstHref = $('a[href^=\'http\']').eq(0).attr('href')
//
//       console.log(firstHref)
//
//       // This line is new!
//       chrome.runtime.sendMessage({ 'message': 'open_new_tab', 'url': firstHref })
//     }
//   }
// )
//