import React from 'react'

const Nodata = () => {
  return (
    <div>
      <div className="text-center py40">
        <div>
          <div className="flex justify-center mbpx10">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/278/184/small_2x/file-not-found-3d-render-icon-illustration-with-transparent-background-empty-state-png.png"
              alt="no-data"
              className="nodata-img object-contain"
            />
          </div>
          <h5 className="fsize26 md-fsize18 sm-fsize16 mtpx1 mbpx1 textprimary">
            NO data Found
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Nodata
