const gitHub = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=> {
    const userText = e.target.value;

    if(userText !== ''){
        gitHub.getUsers(userText)

        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('Profile not found', 'alert alert-danger')

            } else {
                ui.showProfile(data.profile)
                ui.showRepo(data.repo);
            }
        })
    } else {
        ui.clearProfile();
    }
})