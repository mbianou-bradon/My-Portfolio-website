import { IoMdSearch } from "react-icons/io"




export default function Members() {
  return (
    <div className="px-4 sm:px-8 min-h-screen">
      <header className="mb-5">
        <h2 className="text-3xl font-semibold mb-5">Blog Posts</h2>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div className="border rounded-full w-[70%] flex px-2 sm:px-4 py-2 text-sm sm:text-[1rem]">
                <input type="text" placeholder="Search for a particular Blog Post" className="bg-transparent min-w-0 w-full focus:outline-0 text-sm sm:px-2 caret-secondary"/>
                <div className="text-xl cursor-pointer"><IoMdSearch/></div>
            </div>


            <div className="w-fit px-6 py-2 bg-primary text-white rounded-lg select-none">
              <div className="flex items-center gap-1">Filter: 
                <select className="bg-transparent px-2 py-1 border text-secondary focus:outline-none">
                    <option value="all">ALL</option>
                    <option value="tailwindcss">Taiwindcss</option>
                    <option value="javascript">Javascript</option>
                    <option value="typescript">Typescript</option>
                    <option value="react">React</option>
                    <option value="reactNative">React Native</option>
                    <option value="expressjs">ExpressJS</option>
                    <option value="nextjs">NextJS</option>
                </select>
              </div>
            </div>
        </div>
      </header>

      {/* Link of all Members */}
        <div className="members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">

        </div>

    </div>
  )
}
