function skillsMember() {
  let member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    // Method
    showSkills: function() {
      console.log(this.skills);
    }
  };
  member.showSkills();
}