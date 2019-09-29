export default class githubUserData {
  constructor(data) {
    this.data = data;
  }

  numOfRepos() {
    const languagesArray = this.data.map((repo) => (
      repo.language
    ))
    return languagesArray
  }

  nameAndFrequency() {
    const languagesArray = this.numOfRepos();
    var frequency = 1;
    var count = 0;
    var language;
    for (var i = 0; i < languagesArray.length; i++) {
      for (var j = i; j < languagesArray.length; j++) {
        if (languagesArray[i] === languagesArray[j])
          count++;
        if (frequency < count) {
          frequency = count;
          language = languagesArray[i];
        }
      }
      count = 0;
    }
    return [language, frequency]
  }
}
