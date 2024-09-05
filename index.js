console.log("Hello JS");

const textBox = document.getElementById("text-box");
const itemsContainer = document.getElementById("items-container");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");


const urls = [];

saveBtn.addEventListener("click", addURL)


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
