/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Dropdown,
  notification,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import moment from "moment";
import { useState } from "react";
import {
  useGetAllRegisteredSemestersQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/adminFeatures/courseManagement.api";
import { TSemester } from "../../../types";

type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;
const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];
const RegisteredSemesters = () => {
  const [semesterId, setSemesterId] = useState("");

  const { data: registeredSemesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation();

  const tableData = registeredSemesterData?.data?.map(
    ({ _id, status, academicSemester, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester.name}-${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );

  const handleStatusUpdate = async (data: any) => {
    if (!semesterId) {
      notification.error({ message: "No semester selected!" });
      return;
    }

    const updateData = {
      id: semesterId,
      data: { status: data.key },
    };

    try {
      await updateSemesterStatus(updateData).unwrap();
      notification.success({
        message: "Semester status updated successfully!",
      });
    } catch (error) {
      notification.error({ message: "Failed to update status." });
    }
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const getColor = (status: string) => {
    switch (status) {
      case "UPCOMING":
        return "blue";
      case "ONGOING":
        return "green";
      case "ENDED":
        return "red";
      default:
        return "gray";
    }
  };

  const columns: TableColumnsType<TTableData> = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status: string) => <Tag color={getColor(status)}>{status}</Tag>,
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      key: "endDate",
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default RegisteredSemesters;

//   const onChange: TableProps<TTableData>["onChange"] = (
//     _pagination,
//     filters,
//     _sorter,
//     extra
//   ) => {
//     if (extra.action === "filter") {
//       const queryParams: TQueryParam[] = [];

//       setParams(queryParams);
//     }
//   };
