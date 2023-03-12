export default function Campaign() {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        
          <img src="/images/wine-party.jpg" height={1500} width={1000} className="w-[180px] h-auto mr-4"/>
       
        <div>
          <div className="font-bold text-xl">Come to the wine-tasting</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            ipsum fugiat nisi ab reiciendis adipisci perferendis amet porro
            sequi.
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="rounded-1/2 border inline-block border-1">
          <span className="w-28 h-28 flex items-center justify-center -rotate-12">
            Read more
          </span>
        </a>
      </div>
    </div>
  );
}
