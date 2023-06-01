import React from 'react'
import './Pagination.css'




const HomePagination = ({ totalPosts, postPerPage, setCurrentPage }) => {

    let pageNos = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNos.push(i)
    }

    return (
        <div className='home-pagination' >
            {pageNos.map((pageNo) => {
                return (
                    <button key={pageNo} onClick={() => setCurrentPage(pageNo)}>{pageNo}</button>
                )
            })}
        </div>
    )
}

export default HomePagination