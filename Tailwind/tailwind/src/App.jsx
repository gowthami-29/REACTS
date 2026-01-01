function App(){
  return(
    <div>
      <div class="p-20">
        <button className="rounded border bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 transistion">CLICK ME</button>
      </div>
      <div>
        <div class="rounded-lg object-cover shadow-lg overflow-hidden transistion hover:scale-105 w-64">
          <img src="https://picsum.photos/300" />
        </div>
      </div>
      <div class="pt-20 pl-20">
        <div><h2 className="text-xl md:text-3xl lg:5xl bg-gradient-to-r from-purple-500 to-pink-500
        text-transparent bg-clip-text">TAILWIND CSS</h2></div>
      </div>
      <div class="p-20">
        <ol class="list-disc list-inside pl-5 hover:text-blue-600">
          <li >apple</li>
          <li>banana</li>
          <li>cat</li>
          <li>dog</li>
        </ol>
      </div>
      <div className="max-w-sm bg-white rounded-lg shadoe-lg overflow-hidden hover:shadow-xl">
        <img src="https://picsum.photos/300/250" />
       <h1 class="text-2xl font-bold mb-2">hello</h1>
       <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Neque necessitatibus maiores excepturi assumenda voluptatibus amet. Delectus, neque mollitia reiciendis pariatur maiores nobis dicta! Optio 
        vitae voluptas, soluta tempora natus explicabo?</p>
        <button class="rounded border">click me</button>
      </div>
      <div>
        <section className="max-w-4xl mx-auto mt-10">
          <h2>student table</h2>
          <table>
           <thead>
             <tr className="bg-gray-800 text-white">
              <th className="p-3" >id</th>
              <th className="p-3">name</th>
              <th className="p-3">course</th>
            </tr>
           </thead>
           <tbody>
            <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-gray-400">
              <td className="p-3">1</td>
              <td className="p-3">gowr</td>
              <td className="p-3">mern</td>
            </tr>
             <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-gray-400">
              <td className="p-3">2</td>
              <td className="p-3">ghuj</td>
              <td className="p-3">mern</td>
            </tr>
             <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-gray-400">
              <td className="p-3">3</td>
              <td className="p-3">hti</td>
              <td className="p-3">mern</td>
            </tr>
             <tr className="odd:bg-gray-200 even:bg-gray-300 hover:bg-gray-400">
              <td className="p-3">4</td>
              <td className="p-3">hiyrf</td>
              <td className="p-3">mern</td>
            </tr>
           </tbody>
          </table>
        </section>
      </div>
      <div>
        <section className="p-3">
          <h2>CONTACT FORM</h2>
          Name:
          <input type="text" placeholder="name" className="rounded border focus:none: focus:ring-2 focus:ring-blue-400"/><br /><br></br>
          Email:
          <input type="email" placeholder="email" className="rounded border focus:none: focus:ring-2 focus:ring-blue-400" /><br /><br />
          Password:
          <input type="password" placeholder="password" className="rounded border focus:none: focus:ring-2 focus:ring-blue-400 focus-visible:h-4"/><br /><br />
          <button className="rounded border focus:none: focus:ring-2 focus:ring-blue-400">SUBMIT</button>
        </section>
      </div>
      <div>
        <nav>
          <ul className="flex p-2 md:flex-row">
            <li className="p-3"><a href="#">home</a></li>
            <li className="p-3"><a href="#">About</a></li>
            <li className="p-3"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )

}
export default App;