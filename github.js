class GitHub {
    constructor(){
        this.client_id = '2cdc625c9cf4a1d6cf18';
        this.client_secret = '93de485bbeb46fd983e7f3b21f0a9ebcd7c10b10';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repo = await reposResponse.json();

        return {
            profile,
            repo
        }
    }
}