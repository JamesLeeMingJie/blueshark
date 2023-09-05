import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

export default function Pagination(props: Partial<ReactPaginateProps>) {
  return (
    <div>
      <ReactPaginate
        forcePage={props.forcePage}
        className=" flex gap-2 text-white"
        pageClassName=" border-[1.5px] text-[14px] text-[#767F8F] border-[#2F3C51] hover:border-[#38BDF8] hover:text-white rounded-[4px]"
        pageLinkClassName="w-[35px] h-[35px] flex justify-center items-center"
        breakLabel="..."
        activeClassName="border-[#38BDF8] border-[1.5px]"
        activeLinkClassName="text-white "
        onPageChange={props.onPageChange}
        pageRangeDisplayed={5}
        pageCount={props.pageCount || 1}
        previousClassName="border-[#2F3C51] border-[1.5px] w-[35px] h-[35px] rounded-[4px] flex justify-center items-center"
        previousLabel={<img src="/icons/arrow-right-paging.svg " className="rotate-180" alt="" />}
        nextClassName="border-[#2F3C51] border-[1.5px] rounded-[4px] w-[35px] h-[35px] flex justify-center items-center"
        nextLabel={<img src="/icons/arrow-right-paging.svg " alt="" />}
        disabledClassName={'opacity-50'}
        {...props}
      />
    </div>
  );
}
