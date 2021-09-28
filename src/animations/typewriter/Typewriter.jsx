const Typewriter = () => {

  const typewriterAnimation = (txtElement, words, wait=3000) => {
    console.log(this)
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  const titles = ["Erick.", "a software engineer.", "a nerd.", "a problem solver.", "a team player.", "a leader."]

  // type method 
  // for each word in the array 
  // break down the array into letters 
  // render each character one by one onto the screen 
  // set a timeout for 3 seconds
  // then delete each letter one by one 
  // iterate onto next letter 
  // repeat 

  return (
    <div id="typewriter">
      <h1>Hello, I'm 
        <span className="txt-type" data-wait="3000" data-words='["Erick", "a Developer", "a Problem-Solver"]'></span>
      </h1>
      <h2>Welcome to my Portfolio</h2>
    </div>
  )
}

export default Typewriter
