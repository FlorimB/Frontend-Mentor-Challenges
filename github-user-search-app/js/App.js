document.addEventListener('DOMContentLoaded', () => {
    const lightBtn = document.querySelector('.light--mode');
    const darkBtn = document.querySelector('.dark--mode');
    const root = document.documentElement;

    lightBtn.style.display = 'none';

    lightBtn.addEventListener('click', () => {
        root.setAttribute('color-mode', 'light');
        lightBtn.style.display = 'none';
        darkBtn.style.display = 'flex';
    });

    darkBtn.addEventListener('click', () => {
        root.setAttribute('color-mode', 'dark');
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'flex';
    });

    document.querySelector('.btn-primary').addEventListener('click', () => {
        const input = document.querySelector('#search-input');
        const image = document.querySelector('.img-container');
        const fullName = document.querySelector('.full-name');
        const username = document.querySelector('.username');
        const joined = document.querySelector('.joined');
        const bio = document.querySelector('.bio');
        const repos = document.querySelector('.repo-total');
        const followers = document.querySelector('.follower-total');
        const following = document.querySelector('.following-total');
        const location = document.querySelector('.location-result');
        const twitter = document.querySelector('.twitter-result');
        const website = document.querySelector('.website-result');
        const company = document.querySelector('.company-result');
        let ifError = document.querySelector('.if-error');


        if (input.value === '' || input.value === null) {
            ifError.style.display = 'flex';
            ifError.style.visibility = 'visible';
        } else  {
            ifError.style.visibility = 'hidden';
            const url = `https://api.github.com/users/${input.value}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const joinedDate = data.created_at.slice(0, data.created_at.length - 10);
                    image.style.backgroundImage = `url("${data.avatar_url}")`;
                    image.style.border = 'none';
                    fullName.innerHTML = data.name;
                    username.innerHTML = '@' + data.login;
                    joined.innerHTML = 'Joined ' + joinedDate;
                    bio.innerHTML = data.bio;
                    repos.innerHTML = data.public_repos;
                    followers.innerHTML = data.followers;
                    following.innerHTML = data.following;
                    location.innerHTML = data.location === '' || data.location === null ? "No Location" : data.location;
                    twitter.innerHTML = data.twitter_username === '' || data.twitter_username === null ? "No Twitter" : data.twitter_username;
                    website.innerHTML = data.blog === '' || data.blog === null ? "No Website" : data.blog;
                    company.innerHTML = data.company === '' || data.company === null ? "No Company" : data.company;
                });
        }
    });
});