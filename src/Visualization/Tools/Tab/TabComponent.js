import React, {Fragment} from 'react';
import {TextSplitter} from "../TextFormat";
import {Card, Space} from "antd";

const TabComponent = ({data}) => {
    return (
        <>
            {data && data?.map((record, i) => {
                return (
                    <Fragment key={i}>
                        <Space
                            direction="vertical"
                            size="middle"
                            style={{
                                display: 'flex',
                            }}
                        >
                            <Card
                                title="General Information"
                            >
                                {record.description?.First_name &&
                                    <p>First Name: {TextSplitter(record.description.First_name)}</p>
                                }
                                {record.description?.Surname &&
                                    <p>Last Name: {TextSplitter(record.description.Surname)}</p>
                                }
                                {record.description?.Middle_name &&
                                    <p>Middle Name: {TextSplitter(record.description.Middle_name)}</p>
                                }
                                {record.description?.address &&
                                    <p>Address: {TextSplitter(record.description.address)}</p>
                                }
                                {record.description?.Birth_date &&
                                    <p>Birth Date: {TextSplitter(record.description.Birth_date)}</p>
                                }

                            </Card>
                            <Card
                                title="Contacts"
                            >
                                {record.description?.Email &&
                                    <p>Email: {TextSplitter(record.description.Email)}</p>
                                }
                                {record.description?.Phone &&
                                    <p>Phone Number: {TextSplitter(record.description.Phone)}</p>
                                }
                                {record.description?.Web &&
                                    <p>Web: {TextSplitter(record.description.Web)}</p>
                                }
                            </Card>
                            <Card
                                title={'Scientific information'}
                            >
                                {record.description?.Bok_link &&
                                    <p>Bok Link: <a href={TextSplitter(record.description.Bok_link)}
                                                    target={"_blank"}>Click</a></p>
                                }
                                {record.description?.Defence_type &&
                                    <p>Defence Type: {TextSplitter(record.description.Defence_type)}</p>
                                }
                                {record.description?.Defence_date &&
                                    <p>Defence Date: {TextSplitter(record.description.Defence_date)}</p>
                                }
                                {record.description?.Title &&
                                    <p>Title: {TextSplitter(record.description.Title)}</p>
                                }
                                {record.description?.Link_to_other_profiles &&
                                    <p>Link to other Profiles: <a
                                        href={TextSplitter(record.description.Link_to_other_profiles)}>Click</a></p>
                                }
                            </Card>
                            <Card
                                title={'Other Information'}>
                                {record.description?.Faculty_id &&
                                    <p>Faculty ID: {TextSplitter(record.description.Faculty_id)}</p>
                                }
                                {record.description?.LIB_ID &&
                                    <p>LIB ID: {TextSplitter(record.description.LIB_ID)}</p>
                                }
                                {record.description?.Director &&
                                    <p>Director: {TextSplitter(record.description.Director)}</p>
                                }
                                {record.description?.Chair_id &&
                                    <p>Chair ID: {TextSplitter(record.description.Chair_id)}</p>
                                }

                                {record.description?.Abstruct &&
                                    <p>Abstruct: {TextSplitter(record.description.Abstruct)}</p>
                                }
                            </Card>
                        </Space>
                    </Fragment>
                );
            })}
        </>
    )
}

export default TabComponent;
