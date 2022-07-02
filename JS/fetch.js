// Goi len API nhung noi dung luu tru o back-end
// API (url): cong giao tiep giua cac phan mem
//CRUD -> 
//Create->POST
// Read->GET
// Update->PUT/PATCH
// Delete->DELETE
//Postman
// BE -> API ->Fetch -> JSON/XML
// JSON.parse -> JavaScript type
// -> Render ra giao dien voi HTML

// var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// //stream
// fetch(postAPI) 
//     .then(function(reponse) {
//         return reponse.json();
//         //JSON.parse -> JSON -> JavaScript
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });
//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
        
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

//==============================================================
//JSON SERVER
// var courseAPI = 'http://localhost:3000/courses';
// fetch(courseAPI)
//     .then(function(reponse) {
//         return reponse.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

//================================================================


var courseApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

//Function

function getCourses(callback) {
    fetch(courseApi)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
    .then(function(reponse) {
        reponse.json();
    })
    .then(callback)
}
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        
    }
    fetch(courseApi + '/' + id, options)
        .then(function(reponse) {
            reponse.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourses(courses) {
    var listCourseBlock = document.getElementById('list-course');
    var htmls =courses.map(function(course) {
        return `
            <li class= "course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick = " handleDeleteCourse(${course.id})">Xóa</button>

            </li>
        `
    });
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
       createCourse(formData, function() {
            getCourses(renderCourses);
       });
    }
}