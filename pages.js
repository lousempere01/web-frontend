// Create page
document.addEventListener("DOMContentLoaded", () => {
  const addPage = document.querySelector("#addPage");
  const titlepage = document.querySelector("#titlepage");
  const content = document.querySelector("#content");
  const image = document.querySelector("#image");
  const categories = document.querySelector("#categories");
  const createpage = document.querySelector("#createpage");

  addPage.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Created Page");
    const formData = {
      title: titlepage.value,
      content: content.value,
      image: image.value,
      categories: categories.value,
    };
    console.log(formData);

    try {
      const response = await fetch(
        "https://daily-diaries-server.onrender.com/api/pages/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("ok");
        window.location.href = "pages.html";
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  });
});
