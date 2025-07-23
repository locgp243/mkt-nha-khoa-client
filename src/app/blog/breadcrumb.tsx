export default function breadcrumd() {
  return (
    <div className="flex items-center breadcrumbs cursor-pointer">
      <div className="relative bg-[#C1F1FF] h-[34px] text-gray-700 text-sm breadcrumbsList pr-6 flex items-center hover:scale-[1.1] hover:z-10">
        <span>CRM - Phần mềm quản lý nha khoa</span>
      </div>
      <div className="bg-[#81d4fa] relative h-[34px] text-gray-700 text-sm pl-4 pr-6 breadcrumbsList flex items-center hover:scale-[1.1] hover:z-10">
        <span>Blog</span>
      </div>
    </div>
  );
}
