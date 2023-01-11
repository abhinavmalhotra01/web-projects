
import './App.css';
import Game from './components/Game'





function App() {
  return (
   <div>
    <Game/>
   </div>
  );
}

export default App;


// hello - so this is a famous game -> Game Of Life 
// to run in browser -> you can read read.me (general react app guidelines)
// the rules of game ->
//                      1. before clicking run -> you can toggle over the board (white means cell is living) 
//                      2. after selecting your initial state(any number of random cells over board)  // can also choose random initial state
//                      3. after pressing "Run" button -> the game will play according to the rules:
//                                                                                                  (i.)  Any live cell with fewer than two live neighbors dies, as if caused by under population.
//                                                                                                  (ii.) Any live cell with two or three live neighbors lives on to the next generation.
//                                                                                                  (iii.) Any live cell with more than three live neighbors dies, as if by overpopulation.
//                                                                                                  (iv.)  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
//                      4. the transitions will happen according to the time , which can be changed 
//                      5. once clicking stop -> the baord will stop at the current configuration ; on clicking clear -> the board go emtpy(all black cells)

// thanks -abhinav