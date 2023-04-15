import React from 'react'

function BlogCard() {

    let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos, hic, id aut eaque ut soluta accusamus impedit mollitia, porro labore? Expedita labore est eligendi. Sit laborum consectetur placeat atque?"
     
    if(desc.length >= 80){
        desc = desc.substring(0, 80) + "...";
    }


  return (
    <div className="bg-primary h-[25rem] rounded-lg overflow-hidden hover:-translate-y-3 hover:scale-[1.02] border">
        <div className="h-[60%] bg-slate-800 overflow-hidden">
            <img src="" alt="" className="h-full w-full object-cover"/>
        </div>
        <div className="h-[40%] px-4 py-2 flex flex-col">
            <div className="mb-2">
                <p className="text-[0.7rem] mb-2 tracking-tighter">Posted on <span className="text-secondary/50">April 9, 2023</span></p>
                <h2 className="font-semibold text-xl">How to Host a typescript application on render</h2>
            </div>
            <p className="text-xs">
                { desc}
            </p>
        </div>
    </div>
  )
}

export default BlogCard
