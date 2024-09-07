import React from 'react';

const Employes = () => {
    return (
        <div>
            <div className=' px-20 font-serif mt-10'>
                 <h1 className=' text-3xl text-green-500 mb-9'> All Employe Pepole</h1>
                 {/*  card */}
                 <div className=' relative mb-10 w-[220px] h-[220px] border '>
                    <img src="https://i.ibb.co/LC8pXsX/images-19.jpg" className=' w-full object-cover h-full' alt="" />
                    {/*  text  */}
                    <div className=' absolute top-[198px]   '>
                        <h1 className=' bg-green-500   w-[220px] rounded px-2 '> Prodeep Kumar</h1>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Employes;