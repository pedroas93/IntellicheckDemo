/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC, useEffect, useState } from "react";
// import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

// import { AddAdmin } from "../AddAdmin/AddAdmin";
import { BreadCrumb } from "../../../../components/ui/BreadCrumb/BreadCrumb";
// import { DeleteAdmin } from "../DeleteAdmin/DeleteAdmin";
// import ManageUsersService from "../../api/investors";
// import { Modal } from "@/components/ui/Modal/Modal";
import { Table } from "../../../../features/admin/components/Table";
// import { TableStatus } from "../TableStatus/TableStatus";
import { Tabs } from "../../../../components/ui/Tabs/Tabs";
import type { User } from "../../types/dashborad";
// import UserConfig from "../UserConfig/UserConfig";
// import {
//   // emptyObject,
//   // findIndex,
// //   findPermission,
// } from "@/utils/common-functions";
// import { TabData } from "../../utils/tabs";
// import userStore from "@/stores/user-store.ts";
// import { PermissionType } from "@/types/api/permissions-type";
import { useNavigate } from "@tanstack/router";
import { TableStatus } from "../TableStatus/TableStatus";
/* import ManageNotificationService from "../../../notifications/api/notification"; */

interface SuccessProps {}

export const UserTable: FC<SuccessProps> = () => {
  const navigate = useNavigate();
  const [dataUsers, setDataUsers]   = useState([]);
  // const [openModal, setOpenModal] = useState<boolean>(false);
  // const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  // const [detailModal, setDetailModal] = useState<boolean>(true);
  // const [deleteId, setDeleteId] = useState<string>("");
  // const [searchValue, setSearchValue] = useState<string>("");
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // const userInfo = userStore((state) => state.userInfo);
  // const userLoggedInfo = userStore((state) => state.loggedUserInfo);

  // /* 	const createLedgerQuery = useMutation(async (body: any) => {
  // 	return ManageNotificationService.createNotifications(body);
  // }); */

  const getUsers = async (): Promise<void> => {
    try {
      // const apiUrl = "http://localhost:3000/login";

      // console.log("What is data ---> ", data);

      // const response = await axios.post(apiUrl, data);
      // console.log("Response Data:", response.data);

      // if ((response.data.role = "superAdmin")) {
      //   const componentName = "Login";

      //   void navigate({ to: `/manage-users/admins`, state: { componentName } });
      // } else {
      //   void navigate({ to: `/homeUser` });
      // }

      const apiUrl = "http://localhost:3000/get-users";
      const response = await axios.get(apiUrl);

      console.log("response data table ---> ", response);

      if (response.data && response.data.users) {
        const dataResponse = response.data.users.map((user) => ({
          id: user.id,
          name: user.userName || "",
          email: user.email || "",
          phone: user.phoneNumber || "",
          status: user.status || "",
        }));

        console.log("Data Example:", dataResponse);
		setDataUsers(dataResponse)
      } else {
        console.error("Invalid response format. 'users' property not found.");
      }
    } catch (error) {
      console.log(error);
      console.error("Error fetching data:", error);

      //   setLoginError("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    console.log("response data table ---> ");
    getUsers();
  }, []);
  // useEffect(() => {
  // 	if (!emptyObject(userInfo)) {
  // 		setSelectedUser(userInfo);
  // 	}
  // }, [userInfo]);

  // const adminQuery = useQuery(
  // 	["admin-query"],
  // 	() => {
  // 		return findPermission(
  // 			userLoggedInfo?.role,
  // 			userLoggedInfo?.permissionGroup?.permissions || [],
  // 			PermissionType.VIEW_ADMINS
  // 		) ||
  // 			findPermission(
  // 				userLoggedInfo?.role,
  // 				userLoggedInfo?.permissionGroup?.permissions || [],
  // 				PermissionType.EDIT_ADMINS
  // 			)
  // 			? ManageUsersService.filterAllAdmins(searchValue)
  // 			: [];
  // 	},
  // 	{ enabled: true, staleTime: 1000 * 60 * 60 * 24 }
  // );

  // const deleteAdminMutation = useMutation((id: string) => {
  // 	return ManageUsersService.deleteUser(id);
  // });

  // const handleSuccessDelete = async (): Promise<void> => {
  // 	await adminQuery.refetch();
  // 	setOpenDeleteModal(false);
  // 	setDetailModal(false);
  // 	deleteAdminMutation.reset();
  // };

  // useEffect(() => {
  // 	if (deleteAdminMutation.isSuccess) {
  // 		void handleSuccessDelete();
  // 	}
  // }, [deleteAdminMutation]);

  // const handleDeleteUser = (id: string) => {
  // 	deleteAdminMutation.mutate(id);
  // 	/* 		createLedgerQuery.mutate({
  // 		title: "Delete User",
  // 		timestamp: new Date(),
  // 		content: `${userLoggedInfo.firstName} ${userLoggedInfo.lastName}  delete a user !`,
  // 		additionalData: "",
  // 		userFullName: `${userLoggedInfo.firstName} ${userLoggedInfo.lastName}`,
  // 		priority: "HIGH",
  // 		type: "ALERT",
  // 		roles: ["super-admin"],
  // 	}); */
  // };

  // const handleDeleteAdmin = (id: string) => {
  // 	setOpenDeleteModal(!openDeleteModal);
  // 	setDeleteId(id);
  // };

  // const closeDeleteAdminModal = (): void => {
  // 	setOpenDeleteModal(!openDeleteModal);
  // };

  // const addAdmin = (): void => {
  // 	setOpenModal(!openModal);
  // };

  // const closeModal = (): void => {
  // 	setOpenModal(false);
  // };

  // const successCreateAdmin = async (): Promise<void> => {
  // 	void adminQuery.refetch();
  // 	setOpenModal(false);
  // };

  // const handleSearch = (data: string) => {
  // 	setSearchValue(data);
  // 	return data;
  // };

  // const handleRowClicked = (row: unknown): void => {
  // 	setSelectedUser(row as User);
  // };

  // const handleRefetch = async (): Promise<void> => {
  // 	console.log(
  // 		"🚀 ~ file: UserTable.tsx:87 ~ handleRefetch ~ handleRefetch:"
  // 	);
  // 	await adminQuery.refetch();
  // };

  // useEffect(() => {
  // 	void adminQuery.refetch();
  // }, [searchValue]);

  // const conditionalRowStyles = [
  // 	{
  // 		when: (row: User) => !row?.isActive,
  // 		style: {
  // 			opacity: 0.4,
  // 		},
  // 	},
  // ];

  const columns = [
    {
      //   name: "#",
      maxWidth: "50px",
      //   cell: (row) => <CustomTitle row={row} />,
      //   selector: (row: User): number =>
      //     findIndex(adminQuery.data || [], row?.id || ""),
      omit: false,
    },
    {
      name: "name",
      selector: (row: User): string => `${row?.name}`,
      sortable: true,
      omit: false,
    },
    {
      name: "Email",
      selector: (row: User): string => row?.email || "",
      sortable: true,
      omit: false,
    },
    {
      name: "Phone Number",
      selector: (row: User): string => row?.phone || "",
      omit: false,
    },
    {
      name: "Email Address",
      selector: (row: User): string => row?.email || "",
      omit: false,
    },
    {
      name: "Status",
      maxWidth: "50px",
      selector: (row: User): JSX.Element => (
        <TableStatus status={row.status ? "Active" : "Inactive"} />
      ),
      sortable: true,
      omit: false,
    },
  ];

  // useEffect(() => {
  // 	const find = findPermission(
  // 		userLoggedInfo?.role,
  // 		userLoggedInfo?.permissionGroup?.permissions || [],
  // 		PermissionType.VIEW_ADMINS
  // 	);
  // 	const findEdit = findPermission(
  // 		userLoggedInfo?.role,
  // 		userLoggedInfo?.permissionGroup?.permissions || [],
  // 		PermissionType.EDIT_ADMINS
  // 	);

  // 	if (!find && !findEdit && !emptyObject(userLoggedInfo)) {
  // 		void navigate({ to: `/manage-users/investors` });
  // 	}
  // 	void adminQuery.refetch();
  // }, [userLoggedInfo]);

//   const dataExample = [
//     {
//       id: 1,
//       name: "John Doeeeee",
//       email: "john.doe@example.com",
//       phone: "123-456-7890",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "Jane Doe",
//       email: "jane.doe@example.com",
//       phone: "987-654-3210",
//       status: "Inactive",
//     },
//   ];

  return (
    <>
      {/* {adminQuery.data && ( */}
      <Table
        // showAddButton={findPermission(
        //   userLoggedInfo?.role,
        //   userLoggedInfo?.permissionGroup?.permissions || [],
        //   PermissionType.INVITE_ADMINS
        // )}
        // handleSearchValue={handleSearch}
        // onClickButton={addAdmin}
        columns={columns}
        data={dataUsers}
        // loading={adminQuery.isLoading}
        buttonText="Add admin"
        // widthSearch={
        //   findPermission(
        //     userLoggedInfo?.role,
        //     userLoggedInfo?.permissionGroup?.permissions || [],
        //     PermissionType.INVITE_ADMINS
        //   )
        //     ? "150px"
        //     : "50px"
        // }
        // conditionalRowStyles={conditionalRowStyles}
        // onRowClicked={handleRowClicked}
      >
        <>
          <div>
            <BreadCrumb initialTab="Manage Users" actualTab="Admins" />
          </div>
          <div className="relative z-10">
            <Tabs
              //   tabs={[
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.VIEW_ADMINS
              //     ) ||
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.EDIT_ACCOUNTING
              //     )
              //       ? TabData.admins
              //       : TabData.empty,
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.VIEW_INVESTORS
              //     ) ||
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.EDIT_INVESTORS
              //     )
              //       ? TabData.investors
              //       : TabData.empty,
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.VIEW_ACCOUNTS
              //     ) ||
              //     findPermission(
              //       userLoggedInfo?.role,
              //       userLoggedInfo?.permissionGroup?.permissions || [],
              //       PermissionType.EDIT_ACCOUNTING
              //     )
              //       ? TabData.accounting
              //       : TabData.empty,
              //   ]}
              actualTab="admins"
            />
          </div>
        </>
      </Table>
      {/* )} */}
      {/* <Modal
				visible={openModal}
				onHide={closeModal}
				title="Add Admin"
				width="30vw"
			>
				<AddAdmin handleSuccess={successCreateAdmin} />
			</Modal>
			<Modal
				visible={openDeleteModal}
				onHide={closeDeleteAdminModal}
				title="Delete User"
				width="450px"
			>
				<DeleteAdmin id={deleteId} handleDeleteAdmin={handleDeleteUser} />
			</Modal>
			{selectedUser && (
				<UserConfig
					user={selectedUser}
					setUser={setSelectedUser}
					type="admin"
					callBack={handleRefetch}
					setOpenActivityModal={setDetailModal}
					activityModal={detailModal}
					deleteUser={handleDeleteAdmin}
				/> */}
      {/* )} */}
    </>
  );
};
