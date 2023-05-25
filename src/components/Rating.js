import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { HiOutlineStar,HiStar,  } from 'react-icons/hi'
export function Rating({
  rate
}) {
  return <div className="text-orange-400 text-2xl">
                        {rate < 0.5 ? <div className="rateCont">
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 0.5 && rate < 1 ? <div className="rateCont">
                                                            <FaStarHalfAlt />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 1 && rate < 1.5 ? <div className="rateCont">
                                                            <FaStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 1.5 && rate < 2 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStarHalfAlt />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 2 && rate < 2.5 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 2.5 && rate < 3 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStarHalfAlt />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 3 && rate < 3.5 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <HiOutlineStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 3.5 && rate < 4 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStarHalfAlt />
                                                            <HiOutlineStar />
                                                </div> : rate >= 4 && rate < 4.5 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <HiOutlineStar />
                                                </div> : rate >= 4.5 && rate < 5 ? <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStarHalfAlt />
                                                </div> : <div className="rateCont">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStarHalfAlt />
                                                </div>}
                     </div>;
}
