import React, {useEffect, useState} from 'react';
import {expandForDatasheet} from "../../api/serviceApi";
import {Divider} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {LongTextFormat, TextSplitter} from "../../Visualization/Tools/TextFormat";

const Expand = ({record}) => {
  const [expandedData, setExpandedData] = useState([]);

  useEffect(() => {
    expandForDatasheet(record.key).then((info) => {
      setExpandedData(info);
    });
  }, []);

  return (
    <div className={'expandInfo'}>
      {record.description?.First_name &&
        <p>First Name: <span>{record.description.First_name}</span></p>
      }
      {record.description?.Surname &&
        <p>Last Name: <span>{record.description.Surname}</span></p>
      }
      {record.description?.Middle_name &&
        <p>Middle Name: <span>{record.description.Middle_name}</span></p>
      }
      {record.description?.address &&
        <p>Address: <span>{record.description.address}</span></p>
      }
      {record.description?.Birth_date &&
        <p>Birth Date: <span>{record.description.Birth_date}</span></p>
      }
      {record.description?.Bok_link &&
        <p>Bok Link: <span><a
          href={record.description.Bok_link} target={'_blank'}>Click</a></span></p>
      }
      {record.description?.Email &&
        <p>Email: <span>{TextSplitter(record.description?.Email)}</span></p>
      }
      {record.description?.name &&
        <p>Full Name: <span>{record.description?.name}</span></p>
      }
      {record.description?.Link_to_other_profiles &&
        <p>Link to other Profiles: <span><a href={TextSplitter(record.description.Link_to_other_profiles)}
                                            target={'_blank'}>Click</a></span></p>
      }
      {record.description?.Phone &&
        <p>Phone Number: <span>+{TextSplitter(record.description.Phone)}</span></p>
      }
      {record.description?.Chair_id &&
        <p>Chair ID: <span>{record.description.Chair_id}</span></p>
      }
      {record.description?.Defence_type &&
        <p>Defence Type: <span>{record.description.Defence_type}</span></p>
      }
      {record.description?.Title &&
        <p>Title: <span>{record.description.Title}</span></p>
      }
      {record.description?.Abstruct &&
        <p>Abstruct: <span>{record.description.Abstruct}</span></p>
      }
      {record.description?.Defence_date &&
        <p>Defence Date: <span>{record.description.Defence_date}</span></p>
      }
      {record.description?.Faculty_id &&
        <p>Faculty ID: <span>{record.description.Faculty_id}</span></p>
      }
      {record.description?.LIB_ID &&
        <p>LIB ID: <span>{record.description.LIB_ID}</span></p>
      }
      {record.description?.Director &&
        <p>Director: <span>{record.description.Director}</span></p>
      }
      {record.description?.Web &&
        <p>Web: <span>{record.description.Web}</span></p>
      }
    </div>
  );
}

export default Expand;
