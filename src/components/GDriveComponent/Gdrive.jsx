import { NavBar } from "../utlis/NavBar"

export const GDrive = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[whitesmoke] text-center w-2/5 mx-auto m-4 h-auto rounded " >
        <form className="">
          <div className="flex flex-col ">
            <label className="text-lg p-2">Upload a file</label>
            <input className="mx-auto pb-4" type="file" />
          </div>
        </form>
      </div>
    </div>

  )
}