console.log("Hello JS");

const textBox = document.getElementById("text-box");
const itemsContainer = document.getElementById("items-container");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");

console.log(tabBtn);


let urls = [];

saveBtn.addEventListener("click", addURL)
deleteBtn.addEventListener("click", deleteURL)


function deleteURL() {
  urls = []
  render()
}

tabBtn.addEventListener("click", function(){
  console.log("Ok");
  
 /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // since only one tab should be active and in the current window at once
      // the return variable should only have one entry
      let activeTab = tabs[0]
      let activeTabId = activeTab.id // or do whatever you need
  })
  
  urls.push(tabs[0].url)*/

  
})



function addURL() {
    const link = textBox.value
    textBox.value = ""

    if(link.trim() !== "") {
        urls.push({
            link: link
        })

        render()
    }

}



function render(params) {
 let template = ""
  urls.forEach((element) => {
    template += `
            <li>
          <a href=${element.link}>${element.link}</a>
         </li>
        `;
  });

  itemsContainer.innerHTML = template
}
