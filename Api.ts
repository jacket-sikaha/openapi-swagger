/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponseVoid {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: object | null;
}

export interface FaultTypeUpdateRequest {
  /** 故障名称 */
  name: string;
  /** 故障描述 */
  description?: string;
  /** 故障代码标识符 */
  errorCodeIdentifier?: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue?: number;
  /** 故障处理方法 */
  troubleshooting?: TroubleshootingStep[];
  /**
   * 序号
   * @format int32
   */
  sequence?: number;
  /**
   * ID
   * @format int32
   */
  id?: number;
}

/** 故障处理方法 */
export interface TroubleshootingStep {
  description?: string;
  imageUrl?: string;
}

export interface ApiResponseFaultTypeDetailDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: FaultTypeDetailDto;
}

/** 返回数据 */
export type FaultTypeDetailDto = {
  /**
   * id
   * @format int32
   */
  id?: number;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
  /** 企业 */
  iotProduct?: ItemNameDto;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /** 企业 */
  organization?: ItemNameDto;
  /** 故障名称 */
  name?: string;
  /** 故障描述 */
  description?: string;
  /** 故障代码标识符 */
  errorCodeIdentifier?: string;
  /**
   * 故障代码值
   * @format int32
   */
  errorCodeValue?: number;
  /**
   * 序号
   * @format int32
   */
  sequence?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updatedAt?: string;
  /** 故障处理方法 */
  troubleshooting?: TroubleshootingStep[];
} | null;

/** 企业 */
export interface ItemNameDto {
  /** 名称 */
  name?: string;
}

export interface UpdateServiceDeskSettingRequest {
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 工单最少图片数量，0表示无要求
   * @format int32
   */
  workOrderMinimumImages?: number;
  /** 是否开启工单审核机制 */
  enableWorkOrderReview?: boolean;
}

export interface ApiResponseSettingServiceDeskDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: SettingServiceDeskDto;
}

/** 返回数据 */
export type SettingServiceDeskDto = {
  /**
   * id
   * @format int32
   */
  id: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId: number;
  /**
   * 工单至少需要多少张图片
   * @format int32
   */
  workOrderMinimumImages: number;
  /** 是否开启工单审核 */
  enableWorkOrderReview: boolean;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt: string;
  /**
   * 修改日期
   * @format date-time
   */
  updatedAt: string;
} | null;

export interface CreateRepairOrderRequest {
  /**
   * 设备ID
   * @format int32
   */
  deviceId: number;
  /** 故障识别符 */
  errorCodeIdentifier: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue: number;
}

export interface ApiResponseRepairOrderDetailDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: RepairOrderDetailDto;
}

/** 返回数据 */
export type RepairOrderDetailDto = {
  /**
   * ID
   * @format int32
   */
  id: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId: number;
  /** 企业信息 */
  organization: SimpleOrganizationInfoDto;
  /**
   * 创建人ID
   * @format int32
   */
  creatorId: number;
  /** 创建人信息 */
  creator: SimpleUserInfoDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId: number;
  /**
   * 设备ID
   * @format int32
   */
  deviceId: number;
  /** 设备编号 */
  deviceNo: string;
  /** 故障识别符 */
  errorCodeIdentifier: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue: number;
  /**
   * 关联工单ID
   * @format int32
   */
  workOrderId: number;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt: string;
} | null;

/** 企业信息 */
export interface SimpleOrganizationInfoDto {
  /**
   * 企业ID
   * @format int32
   */
  id?: number;
  /** 企业名称 */
  name?: string;
}

/** 创建人信息 */
export interface SimpleUserInfoDto {
  /**
   * 用户ID
   * @format int32
   */
  id?: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /** 用户名 */
  username?: string;
  /** 手机号 */
  mobile?: string;
  /** 邮箱 */
  email?: string;
  /** 姓名 */
  realName?: string;
  /** 用户昵称 */
  nickname?: string;
  /** 国家 */
  country?: string;
  /** 省份 */
  province?: string;
  /** 城市 */
  city?: string;
  /** 镇/区 */
  district?: string;
}

export interface IntegerIdRequest {
  /**
   * 记录id
   * @format int32
   */
  id: number;
}

export interface ApiResponseWorkOrderDetailDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkOrderDetailDto;
}

/** 图片 */
export interface FileMetadata {
  /** 文件url */
  fileUrl?: string;
  /** 文件名 */
  filename?: string;
  /** 文件路径 */
  filePath?: string;
  /** 文件类型 */
  fileType?: "IMAGE" | "VIDEO";
}

/** 返回数据 */
export type WorkOrderDetailDto = {
  /**
   * 工单ID
   * @format int32
   */
  id?: number;
  /**
   * 品牌企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 直属企业ID
   * @format int32
   */
  affiliateId?: number;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单类型 */
  workOrderType?: "0" | "1";
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /** 服务地址 */
  address: string;
  /** 客户帐号 */
  clientUsername: string;
  /** 客户名字 */
  clientRealName: string;
  /**
   * 客户ID
   * @format int32
   */
  clientId?: number;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /** 省份名称 */
  provinceName: string;
  /** 省份代码 */
  provinceCode: string;
  /** 城市名称 */
  cityName: string;
  /** 城市代码 */
  cityCode: string;
  /** 区名称 */
  districtName: string;
  /** 区代码 */
  districtCode: string;
  /**
   * 工单跟进人的Worker ID
   * @format int32
   */
  assignTo?: number;
  /** 工单跟进人 */
  assignToWorker?: WorkerInfoDto;
  /**
   * 工单跟进人的用户ID
   * @format int32
   */
  assignToUserId?: number;
  /** 工单状态 */
  status?: "0" | "1" | "2" | "3" | "4" | "5";
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt?: string;
  /**
   * 关单日期
   * @format date-time
   */
  closedAt?: string;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
  /** 故障分类 */
  faultType?: WorkOrderFaultTypeItemDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
  /**
   * 审批日期
   * @format date-time
   */
  reviewedAt?: string;
  /** 审批意见 */
  reviewRemark?: string;
} | null;

/** 故障分类 */
export interface WorkOrderFaultTypeItemDto {
  /** 故障名称 */
  name?: string;
  /** 故障描述 */
  description?: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue?: number;
}

/** 工单跟进人 */
export interface WorkerInfoDto {
  /**
   * ID
   * @format int32
   */
  id?: number;
  /** 名字 */
  realName?: string;
  /**
   * 累计服务评分
   * @format int32
   */
  totalScore?: number;
  /**
   * 累计评分数量
   * @format int32
   */
  totalComments?: number;
  /** 电话 */
  contactPhone?: string;
}

export interface ApiListResponseWorkOrderListItemAdminDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkOrderListItemAdminDto;
}

/** 返回数据 */
export type BaseListDtoWorkOrderListItemAdminDto = {
  /** @format int64 */
  count?: number;
  records?: WorkOrderListItemAdminDto[];
} | null;

export interface WorkOrderListItemAdminDto {
  /**
   * 工单ID
   * @format int32
   */
  id: number;
  /**
   * 品牌企业ID
   * @format int32
   */
  orgId: number;
  /** 企业信息 */
  organization?: SimpleOrganizationInfoDto;
  /**
   * 直属企业ID
   * @format int32
   */
  affiliateId: number;
  /** 企业信息 */
  affiliate?: SimpleOrganizationInfoDto;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单类型 */
  workOrderType?: "0" | "1";
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /** 服务地址 */
  address?: string;
  /** 客户帐号 */
  clientUsername?: string;
  /** 客户名字 */
  clientRealName?: string;
  /**
   * 客户ID
   * @format int32
   */
  clientId?: number;
  /**
   * 服务地址经度
   * @format float
   */
  longitude?: number;
  /**
   * 服务地址纬度
   * @format float
   */
  latitude?: number;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /** 省份名称 */
  provinceName?: string;
  /** 省份代码 */
  provinceCode?: string;
  /** 城市名称 */
  cityName?: string;
  /** 城市代码 */
  cityCode?: string;
  /** 区名称 */
  districtName?: string;
  /** 区代码 */
  districtCode?: string;
  /**
   * 工单分配人的用户ID
   * @format int32
   */
  assignBy?: number;
  /**
   * 工单跟进人的Worker ID
   * @format int32
   */
  assignTo?: number;
  /**
   * 工单跟进人的用户ID
   * @format int32
   */
  assignToUserId?: number;
  /** 工单状态 */
  status?: "0" | "1" | "2" | "3" | "4" | "5";
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt?: string;
  /**
   * 关单日期
   * @format date-time
   */
  closedAt?: string;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
  /** 故障分类 */
  faultType?: WorkOrderFaultTypeItemDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
  /**
   * 报修单ID
   * @format int32
   */
  repairOrderId?: number;
  /** 工单创建源 */
  workOrderSource?: "0" | "1" | "2";
}

export interface FaultTypeCreateRequest {
  /** 故障名称 */
  name: string;
  /** 故障描述 */
  description?: string;
  /** 故障代码标识符 */
  errorCodeIdentifier?: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue?: number;
  /** 故障处理方法 */
  troubleshooting?: TroubleshootingStep[];
  /**
   * 序号
   * @format int32
   */
  sequence?: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId: number;
}

export interface WorkOrderCreateRequest {
  /** 工单类型 */
  workOrderType: "0" | "1";
  /** 服务地址 */
  address: string;
  /** 客户帐号 */
  clientUsername: string;
  /** 客户名字 */
  clientRealName: string;
  /** 省份名称 */
  provinceName: string;
  /** 省份代码 */
  provinceCode: string;
  /** 城市名称 */
  cityName: string;
  /** 城市代码 */
  cityCode: string;
  /** 区名称 */
  districtName: string;
  /** 区代码 */
  districtCode: string;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /**
   * 服务地址经度
   * @format float
   */
  longitude?: number;
  /**
   * 服务地址纬度
   * @format float
   */
  latitude?: number;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /**
   * 工单跟进人的工作人员ID
   * @format int32
   */
  assignTo?: number;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
}

export interface WorkOrderCommentCreateRequest {
  /**
   * 工单ID
   * @format int32
   */
  workOrderId?: number;
  /** 评价内容 */
  desc?: string;
  /**
   * 评价等级
   * @format int32
   * @example 1
   */
  stars?: number;
}

export interface ApiResponseWorkOrderCommentDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkOrderCommentDto;
}

/** 返回数据 */
export type WorkOrderCommentDto = {
  /**
   * ID
   * @format int32
   */
  id?: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 创建者ID
   * @format int32
   */
  creatorId?: number;
  /** 客户帐号 */
  clientUsername?: string;
  /**
   * 工单ID
   * @format int32
   */
  workOrderId?: number;
  /**
   * 师傅ID
   * @format int32
   */
  workerId?: number;
  /** 师傅姓名 */
  workerRealName?: string;
  /** 评价内容 */
  desc?: string;
  /**
   * 评价等级
   * @format int32
   */
  stars?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
} | null;

export interface WorkerCreateRequest {
  /**
   * 用户ID
   * @format int32
   */
  userId?: number;
  /** 名字 */
  realName?: string;
  /** 身份证号码 */
  identity?: string;
  /** 是否允许接单 */
  available?: boolean;
  /** 联系电话 */
  contactPhone?: string;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
}

export interface ApiResponseWorkerDetailDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkerDetailDto;
}

/** 返回数据 */
export type WorkerDetailDto = {
  /**
   * ID
   * @format int32
   */
  id?: number;
  /**
   * 所在企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 用户ID
   * @format int32
   */
  userId?: number;
  /** 名字 */
  realName?: string;
  /** 身份证号码 */
  identity?: string;
  /** 是否允许接单 */
  available?: boolean;
  /** 联系电话 */
  contactPhone?: string;
  /**
   * 累计服务评分
   * @format int32
   */
  totalScore?: number;
  /**
   * 累计评分数量
   * @format int32
   */
  totalComments?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 修改日期
   * @format date-time
   */
  updatedAt?: string;
} | null;

export interface AdminWorkOrderSubmitReviewRequest {
  /**
   * 工单ID
   * @format int32
   */
  id?: number;
}

export interface AdminWorkOrderReviewRequest {
  /**
   * 工单id
   * @format int32
   */
  id: number;
  /** 是否审核通过 */
  approved: boolean;
  /** 审批意见 */
  reviewRemark?: string;
}

export interface WorkOrderHistoryRequest {
  /**
   * 工单ID
   * @format int32
   */
  workOrderId?: number;
  /** 描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
}

export interface ApiResponseWorkOrderHistoryDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkOrderHistoryDto;
}

/** 返回数据 */
export type WorkOrderHistoryDto = {
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 工单ID
   * @format int32
   */
  workOrderId?: number;
  /**
   * 创建人ID
   * @format int32
   */
  creatorId?: number;
  /**
   * 工单历史类型
   * @format int32
   */
  historyType?: number;
  /** 描述 */
  desc?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /** 图片 */
  images?: FileMetadata[];
} | null;

export interface WorkOrderUpdateRequest {
  /** 工单类型 */
  workOrderType: "0" | "1";
  /** 服务地址 */
  address: string;
  /** 客户帐号 */
  clientUsername: string;
  /** 客户名字 */
  clientRealName: string;
  /** 省份名称 */
  provinceName: string;
  /** 省份代码 */
  provinceCode: string;
  /** 城市名称 */
  cityName: string;
  /** 城市代码 */
  cityCode: string;
  /** 区名称 */
  districtName: string;
  /** 区代码 */
  districtCode: string;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /**
   * 服务地址经度
   * @format float
   */
  longitude?: number;
  /**
   * 服务地址纬度
   * @format float
   */
  latitude?: number;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /**
   * 工单跟进人的工作人员ID
   * @format int32
   */
  assignTo?: number;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
  /**
   * 工单ID
   * @format int32
   */
  id: number;
}

export interface WorkOrderCloseRequest {
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 工单ID
   * @format int32
   */
  id: number;
}

export interface WorkerUpdateRequest {
  /**
   * 用户ID
   * @format int32
   */
  userId?: number;
  /** 名字 */
  realName?: string;
  /** 身份证号码 */
  identity?: string;
  /** 是否允许接单 */
  available?: boolean;
  /** 联系电话 */
  contactPhone?: string;
  /**
   * 师傅ID
   * @format int32
   */
  id?: number;
}

export interface AdminWorkOrderPreCloseRequest {
  /**
   * 工单ID
   * @format int32
   */
  id: number;
}

export interface ApiResponseWorkOrderPreCloseResultDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkOrderPreCloseResultDto;
}

/** 返回数据 */
export type WorkOrderPreCloseResultDto = {
  /** 返回消息 */
  message?: string;
} | null;

export interface AdminWorkOrderCloseRequest {
  /**
   * 工单ID
   * @format int32
   */
  id: number;
  /** 验证码 */
  captcha: string;
}

export interface WorkOrderAssignAdminRequest {
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 工单ID
   * @format int32
   */
  id: number;
  /**
   * 工作人员ID
   * @format int32
   */
  assignTo: number;
}

export interface ApiListResponseWorkOrderCommentPublicDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkOrderCommentPublicDto;
}

/** 返回数据 */
export type BaseListDtoWorkOrderCommentPublicDto = {
  /** @format int64 */
  count?: number;
  records?: WorkOrderCommentPublicDto[];
} | null;

export interface WorkOrderCommentPublicDto {
  /** 评价内容 */
  desc?: string;
  /**
   * 评价等级
   * @format int32
   */
  stars?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
}

export interface ApiListResponseSettingServiceDeskDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoSettingServiceDeskDto;
}

/** 返回数据 */
export type BaseListDtoSettingServiceDeskDto = {
  /** @format int64 */
  count?: number;
  records?: SettingServiceDeskDto[];
} | null;

export interface ApiListResponseRepairOrderListItemDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoRepairOrderListItemDto;
}

/** 返回数据 */
export type BaseListDtoRepairOrderListItemDto = {
  /** @format int64 */
  count?: number;
  records?: RepairOrderListItemDto[];
} | null;

export interface RepairOrderListItemDto {
  /**
   * ID
   * @format int32
   */
  id: number;
  /**
   * 企业ID
   * @format int32
   */
  orgId: number;
  /** 企业信息 */
  organization: SimpleOrganizationInfoDto;
  /**
   * 创建人ID
   * @format int32
   */
  creatorId: number;
  /** 创建人信息 */
  creator: SimpleUserInfoDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId: number;
  /**
   * 设备ID
   * @format int32
   */
  deviceId: number;
  /** 设备编号 */
  deviceNo: string;
  /** 故障识别符 */
  errorCodeIdentifier: string;
  /**
   * 故障代码
   * @format int32
   */
  errorCodeValue: number;
  /**
   * 关联工单ID
   * @format int32
   */
  workOrderId: number;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt: string;
}

export interface ApiListResponseFaultTypeListItemDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoFaultTypeListItemDto;
}

/** 返回数据 */
export type BaseListDtoFaultTypeListItemDto = {
  /** @format int64 */
  count?: number;
  records?: FaultTypeListItemDto[];
} | null;

export interface FaultTypeListItemDto {
  /**
   * id
   * @format int32
   */
  id?: number;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
  /** 企业 */
  iotProduct?: ItemNameDto;
  /**
   * 企业ID
   * @format int32
   */
  orgId?: number;
  /** 企业 */
  organization?: ItemNameDto;
  /** 故障名称 */
  name?: string;
  /** 故障描述 */
  description?: string;
  /** 故障代码标识符 */
  errorCodeIdentifier?: string;
  /**
   * 故障代码值
   * @format int32
   */
  errorCodeValue?: number;
  /**
   * 序号
   * @format int32
   */
  sequence?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface ApiListResponseWorkOrderCommentDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkOrderCommentDto;
}

/** 返回数据 */
export type BaseListDtoWorkOrderCommentDto = {
  /** @format int64 */
  count?: number;
  records?: WorkOrderCommentDto[];
} | null;

export interface ApiListResponseWorkOrderListItemDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkOrderListItemDto;
}

/** 返回数据 */
export type BaseListDtoWorkOrderListItemDto = {
  /** @format int64 */
  count?: number;
  records?: WorkOrderListItemDto[];
} | null;

export interface WorkOrderListItemDto {
  /**
   * 工单ID
   * @format int32
   */
  id?: number;
  /**
   * 品牌企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 直属企业ID
   * @format int32
   */
  affiliateId?: number;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单类型 */
  workOrderType?: "0" | "1";
  /** 客户帐号 */
  clientUsername?: string;
  /** 客户名字 */
  clientRealName?: string;
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /** 服务地址 */
  address?: string;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /** 工单状态 */
  status?: "0" | "1" | "2" | "3" | "4" | "5";
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt?: string;
  /**
   * 关单日期
   * @format date-time
   */
  closedAt?: string;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
  /** 故障分类 */
  faultType?: WorkOrderFaultTypeItemDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
}

export interface ApiListResponseWorkOrderHistoryDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkOrderHistoryDto;
}

/** 返回数据 */
export type BaseListDtoWorkOrderHistoryDto = {
  /** @format int64 */
  count?: number;
  records?: WorkOrderHistoryDto[];
} | null;

export interface ApiListResponseWorkerListItemAdminDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: BaseListDtoWorkerListItemAdminDto;
}

/** 返回数据 */
export type BaseListDtoWorkerListItemAdminDto = {
  /** @format int64 */
  count?: number;
  records?: WorkerListItemAdminDto[];
} | null;

export interface WorkerListItemAdminDto {
  /**
   * ID
   * @format int32
   */
  id?: number;
  /**
   * 所在企业ID
   * @format int32
   */
  orgId?: number;
  /**
   * 用户ID
   * @format int32
   */
  userId?: number;
  /** 名字 */
  realName?: string;
  /** 身份证号码 */
  identity?: string;
  /** 是否允许接单 */
  available?: boolean;
  /** 联系电话 */
  contactPhone?: string;
  /**
   * 累计服务评分
   * @format int32
   */
  totalScore?: number;
  /**
   * 累计评分数量
   * @format int32
   */
  totalComments?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 修改日期
   * @format date-time
   */
  updatedAt?: string;
}

export interface ApiResponseWorkOrderDetailAdminDto {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: WorkOrderDetailAdminDto;
}

/** 返回数据 */
export type WorkOrderDetailAdminDto = {
  /**
   * 工单ID
   * @format int32
   */
  id: number;
  /**
   * 品牌企业ID
   * @format int32
   */
  orgId: number;
  /** 企业信息 */
  organization?: SimpleOrganizationInfoDto;
  /**
   * 直属企业ID
   * @format int32
   */
  affiliateId: number;
  /** 企业信息 */
  affiliate?: SimpleOrganizationInfoDto;
  /**
   * 创建人ID
   * @format int32
   */
  creatorId?: number;
  /**
   * 跟进的工作人员ID
   * @format int32
   */
  assignTo?: number;
  /** 工单跟进人 */
  assignToWorker?: WorkerInfoDto;
  /**
   * 工单跟进人的用户ID
   * @format int32
   */
  assignToUserId?: number;
  /**
   * 分派人用户ID
   * @format int32
   */
  assignBy?: number;
  /** 设备编号 */
  deviceNo?: string;
  /** 产品名称 */
  productName?: string;
  /** 工单类型 */
  workOrderType?: "0" | "1";
  /** 工单描述 */
  desc?: string;
  /** 图片 */
  images?: FileMetadata[];
  /** 工单状态 */
  status?: "0" | "1" | "2" | "3" | "4" | "5";
  /**
   * 创建日期
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updatedAt?: string;
  /**
   * 关单日期
   * @format date-time
   */
  closedAt?: string;
  /** 客户地址 */
  address?: string;
  /** 客户用户名 */
  clientUsername?: string;
  /** 客户名字 */
  clientRealName?: string;
  /**
   * 客户ID
   * @format int32
   */
  clientId?: number;
  /**
   * 客户地址经度
   * @format float
   */
  longitude?: number;
  /**
   * 客户地址纬度
   * @format float
   */
  latitude?: number;
  /**
   * 预约时间
   * @format date-time
   */
  bookingTime?: string;
  /** 省份名称 */
  provinceName?: string;
  /** 省份代码 */
  provinceCode?: string;
  /** 城市名称 */
  cityName?: string;
  /** 城市代码 */
  cityCode?: string;
  /** 区名称 */
  districtName?: string;
  /** 区代码 */
  districtCode?: string;
  /**
   * 故障分类ID
   * @format int32
   */
  faultTypeId?: number;
  /** 故障分类 */
  faultType?: WorkOrderFaultTypeItemDto;
  /**
   * 产品ID
   * @format int32
   */
  iotProductId?: number;
  /**
   * 报修单ID
   * @format int32
   */
  repairOrderId?: number;
  /** 工单创建源 */
  workOrderSource?: "0" | "1" | "2";
} | null;

export interface ApiResponseBoolean {
  /**
   * 错误代码, 0表示成功, 其余为错误代码
   * @format int32
   * @example 0
   */
  code: number;
  /**
   * 返回消息
   * @example "error"
   */
  message?: string;
  /** 返回数据 */
  data?: boolean | null;
}

export interface WorkOrderDeleteRequest {
  /**
   * 工单ID
   * @format int32
   */
  id: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ishare-service-desk API
 * @baseUrl http://localhost:8000
 *
 * 工单服务
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  serviceDesk = {
    /**
     * No description
     *
     * @tags FaultType
     * @name GetGenericFaultTypeList
     * @summary 获取通用的故障分类
     * @request GET:/service-desk/v1/fault-types
     * @secure
     */
    getGenericFaultTypeList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseFaultTypeListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/fault-types`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name UpdateFaultType
     * @summary 修改故障分类
     * @request PUT:/service-desk/v1/fault-types
     * @secure
     */
    updateFaultType: (data: FaultTypeUpdateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseFaultTypeDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/fault-types`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name CreateFaultType
     * @summary 创建故障分类
     * @request POST:/service-desk/v1/fault-types
     * @secure
     */
    createFaultType: (data: FaultTypeCreateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseFaultTypeDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/fault-types`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name DeleteFaultType
     * @summary 删除故障分类
     * @request DELETE:/service-desk/v1/fault-types
     * @secure
     */
    deleteFaultType: (data: IntegerIdRequest, params: RequestParams = {}) =>
      this.request<ApiResponseBoolean, ApiResponseVoid>({
        path: `/service-desk/v1/fault-types`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceDeskSetting
     * @name GetServiceDeskSettingList
     * @summary 获取工单服务设置列表
     * @request GET:/service-desk/v1/setting
     * @secure
     */
    getServiceDeskSettingList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseSettingServiceDeskDto, ApiResponseVoid>({
        path: `/service-desk/v1/setting`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ServiceDeskSetting
     * @name UpdateServiceDeskSetting
     * @summary 创建或修改工单系统设置
     * @request POST:/service-desk/v1/setting
     * @secure
     */
    updateServiceDeskSetting: (data: UpdateServiceDeskSettingRequest, params: RequestParams = {}) =>
      this.request<ApiResponseSettingServiceDeskDto, ApiResponseVoid>({
        path: `/service-desk/v1/setting`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RepairOrder
     * @name GetRepairOrders
     * @summary 获取报修单列表
     * @request GET:/service-desk/v1/repair-orders
     * @secure
     */
    getRepairOrders: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseRepairOrderListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/repair-orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RepairOrder
     * @name CreateRepairOrder
     * @summary 创建报修单
     * @request POST:/service-desk/v1/repair-orders
     * @secure
     */
    createRepairOrder: (data: CreateRepairOrderRequest, params: RequestParams = {}) =>
      this.request<ApiResponseRepairOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/repair-orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RepairOrder
     * @name DeleteRepairOrder
     * @summary 删除报修单
     * @request DELETE:/service-desk/v1/repair-orders
     * @secure
     */
    deleteRepairOrder: (data: IntegerIdRequest, params: RequestParams = {}) =>
      this.request<ApiResponseBoolean, ApiResponseVoid>({
        path: `/service-desk/v1/repair-orders`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name TransferRepairOrderToWorkOrder
     * @summary 报修单转工单
     * @request POST:/service-desk/v1/repair-order-to-work-order
     * @secure
     */
    transferRepairOrderToWorkOrder: (data: IntegerIdRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/repair-order-to-work-order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name GetPendingReviewWorkOrderList
     * @summary 获取待审核的工单列表
     * @request POST:/service-desk/v1/pending-review-work-orders
     * @secure
     */
    getPendingReviewWorkOrderList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderListItemAdminDto, ApiResponseVoid>({
        path: `/service-desk/v1/pending-review-work-orders`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name GetMyWorkOrderDetail
     * @summary APP用户获取工单详情
     * @request GET:/service-desk/v1/app/work-order
     * @secure
     */
    getMyWorkOrderDetail: (
      query?: {
        /** 工单ID */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name CreateWorkOrder
     * @summary 创建工单
     * @request POST:/service-desk/v1/app/work-order
     * @secure
     */
    createWorkOrder: (data: WorkOrderCreateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name DeleteWorkOrder
     * @summary 删除工单
     * @request DELETE:/service-desk/v1/app/work-order
     * @secure
     */
    deleteWorkOrder: (data: WorkOrderDeleteRequest, params: RequestParams = {}) =>
      this.request<ApiResponseBoolean, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name UpdateWorkOrder
     * @summary 更新工单
     * @request PATCH:/service-desk/v1/app/work-order
     * @secure
     */
    updateWorkOrder: (data: WorkOrderUpdateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderComment
     * @name GetMyWorkOrderCommentByUser
     * @summary 用户查询工单评价
     * @request GET:/service-desk/v1/app/work-order/comments
     * @secure
     */
    getMyWorkOrderCommentByUser: (
      query?: {
        /** 工单ID */
        workOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseWorkOrderCommentDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order/comments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderComment
     * @name CreateWorkOrderCommentByUser
     * @summary 用户创建工单评价
     * @request POST:/service-desk/v1/app/work-order/comments
     * @secure
     */
    createWorkOrderCommentByUser: (data: WorkOrderCommentCreateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderCommentDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Worker
     * @name GetWorkerListByAdmin
     * @summary 获取师傅列表
     * @request GET:/service-desk/v1/admin/workers
     * @secure
     */
    getWorkerListByAdmin: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkerListItemAdminDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/workers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Worker
     * @name CreateWorker
     * @summary 创建师傅
     * @request POST:/service-desk/v1/admin/workers
     * @secure
     */
    createWorker: (data: WorkerCreateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkerDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/workers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Worker
     * @name DeleteWorker
     * @summary 删除师傅
     * @request DELETE:/service-desk/v1/admin/workers
     * @secure
     */
    deleteWorker: (data: IntegerIdRequest, params: RequestParams = {}) =>
      this.request<ApiResponseBoolean, ApiResponseVoid>({
        path: `/service-desk/v1/admin/workers`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Worker
     * @name UpdateWorker
     * @summary 修改师傅
     * @request PATCH:/service-desk/v1/admin/workers
     * @secure
     */
    updateWorker: (data: WorkerUpdateRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkerDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/workers`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name AdminWorkOrderSubmitReview
     * @summary 提交工单审核
     * @request POST:/service-desk/v1/admin/work-order/submit-review
     * @secure
     */
    adminWorkOrderSubmitReview: (data: AdminWorkOrderSubmitReviewRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/submit-review`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name AdminWorkOrderReview
     * @summary 审核工单
     * @request POST:/service-desk/v1/admin/work-order/review
     * @secure
     */
    adminWorkOrderReview: (data: AdminWorkOrderReviewRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/review`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderHistory
     * @name GetWorkOrderHistoryByAdmin
     * @summary 管理员查看工单历史记录
     * @request GET:/service-desk/v1/admin/work-order/histories
     * @secure
     */
    getWorkOrderHistoryByAdmin: (
      query?: {
        /** 工单ID */
        workOrderId?: number;
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderHistoryDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/histories`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderHistory
     * @name CreateWorkOrderHistoryByAdmin
     * @summary 管理员添加工单历史记录
     * @request POST:/service-desk/v1/admin/work-order/histories
     * @secure
     */
    createWorkOrderHistoryByAdmin: (data: WorkOrderHistoryRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderHistoryDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/histories`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name CloseWorkOrder
     * @summary APP用户关闭工单
     * @request PATCH:/service-desk/v1/app/work-order/close
     * @secure
     */
    closeWorkOrder: (data: WorkOrderCloseRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order/close`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name AdminPreCloseWorkOrder
     * @summary 工作人员预关闭工单
     * @request PATCH:/service-desk/v1/admin/work-order/pre-close
     * @secure
     */
    adminPreCloseWorkOrder: (data: AdminWorkOrderPreCloseRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderPreCloseResultDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/pre-close`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name AdminCloseWorkOrder
     * @summary 工作人员关闭工单
     * @request PATCH:/service-desk/v1/admin/work-order/close
     * @secure
     */
    adminCloseWorkOrder: (data: AdminWorkOrderCloseRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/close`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name AssignWorkOrder
     * @summary 管理员分配工单给指定工作人
     * @request PATCH:/service-desk/v1/admin/work-order/assign
     * @secure
     */
    assignWorkOrder: (data: WorkOrderAssignAdminRequest, params: RequestParams = {}) =>
      this.request<ApiResponseWorkOrderDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/assign`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderComment
     * @name GetWorkerCommentList
     * @summary 获取工作人员收到的评价列表
     * @request GET:/service-desk/v1/worker/comments
     * @secure
     */
    getWorkerCommentList: (
      query?: {
        /** 工作人员ID */
        workerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderCommentPublicDto, ApiResponseVoid>({
        path: `/service-desk/v1/worker/comments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name GetProductFaultTypeList
     * @summary 获取指定产品的故障分类
     * @request GET:/service-desk/v1/product/fault-types
     * @secure
     */
    getProductFaultTypeList: (
      query?: {
        /** 产品ID */
        iotProductId?: string;
        /** 企业ID */
        orgId?: string;
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseFaultTypeListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/product/fault-types`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name GetOrgFaultTypeList
     * @summary 获取企业自定义的故障分类
     * @request GET:/service-desk/v1/organization/fault-types
     * @secure
     */
    getOrgFaultTypeList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseFaultTypeListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/organization/fault-types`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name GetProductFaultTypeDetail
     * @summary 获取故障分类明细
     * @request GET:/service-desk/v1/fault-type
     * @secure
     */
    getProductFaultTypeDetail: (
      query: {
        /** 记录id */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseFaultTypeDetailDto, ApiResponseVoid>({
        path: `/service-desk/v1/fault-type`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FaultType
     * @name GetDeviceFaultTypeList
     * @summary 获取指定设备的故障分类明细
     * @request GET:/service-desk/v1/device/fault-types
     * @secure
     */
    getDeviceFaultTypeList: (
      query?: {
        /** 设备MAC/IMEI */
        deviceMac?: string;
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseFaultTypeListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/device/fault-types`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderComment
     * @name GetCommentList
     * @summary 获取评价列表
     * @request GET:/service-desk/v1/comments
     * @secure
     */
    getCommentList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderCommentDto, ApiResponseVoid>({
        path: `/service-desk/v1/comments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name GetMyWorkOrderList
     * @summary APP用户获取工单列表
     * @request GET:/service-desk/v1/app/work-orders
     * @secure
     */
    getMyWorkOrderList: (
      query?: {
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderListItemDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderHistory
     * @name GetWorkOrderHistoryByUser
     * @summary APP用户查看我的工单历史记录
     * @request GET:/service-desk/v1/app/work-order/histories
     * @secure
     */
    getWorkOrderHistoryByUser: (
      query?: {
        /** 工单ID */
        workOrderId?: number;
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderHistoryDto, ApiResponseVoid>({
        path: `/service-desk/v1/app/work-order/histories`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name GetWorkOrderListByAdmin
     * @summary 管理员获取工单列表
     * @request GET:/service-desk/v1/admin/work-orders
     * @secure
     */
    getWorkOrderListByAdmin: (
      query?: {
        /** 企业ID */
        orgId?: number;
        query?: string;
        sort?: string;
        group?: string;
        having?: string;
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListResponseWorkOrderListItemAdminDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-orders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrder
     * @name GetWorkOrderDetailByAdmin
     * @summary 管理员获取工单详情
     * @request GET:/service-desk/v1/admin/work-order
     * @secure
     */
    getWorkOrderDetailByAdmin: (
      query?: {
        /** 工单ID */
        id?: number;
        /** 企业ID */
        orgId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseWorkOrderDetailAdminDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags WorkOrderComment
     * @name GetWorkOrderCommentByAdmin
     * @summary 管理员查询工单评价
     * @request GET:/service-desk/v1/admin/work-order/comments
     * @secure
     */
    getWorkOrderCommentByAdmin: (
      query?: {
        /** 工单ID */
        workOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResponseWorkOrderCommentDto, ApiResponseVoid>({
        path: `/service-desk/v1/admin/work-order/comments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
