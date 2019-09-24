/* eslint-disable */

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC and any UTC offset other than 0 will be rejected.
 **/
  DateTime: any,
  /** 
 * The `Date` scalar type represents a date. The Date appears in a JSON
   * response as an ISO8601 formatted string.
 **/
  Date: any,
  Raw: any,
  Decimal: any,
  Quill: any,
  ErlDate: any,
  /** 
 * The `Time` scalar type represents a time. The Time appears in a JSON
   * response as an ISO8601 formatted string.
 **/
  Time: any,
  /** Represents an uploaded file. */
  Upload: any,
  IntegerInput: any,
};

export type AccessPublication = {
   __typename: 'AccessPublication',
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  id: Scalars['ID'],
  path: Scalars['String'],
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type AccessUser = {
   __typename: 'AccessUser',
  active?: Maybe<Scalars['Boolean']>,
  contact?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  isAdmin?: Maybe<Scalars['Boolean']>,
  lastLoginAt?: Maybe<Scalars['DateTime']>,
  login?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  userAgent?: Maybe<Scalars['String']>,
};

export type AccessUserSession = {
   __typename: 'AccessUserSession',
  accessUser?: Maybe<AccessUser>,
  token?: Maybe<Scalars['String']>,
};

export type AddContactsToGroupResults = {
   __typename: 'AddContactsToGroupResults',
  addedCount?: Maybe<Scalars['Int']>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type Address = {
   __typename: 'Address',
  address?: Maybe<Address>,
  addressId?: Maybe<Scalars['ID']>,
  addresses: Array<Address>,
  analysis?: Maybe<Scalars['String']>,
  analysisJson?: Maybe<Scalars['Quill']>,
  bpaLinks: Array<BpaLink>,
  createdAt?: Maybe<Scalars['DateTime']>,
  customFields?: Maybe<Scalars['Quill']>,
  displayName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  next?: Maybe<Address>,
  otherKeyPhotoCount?: Maybe<Scalars['Int']>,
  otherPhotoCount?: Maybe<Scalars['Int']>,
  pfcsKeyPhotoCount?: Maybe<Scalars['Int']>,
  pfcsPhotoCount?: Maybe<Scalars['Int']>,
  photoLinks: Array<PhotoLink>,
  photos: Array<Photo>,
  prev?: Maybe<Address>,
  project: Project,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type AddressInput = {
  addressId?: Maybe<Scalars['ID']>,
  analysis?: Maybe<Scalars['String']>,
  analysisJson?: Maybe<Scalars['Quill']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  customFields?: Maybe<Scalars['Quill']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type Affiliation = {
   __typename: 'Affiliation',
  affiliationType?: Maybe<AffiliationType>,
  contact?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  value?: Maybe<Scalars['String']>,
};

export type AffiliationInput = {
  affiliationTypeId?: Maybe<Scalars['ID']>,
  contactId?: Maybe<Scalars['ID']>,
  delete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  value?: Maybe<Scalars['String']>,
};

export type AffiliationType = {
   __typename: 'AffiliationType',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  valueType?: Maybe<Scalars['String']>,
};

export type AffiliationTypeInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  valueType?: Maybe<Scalars['String']>,
};

export type Agreement = {
   __typename: 'Agreement',
  content: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type AgreementInput = {
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type AnnualHourStats = {
   __typename: 'AnnualHourStats',
  available?: Maybe<Scalars['Decimal']>,
  billedInvoices?: Maybe<Scalars['Decimal']>,
  billedTimesheets?: Maybe<Scalars['Decimal']>,
  date?: Maybe<Scalars['Date']>,
  expert?: Maybe<Scalars['Decimal']>,
  goal?: Maybe<Scalars['Decimal']>,
  holidays?: Maybe<Scalars['Decimal']>,
  nonExpert?: Maybe<Scalars['Decimal']>,
  overhead?: Maybe<Scalars['Decimal']>,
  pto?: Maybe<Scalars['Decimal']>,
  retained?: Maybe<Scalars['Decimal']>,
  sick?: Maybe<Scalars['Decimal']>,
  testimony?: Maybe<Scalars['Decimal']>,
  training?: Maybe<Scalars['Decimal']>,
  worked?: Maybe<Scalars['Decimal']>,
};

export type AppliedPayment = {
   __typename: 'AppliedPayment',
  amount?: Maybe<Scalars['Decimal']>,
  creditMemo?: Maybe<CreditMemo>,
  id: Scalars['ID'],
  invoice?: Maybe<Invoice>,
  payment?: Maybe<Payment>,
  project?: Maybe<Project>,
  refund?: Maybe<Refund>,
};

export type AppliedPaymentInput = {
  amount?: Maybe<Scalars['Decimal']>,
  delete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  invoiceId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type ArcAttachment = {
   __typename: 'ArcAttachment',
  fileName: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type AsteriskCall = {
   __typename: 'AsteriskCall',
  accountcode?: Maybe<Scalars['String']>,
  amaflags?: Maybe<Scalars['Int']>,
  billsec?: Maybe<Scalars['Int']>,
  calldate?: Maybe<Scalars['DateTime']>,
  channel?: Maybe<Scalars['String']>,
  clid?: Maybe<Scalars['String']>,
  dcontext?: Maybe<Scalars['String']>,
  disposition?: Maybe<Scalars['String']>,
  dst?: Maybe<Scalars['String']>,
  dstchannel?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  lastapp?: Maybe<Scalars['String']>,
  lastdata?: Maybe<Scalars['String']>,
  linkedid?: Maybe<Scalars['String']>,
  peeraccount?: Maybe<Scalars['String']>,
  sequence?: Maybe<Scalars['Int']>,
  src?: Maybe<Scalars['String']>,
  uniqueid?: Maybe<Scalars['String']>,
  userfield?: Maybe<Scalars['String']>,
};

export type AttachedFile = {
   __typename: 'AttachedFile',
  attachment?: Maybe<ArcAttachment>,
  attachmentThumbUrl?: Maybe<Scalars['String']>,
  attachmentUrl?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
  id: Scalars['ID'],
  md5?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  primaryFile?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sourceFile?: Maybe<SourceFile>,
};

export type AttachedFileInput = {
  attachment?: Maybe<Scalars['Upload']>,
  documentId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  primaryFile?: Maybe<Scalars['Boolean']>,
};

export type Attachment = {
   __typename: 'Attachment',
  attachment?: Maybe<ArcAttachment>,
  attachmentFileSize?: Maybe<Scalars['Int']>,
  attachmentThumbUrl?: Maybe<Scalars['String']>,
  attachmentUrl?: Maybe<Scalars['String']>,
  contact?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  document?: Maybe<Document>,
  id: Scalars['ID'],
  invoice?: Maybe<Invoice>,
  message?: Maybe<Message>,
  note?: Maybe<Scalars['String']>,
  prepend?: Maybe<Scalars['Boolean']>,
  project?: Maybe<Project>,
  projectId?: Maybe<Scalars['ID']>,
  rank?: Maybe<Scalars['Int']>,
  topic?: Maybe<Topic>,
  training?: Maybe<Training>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
};

export type AttachmentInput = {
  attachment?: Maybe<Scalars['Upload']>,
  contactId?: Maybe<Scalars['ID']>,
  documentId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  invoiceId?: Maybe<Scalars['ID']>,
  note?: Maybe<Scalars['String']>,
  prepend?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  topicId?: Maybe<Scalars['ID']>,
  trainingId?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
};

export type BatchPhotoInput = {
  addressIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  elementIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  issueIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  key?: Maybe<Scalars['Boolean']>,
  locationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  playerIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  remove?: Maybe<Scalars['Boolean']>,
  testLocationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type BatchTagInput = {
  filter: ContactSearchFilter,
  tagId: Scalars['ID'],
};

export type BillableGoal = {
   __typename: 'BillableGoal',
  createdAt?: Maybe<Scalars['DateTime']>,
  effectiveDate?: Maybe<Scalars['Date']>,
  fixed?: Maybe<Scalars['Boolean']>,
  goal?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  percentage?: Maybe<Scalars['Decimal']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type BillableGoalInput = {
  effectiveDate?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>,
  fixed?: Maybe<Scalars['Boolean']>,
  goal?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
};

export type BillableGoalReduction = {
   __typename: 'BillableGoalReduction',
  amount?: Maybe<Scalars['Decimal']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  manager?: Maybe<User>,
  project?: Maybe<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type BillableGoalReductionInput = {
  amount?: Maybe<Scalars['Decimal']>,
  description?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  managerId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type BillingPosition = {
   __typename: 'BillingPosition',
  active: Scalars['Boolean'],
  billingRates: Array<BillingRate>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  id: Scalars['ID'],
  initials: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type BillingRate = {
   __typename: 'BillingRate',
  billingPosition: BillingPosition,
  createdAt: Scalars['DateTime'],
  effectiveDate: Scalars['Date'],
  feeSchedule: FeeSchedule,
  id: Scalars['ID'],
  rate: Scalars['Int'],
  updatedAt: Scalars['DateTime'],
};

export type BillingRateInput = {
  billingPositionId?: Maybe<Scalars['ID']>,
  feeScheduleId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  rate?: Maybe<Scalars['String']>,
};

export type BpaLink = {
   __typename: 'BpaLink',
  address?: Maybe<Address>,
  addressId?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
  documentId?: Maybe<Scalars['ID']>,
  element?: Maybe<Element>,
  elementId?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  infoImage?: Maybe<InfoImage>,
  infoImageId?: Maybe<Scalars['ID']>,
  issue?: Maybe<Issue>,
  issueId?: Maybe<Scalars['ID']>,
  location?: Maybe<Location>,
  locationId?: Maybe<Scalars['ID']>,
  player?: Maybe<Player>,
  playerId?: Maybe<Scalars['ID']>,
  testLocation?: Maybe<TestLocation>,
  testLocationId?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type BpaLinkInput = {
  addressId?: Maybe<Scalars['ID']>,
  delete?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  documentId?: Maybe<Scalars['ID']>,
  elementId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  infoImageId?: Maybe<Scalars['ID']>,
  issueId?: Maybe<Scalars['ID']>,
  locationId?: Maybe<Scalars['ID']>,
  playerId?: Maybe<Scalars['ID']>,
  testLocationId?: Maybe<Scalars['ID']>,
  uuid?: Maybe<Scalars['String']>,
};

export type Calendar = {
   __typename: 'Calendar',
  allDay?: Maybe<Scalars['Boolean']>,
  cancelled?: Maybe<Scalars['Boolean']>,
  completedAt?: Maybe<Scalars['DateTime']>,
  completer?: Maybe<User>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['DateTime']>,
  followupDate?: Maybe<Scalars['DateTime']>,
  followupType?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['DateTime']>,
  itemType?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type CalendarInput = {
  allDay?: Maybe<Scalars['Boolean']>,
  cancelled?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Campaign = {
   __typename: 'Campaign',
  active?: Maybe<Scalars['Boolean']>,
  campaignsContacts?: Maybe<Array<Maybe<CampaignsContact>>>,
  campaignsContactsCount: Scalars['Int'],
  closeActivities?: Maybe<Scalars['String']>,
  closeDate?: Maybe<Scalars['Date']>,
  company?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  fields: Array<Scalars['String']>,
  id: Scalars['ID'],
  includeAttendance?: Maybe<Scalars['Boolean']>,
  includeIndustry?: Maybe<Scalars['Boolean']>,
  includeSegments?: Maybe<Scalars['Boolean']>,
  includeUnsubscribed?: Maybe<Scalars['Boolean']>,
  mailings: Array<Mailing>,
  name: Scalars['String'],
  notes: Array<Note>,
  percentCompleted: Scalars['Int'],
  projects: Array<Project>,
  script?: Maybe<Scalars['String']>,
  seminar?: Maybe<Seminar>,
  seminarId?: Maybe<Scalars['Int']>,
  status: Scalars['String'],
  targetDate: Scalars['Date'],
  tasks: Array<Task>,
  tenTouchBatches: Array<TenTouchBatch>,
  timesheets: Array<Timesheet>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: User,
  userId?: Maybe<Scalars['ID']>,
};

export type CampaignInput = {
  campaignId?: Maybe<Scalars['ID']>,
  closeActivities?: Maybe<Scalars['String']>,
  closeDate?: Maybe<Scalars['String']>,
  contactId?: Maybe<Scalars['ID']>,
  contactParams?: Maybe<ContactParamsInput>,
  copyContacts?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  fieldsAsText?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  includeAttendance?: Maybe<Scalars['Boolean']>,
  includeIndustry?: Maybe<Scalars['Boolean']>,
  includeSegments?: Maybe<Scalars['Boolean']>,
  includeUnsubscribed?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  percentCompleted?: Maybe<Scalars['String']>,
  script?: Maybe<Scalars['String']>,
  seminarId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  targetDate?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type CampaignMetrics = {
   __typename: 'CampaignMetrics',
  activity?: Maybe<Array<Maybe<MetricValue>>>,
  information?: Maybe<Array<Maybe<MetricValue>>>,
  outcome?: Maybe<Array<Maybe<MetricValue>>>,
};

export type CampaignsContact = {
   __typename: 'CampaignsContact',
  campaign: Campaign,
  contact: Contact,
  createdAt?: Maybe<Scalars['DateTime']>,
  currentClient?: Maybe<Scalars['Boolean']>,
  eventAttendee?: Maybe<Scalars['Boolean']>,
  existingOpportunity?: Maybe<Scalars['Boolean']>,
  fields?: Maybe<Scalars['Raw']>,
  id: Scalars['ID'],
  memberships: Array<Membership>,
  newOpportunity?: Maybe<Scalars['Boolean']>,
  pastClient?: Maybe<Scalars['Boolean']>,
  projects: Array<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type Checklist = {
   __typename: 'Checklist',
  category: Scalars['String'],
  checklistItems: Array<ChecklistItem>,
  complete?: Maybe<Scalars['Boolean']>,
  completedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  itemCount?: Maybe<Scalars['Int']>,
  itemsCompleted?: Maybe<Scalars['Int']>,
  mailing?: Maybe<Mailing>,
  photoset?: Maybe<Photoset>,
  project?: Maybe<Project>,
  roles: Array<Scalars['String']>,
  seminar?: Maybe<Seminar>,
  template?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ChecklistInput = {
  category?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  template?: Maybe<Scalars['Boolean']>,
};

export type ChecklistItem = {
   __typename: 'ChecklistItem',
  checklist?: Maybe<Checklist>,
  complete?: Maybe<Scalars['Boolean']>,
  completedAt?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  notes?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  section?: Maybe<Scalars['String']>,
  template?: Maybe<ChecklistItem>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
  when?: Maybe<Scalars['String']>,
  who?: Maybe<Scalars['String']>,
};

export type ChecklistItemInput = {
  checklistId?: Maybe<Scalars['ID']>,
  complete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
  when?: Maybe<Scalars['String']>,
  who?: Maybe<Scalars['String']>,
};

export type Commonbillingentry = {
   __typename: 'Commonbillingentry',
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type Community = {
   __typename: 'Community',
  city: Scalars['String'],
  complete?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  notes: Array<Note>,
  physicalAddresses: Array<PhysicalAddress>,
  state: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type CommunityInput = {
  city?: Maybe<Scalars['String']>,
  complete?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type Contact = {
   __typename: 'Contact',
  formerContacts: Array<Contact>,
  avatar?: Maybe<ArcAttachment>,
  lastName?: Maybe<Scalars['String']>,
  birthday?: Maybe<Scalars['Date']>,
  isActive?: Maybe<Scalars['Boolean']>,
  legacyState?: Maybe<Scalars['String']>,
  tagNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  workPhone?: Maybe<Scalars['String']>,
  campaignsAsCompany: Array<Campaign>,
  importedContacts: Array<ImportedContact>,
  companyName?: Maybe<Scalars['String']>,
  suffix?: Maybe<Scalars['String']>,
  directPhone?: Maybe<Scalars['String']>,
  relationshipsAsParent: Array<Relationship>,
  legacyZip?: Maybe<Scalars['String']>,
  campaigns: Array<Campaign>,
  externalId?: Maybe<Scalars['String']>,
  coworkers: Array<Contact>,
  marketingStatus?: Maybe<Scalars['String']>,
  strategicTargetCategories: Array<Scalars['String']>,
  aliases: Array<Scalars['String']>,
  mode: Scalars['String'],
  surveys: Array<Survey>,
  body?: Maybe<Scalars['String']>,
  normalized?: Maybe<Scalars['String']>,
  avatarThumbUrl?: Maybe<Scalars['String']>,
  legacyStreet?: Maybe<Scalars['String']>,
  taggings: Array<Tagging>,
  fax?: Maybe<Scalars['String']>,
  lastContactedBy?: Maybe<User>,
  creator?: Maybe<User>,
  company?: Maybe<Contact>,
  email?: Maybe<Scalars['String']>,
  additionalEmails?: Maybe<Scalars['String']>,
  goesBy?: Maybe<Scalars['String']>,
  lastContactedOn?: Maybe<Scalars['Date']>,
  name?: Maybe<Scalars['String']>,
  attachments: Array<Attachment>,
  linkedIn?: Maybe<Scalars['String']>,
  officeProjects: Array<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  legacyCity?: Maybe<Scalars['String']>,
  relationships: Array<Relationship>,
  longitude?: Maybe<Scalars['String']>,
  webPage?: Maybe<Scalars['String']>,
  referralProjects: Array<Project>,
  imported?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  contacts: Array<Contact>,
  avatarUrl?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  affiliations: Array<Affiliation>,
  oldCompany?: Maybe<Scalars['String']>,
  greetAs?: Maybe<Scalars['String']>,
  strategicTargetProjects: Array<Project>,
  clientAccess?: Maybe<Scalars['Boolean']>,
  deletedOn?: Maybe<Scalars['Date']>,
  title?: Maybe<Scalars['String']>,
  birthDay?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mobile?: Maybe<Scalars['String']>,
  tags: Array<Tag>,
  doNotMergeWith: Array<Scalars['Int']>,
  temp?: Maybe<Scalars['Int']>,
  sentFeeSchedule?: Maybe<Scalars['Boolean']>,
  projects: Array<Project>,
  id: Scalars['ID'],
  memberships: Array<Membership>,
  deletedByUser?: Maybe<User>,
  tenTouches: Array<TenTouch>,
  namesOnInvoices?: Maybe<Scalars['Boolean']>,
  sortAs?: Maybe<Scalars['String']>,
  residences: Array<Residence>,
  downloadedMec?: Maybe<Scalars['DateTime']>,
  campaignsContacts: Array<CampaignsContact>,
  deletedReason?: Maybe<Scalars['String']>,
  seminarAttendees: Array<SeminarAttendee>,
  displayAs: Scalars['String'],
  firstName?: Maybe<Scalars['String']>,
  jobTitle?: Maybe<Scalars['String']>,
  notes: Array<Note>,
  hexId?: Maybe<Scalars['String']>,
  clientAccessWholeOffice?: Maybe<Scalars['Boolean']>,
  birthMonth?: Maybe<Scalars['String']>,
};


export type ContactContactsArgs = {
  includeInactive?: Maybe<Scalars['Boolean']>
};


export type ContactTagsArgs = {
  sections?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type ContactImport = {
   __typename: 'ContactImport',
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  campaign?: Maybe<Campaign>,
  campaignField?: Maybe<Scalars['String']>,
  campaignFieldNewContact?: Maybe<Scalars['String']>,
  countAdded?: Maybe<Scalars['Int']>,
  countMatched?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  importedAt?: Maybe<Scalars['DateTime']>,
  importedContacts: Array<ImportedContact>,
  mappings?: Maybe<Scalars['Quill']>,
  name: Scalars['String'],
  tagPending?: Maybe<Scalars['Boolean']>,
  tags: Array<Tag>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ContactImportInput = {
  attachment?: Maybe<Scalars['Upload']>,
  campaignField?: Maybe<Scalars['String']>,
  campaignFieldNewContact?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  data?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  mappings?: Maybe<Scalars['Quill']>,
  name?: Maybe<Scalars['String']>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagPending?: Maybe<Scalars['Boolean']>,
};

export type ContactInput = {
  birthMonth?: Maybe<Scalars['String']>,
  clientAccessWholeOffice?: Maybe<Scalars['Boolean']>,
  jobTitle?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  deletedReason?: Maybe<Scalars['String']>,
  residences?: Maybe<Array<Maybe<ResidenceInput>>>,
  namesOnInvoices?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  sentFeeSchedule?: Maybe<Scalars['Boolean']>,
  mobile?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  birthDay?: Maybe<Scalars['String']>,
  deletedOn?: Maybe<Scalars['Date']>,
  clientAccess?: Maybe<Scalars['Boolean']>,
  affiliations?: Maybe<Array<Maybe<AffiliationInput>>>,
  latitude?: Maybe<Scalars['String']>,
  webPage?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  linkedIn?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  goesBy?: Maybe<Scalars['String']>,
  creatorId?: Maybe<Scalars['ID']>,
  additionalEmails?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  mode?: Maybe<Scalars['String']>,
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>,
  strategicTargetCategories?: Maybe<Array<Maybe<Scalars['String']>>>,
  marketingStatus?: Maybe<Scalars['String']>,
  contactId?: Maybe<Scalars['ID']>,
  directPhone?: Maybe<Scalars['String']>,
  suffix?: Maybe<Scalars['String']>,
  workPhone?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['Upload']>,
};

export type ContactParamsInput = {
  commit?: Maybe<Scalars['String']>,
  filter?: Maybe<Scalars['String']>,
  fromSearch?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>,
  utf8?: Maybe<Scalars['String']>,
};

export type ContactResults = {
   __typename: 'ContactResults',
  clientAccessCount: Scalars['Int'],
  clientCount: Scalars['Int'],
  companyCount: Scalars['Int'],
  contactCompaniesCount: Scalars['Int'],
  contacts: Array<Contact>,
  currentClientCount: Scalars['Int'],
  emailCount: Scalars['Int'],
  excludingClientsCount: Scalars['Int'],
  filteredCompanyCount: Scalars['Int'],
  filteredContactCompaniesCount: Scalars['Int'],
  filteredContactCount: Scalars['Int'],
  filteredProspectCount: Scalars['Int'],
  filteredWhaleCount: Scalars['Int'],
  pastClientCount: Scalars['Int'],
  prospectCount: Scalars['Int'],
  title: Scalars['String'],
  totalCount: Scalars['Int'],
  whaleCount: Scalars['Int'],
};

export type ContactSearchAdvancedFilter = {
  criteria?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  values?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ContactSearchFilter = {
  company?: Maybe<Scalars['ID']>,
  custom?: Maybe<Scalars['String']>,
  filter?: Maybe<Scalars['String']>,
  filters?: Maybe<Array<Maybe<ContactSearchAdvancedFilter>>>,
  firstName?: Maybe<Scalars['String']>,
  includeArchived?: Maybe<Scalars['Boolean']>,
  lastName?: Maybe<Scalars['String']>,
  mode?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['String']>,
  pageSize?: Maybe<Scalars['Int']>,
  query?: Maybe<Scalars['String']>,
  searchNotes?: Maybe<Scalars['Boolean']>,
  strategicTarget?: Maybe<Scalars['Boolean']>,
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type ContactsMailing = {
   __typename: 'ContactsMailing',
  contact?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  mailing?: Maybe<Mailing>,
  sent?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ConversionRate = {
   __typename: 'ConversionRate',
  count: Scalars['Int'],
  stage: Scalars['Int'],
  to0?: Maybe<Scalars['Int']>,
  to10?: Maybe<Scalars['Int']>,
  to100?: Maybe<Scalars['Int']>,
  to30?: Maybe<Scalars['Int']>,
  to50?: Maybe<Scalars['Int']>,
  to70?: Maybe<Scalars['Int']>,
  to90?: Maybe<Scalars['Int']>,
};

export type CopyCampaignContactsResult = {
   __typename: 'CopyCampaignContactsResult',
  addedCount: Scalars['Int'],
  totalCount: Scalars['Int'],
};

export type CreateReportInput = {
  projectNumber?: Maybe<Scalars['String']>,
  reportTypeId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type CreditMemo = {
   __typename: 'CreditMemo',
  amount: Scalars['Decimal'],
  appliedPayments: Array<AppliedPayment>,
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  id: Scalars['ID'],
  itemDate: Scalars['Date'],
  project: Project,
  synced: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
};

export type CreditMemoInput = {
  amount?: Maybe<Scalars['Decimal']>,
  appliedPayments?: Maybe<Array<Maybe<AppliedPaymentInput>>>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['Date']>,
  projectId?: Maybe<Scalars['ID']>,
  synced?: Maybe<Scalars['Boolean']>,
};




export type Deliverable = {
   __typename: 'Deliverable',
  budget?: Maybe<Scalars['Decimal']>,
  completed?: Maybe<Scalars['Boolean']>,
  costs: Array<DeliverableCost>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  dueDate?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  ilTotal?: Maybe<Scalars['Decimal']>,
  kanbanCards: Array<KanbanCard>,
  milestoneparent: Milestoneparent,
  plan: Plan,
  priority: Scalars['String'],
  project: Project,
  rank?: Maybe<Scalars['Int']>,
  totalInvoiced?: Maybe<Scalars['Decimal']>,
  totalNc?: Maybe<Scalars['Decimal']>,
  totalPending?: Maybe<Scalars['Decimal']>,
  tsTotal?: Maybe<Scalars['Decimal']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DeliverableCost = {
   __typename: 'DeliverableCost',
  amount: Scalars['Decimal'],
  billingPosition: BillingPosition,
  completed?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['DateTime'],
  deliverable?: Maybe<Deliverable>,
  deliverablemenuitemId?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  dueDate?: Maybe<Scalars['DateTime']>,
  hours: Scalars['Decimal'],
  id: Scalars['ID'],
  plan: Plan,
  position?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
  updater?: Maybe<User>,
  user?: Maybe<User>,
};

export type DeliverableCostInput = {
  amount?: Maybe<Scalars['String']>,
  billingPositionId?: Maybe<Scalars['ID']>,
  delete?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  planId?: Maybe<Scalars['ID']>,
  uuid?: Maybe<Scalars['String']>,
};

export type DeliverableInput = {
  completed?: Maybe<Scalars['Boolean']>,
  costs?: Maybe<Array<Maybe<DeliverableCostInput>>>,
  description?: Maybe<Scalars['String']>,
  dueDate?: Maybe<Scalars['String']>,
  milestoneparentId?: Maybe<Scalars['ID']>,
  planId?: Maybe<Scalars['ID']>,
  priority?: Maybe<Scalars['String']>,
};

export type DeliverableMenuItem = {
   __typename: 'DeliverableMenuItem',
  createdAt: Scalars['DateTime'],
  description: Scalars['String'],
  id: Scalars['ID'],
  name: Scalars['String'],
  planSection: PlanSection,
  position?: Maybe<Scalars['Int']>,
  sku: Sku,
  updatedAt: Scalars['DateTime'],
};

export type DeliverableMenuItemInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  planSectionId?: Maybe<Scalars['ID']>,
  skuId?: Maybe<Scalars['ID']>,
};

export type Deposit = {
   __typename: 'Deposit',
  account: Scalars['String'],
  ach?: Maybe<Scalars['Boolean']>,
  amount: Scalars['Decimal'],
  date: Scalars['Date'],
  id: Scalars['ID'],
  payments: Array<Payment>,
  retainers: Array<Retainer>,
  status: Scalars['String'],
  synced: Scalars['Boolean'],
};

export type DepositInput = {
  account?: Maybe<Scalars['String']>,
  ach?: Maybe<Scalars['Boolean']>,
  amount?: Maybe<Scalars['Decimal']>,
  date?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  synced?: Maybe<Scalars['Boolean']>,
};

export type Device = {
   __typename: 'Device',
  office: Scalars['String'],
  user?: Maybe<User>,
  faststone?: Maybe<Scalars['String']>,
  cpuRank?: Maybe<Scalars['Int']>,
  pfcsAccount?: Maybe<Scalars['Boolean']>,
  motherboard?: Maybe<Scalars['String']>,
  originalInstallDate?: Maybe<Scalars['Date']>,
  acrobat?: Maybe<Scalars['String']>,
  chrome?: Maybe<Scalars['Boolean']>,
  ramType?: Maybe<Scalars['String']>,
  graphics?: Maybe<Scalars['String']>,
  cpu?: Maybe<Scalars['String']>,
  ramSize?: Maybe<Scalars['String']>,
  videoPorts?: Maybe<Scalars['String']>,
  os?: Maybe<Scalars['String']>,
  purchaseDate?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  storage?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  checkoutDate?: Maybe<Scalars['Date']>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  printer?: Maybe<Scalars['Boolean']>,
  productKey?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  lastUpdated?: Maybe<Scalars['Date']>,
  goToMeeting?: Maybe<Scalars['String']>,
  category: Scalars['String'],
  location?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  vnc?: Maybe<Scalars['String']>,
  ip?: Maybe<Scalars['String']>,
  remote?: Maybe<Scalars['Boolean']>,
  msOffice?: Maybe<Scalars['String']>,
  equipmentId?: Maybe<Scalars['String']>,
  notes: Array<Note>,
};

export type DeviceInput = {
  acrobat?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  checkoutDate?: Maybe<Scalars['String']>,
  chrome?: Maybe<Scalars['Boolean']>,
  cpu?: Maybe<Scalars['String']>,
  cpuRank?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  equipmentId?: Maybe<Scalars['String']>,
  faststone?: Maybe<Scalars['String']>,
  goToMeeting?: Maybe<Scalars['String']>,
  graphics?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  ip?: Maybe<Scalars['String']>,
  lastUpdated?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  model?: Maybe<Scalars['String']>,
  motherboard?: Maybe<Scalars['String']>,
  msOffice?: Maybe<Scalars['String']>,
  office?: Maybe<Scalars['String']>,
  originalInstallDate?: Maybe<Scalars['String']>,
  os?: Maybe<Scalars['String']>,
  pfcsAccount?: Maybe<Scalars['Boolean']>,
  printer?: Maybe<Scalars['Boolean']>,
  productKey?: Maybe<Scalars['String']>,
  purchaseDate?: Maybe<Scalars['String']>,
  ramSize?: Maybe<Scalars['String']>,
  ramType?: Maybe<Scalars['String']>,
  remote?: Maybe<Scalars['Boolean']>,
  storage?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
  videoPorts?: Maybe<Scalars['String']>,
  vnc?: Maybe<Scalars['String']>,
};

export type Dispatch = {
   __typename: 'Dispatch',
  category: Scalars['String'],
  checklists: Array<Checklist>,
  createdAt?: Maybe<Scalars['DateTime']>,
  date: Scalars['Date'],
  description?: Maybe<Scalars['String']>,
  documentReferences: Array<DocumentReference>,
  documents: Array<Document>,
  expert: User,
  hideElements?: Maybe<Scalars['Boolean']>,
  hideImages?: Maybe<Scalars['Boolean']>,
  hideIssues?: Maybe<Scalars['Boolean']>,
  hideLocations?: Maybe<Scalars['Boolean']>,
  hideMaps?: Maybe<Scalars['Boolean']>,
  hideOms?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  imageReferences: Array<ImageReference>,
  infoImages: Array<InfoImage>,
  legacy?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Scalars['String']>,
  materials?: Maybe<Scalars['String']>,
  meetings?: Maybe<Scalars['String']>,
  oneMinuteSummary?: Maybe<Scalars['String']>,
  photoNumber?: Maybe<Scalars['String']>,
  photoset?: Maybe<Photoset>,
  project: Project,
  startingAddress?: Maybe<Scalars['String']>,
  time?: Maybe<Scalars['Time']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DispatchInput = {
  category?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  expertId?: Maybe<Scalars['ID']>,
  hideElements?: Maybe<Scalars['Boolean']>,
  hideImages?: Maybe<Scalars['Boolean']>,
  hideIssues?: Maybe<Scalars['Boolean']>,
  hideLocations?: Maybe<Scalars['Boolean']>,
  hideMaps?: Maybe<Scalars['Boolean']>,
  hideOms?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  legacy?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Scalars['String']>,
  materials?: Maybe<Scalars['String']>,
  meetings?: Maybe<Scalars['String']>,
  oneMinuteSummary?: Maybe<Scalars['String']>,
  photoNumber?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  startingAddress?: Maybe<Scalars['String']>,
  time?: Maybe<Scalars['String']>,
};

export type Document = {
   __typename: 'Document',
  attachedFiles: Array<AttachedFile>,
  endDate?: Maybe<Scalars['Date']>,
  analysisTitle?: Maybe<Scalars['String']>,
  hidden?: Maybe<Scalars['Boolean']>,
  batesStamp?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  sourceFile?: Maybe<SourceFile>,
  documentCategories: Array<DocumentCategory>,
  ancestors: Array<Document>,
  recipient?: Maybe<Scalars['String']>,
  suffix?: Maybe<Scalars['String']>,
  pages?: Maybe<Scalars['Int']>,
  key?: Maybe<Scalars['Boolean']>,
  references: Array<Document>,
  library?: Maybe<Scalars['Boolean']>,
  analysisUser?: Maybe<User>,
  path?: Maybe<Scalars['String']>,
  mode?: Maybe<Scalars['String']>,
  pageReference?: Maybe<Scalars['Int']>,
  legacySection?: Maybe<Scalars['String']>,
  referenceDocument?: Maybe<Document>,
  attachmentUrl?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  employee?: Maybe<Employee>,
  pdfSecurity?: Maybe<Scalars['Boolean']>,
  source?: Maybe<Scalars['String']>,
  attachmentFileSize?: Maybe<Scalars['Int']>,
  alternateAttachment?: Maybe<ArcAttachment>,
  attachmentId?: Maybe<Scalars['Int']>,
  attachment?: Maybe<ArcAttachment>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  documents: Array<Document>,
  alternateAttachmentUrl?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  header?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  analysisJson?: Maybe<Scalars['Quill']>,
  url?: Maybe<Scalars['String']>,
  migrated?: Maybe<Scalars['Boolean']>,
  md5?: Maybe<Scalars['String']>,
  analysis?: Maybe<Scalars['String']>,
  alternateAttachmentFileSize?: Maybe<Scalars['Int']>,
  elements: Array<Element>,
  document?: Maybe<Document>,
  receivedDate?: Maybe<Scalars['Date']>,
  publicDescription?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  project?: Maybe<Project>,
  author?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  printed?: Maybe<Scalars['Boolean']>,
  attachmentThumbUrl?: Maybe<Scalars['String']>,
  tenTouchItems: Array<TenTouchItem>,
  analysisDate?: Maybe<Scalars['Date']>,
};

export type DocumentCategory = {
   __typename: 'DocumentCategory',
  documentCategories: Array<DocumentCategory>,
  documentCategory?: Maybe<DocumentCategory>,
  documentCategoryId?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type DocumentInput = {
  analysisDate?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  printed?: Maybe<Scalars['Boolean']>,
  date?: Maybe<Scalars['String']>,
  elementIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  author?: Maybe<Scalars['String']>,
  documentId?: Maybe<Scalars['ID']>,
  sourceFileId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  referenceDocumentId?: Maybe<Scalars['ID']>,
  copyDocumentId?: Maybe<Scalars['ID']>,
  receivedDate?: Maybe<Scalars['String']>,
  initialAttachment?: Maybe<Scalars['Upload']>,
  analysis?: Maybe<Scalars['String']>,
  md5?: Maybe<Scalars['String']>,
  categoryIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  migrated?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  analysisJson?: Maybe<Scalars['Quill']>,
  header?: Maybe<Scalars['Boolean']>,
  remoteAttachmentUrl?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  attachment?: Maybe<Scalars['Upload']>,
  alternateAttachment?: Maybe<Scalars['Upload']>,
  source?: Maybe<Scalars['String']>,
  pdfSecurity?: Maybe<Scalars['Boolean']>,
  summary?: Maybe<Scalars['String']>,
  pageReference?: Maybe<Scalars['String']>,
  mode?: Maybe<Scalars['String']>,
  library?: Maybe<Scalars['Boolean']>,
  employeeId?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  pages?: Maybe<Scalars['String']>,
  suffix?: Maybe<Scalars['String']>,
  recipient?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  batesStamp?: Maybe<Scalars['String']>,
  hidden?: Maybe<Scalars['Boolean']>,
  analysisTitle?: Maybe<Scalars['String']>,
  analysisUserId?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['String']>,
};

export type DocumentReference = {
   __typename: 'DocumentReference',
  createdAt?: Maybe<Scalars['DateTime']>,
  dispatch?: Maybe<Dispatch>,
  document?: Maybe<Document>,
  id: Scalars['ID'],
  interview?: Maybe<Interview>,
  rank?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type DocumentReferenceInput = {
  dispatchId?: Maybe<Scalars['ID']>,
  documentId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  interviewId?: Maybe<Scalars['ID']>,
  position?: Maybe<Scalars['String']>,
};

export type DownloadPhotosInput = {
  detail?: Maybe<Scalars['String']>,
  filters?: Maybe<PhotoSearchFilters>,
  introText?: Maybe<Scalars['String']>,
  layout?: Maybe<Scalars['String']>,
  sort?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  uuid?: Maybe<Scalars['String']>,
};

export type DuplicateContactSet = {
   __typename: 'DuplicateContactSet',
  contacts: Array<Contact>,
};

export type DynamicMetric = {
   __typename: 'DynamicMetric',
  count?: Maybe<Scalars['Int']>,
  currentOnly?: Maybe<Scalars['Boolean']>,
  date?: Maybe<Scalars['ErlDate']>,
  extraInt?: Maybe<Scalars['Int']>,
  format?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  notes?: Maybe<Array<Maybe<Scalars['String']>>>,
  sum?: Maybe<Scalars['Decimal']>,
};

export type EditorTemplate = {
   __typename: 'EditorTemplate',
  category?: Maybe<Scalars['String']>,
  content: Scalars['Quill'],
  contentType: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  plainContent?: Maybe<Scalars['String']>,
  scope: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type Element = {
   __typename: 'Element',
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  bpaLinks: Array<BpaLink>,
  createdAt?: Maybe<Scalars['DateTime']>,
  customFields?: Maybe<Scalars['Quill']>,
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  iiaccAnalysis?: Maybe<Scalars['String']>,
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  iiaccIssue?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  next?: Maybe<Element>,
  number: Scalars['String'],
  otherKeyPhotoCount: Scalars['Int'],
  otherPhotoCount: Scalars['Int'],
  pfcsKeyPhotoCount: Scalars['Int'],
  pfcsPhotoCount: Scalars['Int'],
  photoLinks: Array<PhotoLink>,
  photos: Array<Photo>,
  prev?: Maybe<Element>,
  priority?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  specificationsExecution?: Maybe<Scalars['String']>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ElementInput = {
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  customFields?: Maybe<Scalars['Quill']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  iiaccAnalysis?: Maybe<Scalars['String']>,
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  iiaccIssue?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  specificationsExecution?: Maybe<Scalars['String']>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>,
};

export type Employee = {
   __typename: 'Employee',
  salaries: Array<Salary>,
  office: Office,
  user?: Maybe<User>,
  lastName?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['Date']>,
  version?: Maybe<Scalars['Int']>,
  manager?: Maybe<User>,
  monthlyPayments: Array<MonthlyPayment>,
  goals: Array<Goal>,
  originalBillableGoal?: Maybe<Goal>,
  annualHours: Array<AnnualHourStats>,
  forecasts: Array<EmployeeForecast>,
  address?: Maybe<Scalars['String']>,
  standardHours?: Maybe<Scalars['Int']>,
  startDate: Scalars['Date'],
  schedule?: Maybe<Scalars['String']>,
  department: Scalars['String'],
  future: Scalars['Boolean'],
  checklists: Array<Checklist>,
  dateOfBirth?: Maybe<Scalars['Date']>,
  state?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  documents: Array<Document>,
  city?: Maybe<Scalars['String']>,
  employeeReviews: Array<EmployeeReview>,
  billableHours: Array<DynamicMetric>,
  billableGoalReductions: Array<BillableGoalReduction>,
  revisedBillableGoal?: Maybe<Scalars['Decimal']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  employmentStatus: Scalars['String'],
  tasks: Array<Task>,
  originalBillableTarget?: Maybe<Scalars['Decimal']>,
  billingPosition: BillingPosition,
  employeeType: Scalars['String'],
  priorPtoBalance?: Maybe<Scalars['Float']>,
  milestones: Array<Milestone>,
  id: Scalars['ID'],
  billableGoals: Array<BillableGoal>,
  sortAs?: Maybe<Scalars['String']>,
  displayAs?: Maybe<Scalars['String']>,
  zip?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  notes: Array<Note>,
  revisedBillableTarget?: Maybe<Scalars['Decimal']>,
  workingHours?: Maybe<Scalars['Int']>,
};


export type EmployeeMonthlyPaymentsArgs = {
  month?: Maybe<Scalars['String']>
};


export type EmployeeOriginalBillableGoalArgs = {
  month: Scalars['String']
};


export type EmployeeAnnualHoursArgs = {
  year: Scalars['Int']
};


export type EmployeeForecastsArgs = {
  year: Scalars['Int']
};


export type EmployeeBillableHoursArgs = {
  end: Scalars['String'],
  filter?: Maybe<Scalars['String']>,
  start: Scalars['String']
};


export type EmployeeRevisedBillableGoalArgs = {
  month: Scalars['String']
};


export type EmployeeOriginalBillableTargetArgs = {
  end: Scalars['String'],
  start: Scalars['String']
};


export type EmployeeRevisedBillableTargetArgs = {
  day?: Maybe<Scalars['Boolean']>,
  end: Scalars['String'],
  start: Scalars['String']
};


export type EmployeeWorkingHoursArgs = {
  month: Scalars['String']
};

export type EmployeeForecast = {
   __typename: 'EmployeeForecast',
  cost?: Maybe<Scalars['Decimal']>,
  date?: Maybe<Scalars['Date']>,
  goal?: Maybe<Scalars['Decimal']>,
  gp?: Maybe<Scalars['Decimal']>,
  rate?: Maybe<Scalars['Int']>,
  sales?: Maybe<Scalars['Decimal']>,
};

export type EmployeeInput = {
  billableGoalTarget?: Maybe<Scalars['Decimal']>,
  billableGoalTargetFixed?: Maybe<Scalars['Boolean']>,
  billingPositionId?: Maybe<Scalars['ID']>,
  department?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  employeeType?: Maybe<Scalars['String']>,
  employmentStatus?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  future?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  managerId?: Maybe<Scalars['ID']>,
  officeId?: Maybe<Scalars['ID']>,
  salaries?: Maybe<Array<Maybe<SalaryInput>>>,
  schedule?: Maybe<Scalars['String']>,
  shiftDates?: Maybe<Scalars['Boolean']>,
  standardHours?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type EmployeeReview = {
   __typename: 'EmployeeReview',
  completed?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  reviewDate?: Maybe<Scalars['Date']>,
  reviewer?: Maybe<User>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type EmployeeReviewInput = {
  completed?: Maybe<Scalars['Boolean']>,
  employeeId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  reviewDate?: Maybe<Scalars['String']>,
  reviewerId?: Maybe<Scalars['ID']>,
};


export type Feature = {
   __typename: 'Feature',
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  category: Scalars['String'],
  closeNote?: Maybe<Scalars['String']>,
  completedOn?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  feature?: Maybe<Feature>,
  featureType: Scalars['String'],
  features: Array<Feature>,
  hours?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  kanbanCards: Array<KanbanCard>,
  notes: Array<Note>,
  priority: Scalars['String'],
  scale?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  tasks: Array<Task>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: User,
};

export type FeatureInput = {
  attachment?: Maybe<Scalars['Upload']>,
  category?: Maybe<Scalars['String']>,
  closeNote?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  featureId?: Maybe<Scalars['ID']>,
  featureType?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  priority?: Maybe<Scalars['String']>,
  scale?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type FeeSchedule = {
   __typename: 'FeeSchedule',
  attachmentUrl?: Maybe<Scalars['String']>,
  billingRates: Array<BillingRate>,
  createdAt: Scalars['DateTime'],
  effectiveDate: Scalars['Date'],
  id: Scalars['ID'],
  name: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type FeeScheduleInput = {
  attachment?: Maybe<Scalars['Upload']>,
  effectiveDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type Goal = {
   __typename: 'Goal',
  createdAt: Scalars['DateTime'],
  date: Scalars['Date'],
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  name: Scalars['String'],
  period: Scalars['String'],
  updatedAt: Scalars['DateTime'],
  value: Scalars['Decimal'],
};

export type GoalInput = {
  date?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type ImageReference = {
   __typename: 'ImageReference',
  createdAt?: Maybe<Scalars['DateTime']>,
  dispatch?: Maybe<Dispatch>,
  id: Scalars['ID'],
  infoImage?: Maybe<InfoImage>,
  rank?: Maybe<Scalars['Int']>,
  reportSection?: Maybe<ReportSection>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ImageReferenceInput = {
  dispatchId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  infoImageId?: Maybe<Scalars['ID']>,
  position?: Maybe<Scalars['String']>,
  reportSectionId?: Maybe<Scalars['ID']>,
};

export type ImageReferencesInput = {
  dispatchId?: Maybe<Scalars['ID']>,
  infoImageIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  position?: Maybe<Scalars['String']>,
  reportSectionId?: Maybe<Scalars['ID']>,
};

export type ImportedContact = {
   __typename: 'ImportedContact',
  action?: Maybe<Scalars['String']>,
  contact: Contact,
  contactImport: ContactImport,
  id: Scalars['ID'],
};

export type InfoImage = {
   __typename: 'InfoImage',
  attachment: ArcAttachment,
  attachmentUrl: Scalars['String'],
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  position?: Maybe<Scalars['Int']>,
  project: Project,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type InfoImageInput = {
  attachment?: Maybe<Scalars['Upload']>,
  category?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  direction?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
};


export type Interview = {
   __typename: 'Interview',
  attendees?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  bodyJson?: Maybe<Scalars['Quill']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  documentReferences?: Maybe<Array<Maybe<DocumentReference>>>,
  id: Scalars['ID'],
  legacy?: Maybe<Scalars['Boolean']>,
  meetingType?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  template?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type InterviewInput = {
  attendees?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  bodyJson?: Maybe<Scalars['Quill']>,
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  legacy?: Maybe<Scalars['Boolean']>,
  meetingType?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  template?: Maybe<Scalars['Boolean']>,
};

export type Invoice = {
   __typename: 'Invoice',
  appliedPayments?: Maybe<Array<Maybe<AppliedPayment>>>,
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  attachments: Array<Attachment>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  displayLines?: Maybe<Scalars['Boolean']>,
  document?: Maybe<Document>,
  emailedAt?: Maybe<Scalars['DateTime']>,
  finalizedAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  invoiceDate: Scalars['Date'],
  invoiceTotal: Scalars['Decimal'],
  invoiceType: Scalars['String'],
  invoicedDeliverables: Array<InvoicedDeliverable>,
  invoicelines: Array<Invoiceline>,
  isAdjustment?: Maybe<Scalars['Boolean']>,
  mailedAt?: Maybe<Scalars['DateTime']>,
  memo?: Maybe<Scalars['String']>,
  noChargeTotal?: Maybe<Scalars['Decimal']>,
  nonBillableTotal?: Maybe<Scalars['Decimal']>,
  paymentTotal?: Maybe<Scalars['Decimal']>,
  payments?: Maybe<Array<Maybe<Payment>>>,
  project: Project,
  sentAt?: Maybe<Scalars['DateTime']>,
  status: Scalars['String'],
  submitter?: Maybe<User>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  viewByDeliverable?: Maybe<Scalars['Boolean']>,
};

export type InvoicedDeliverable = {
   __typename: 'InvoicedDeliverable',
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverable: Deliverable,
  description?: Maybe<Scalars['String']>,
  displayOrder?: Maybe<Scalars['Int']>,
  fixedFee?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  invoice: Invoice,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type InvoicedDeliverableInput = {
  description?: Maybe<Scalars['String']>,
  fixedFee?: Maybe<Scalars['String']>,
};

export type InvoiceInput = {
  attachment?: Maybe<Scalars['Upload']>,
  description?: Maybe<Scalars['String']>,
  displayLines?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  invoiceDate?: Maybe<Scalars['String']>,
  invoiceTotal?: Maybe<Scalars['String']>,
  invoiceType?: Maybe<Scalars['String']>,
  isAdjustment?: Maybe<Scalars['Boolean']>,
  memo?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  viewByDeliverable?: Maybe<Scalars['Boolean']>,
};

export type Invoiceline = {
   __typename: 'Invoiceline',
  allowPayment?: Maybe<Scalars['Boolean']>,
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  billedPosition: Scalars['String'],
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverable?: Maybe<Deliverable>,
  description: Scalars['String'],
  hours: Scalars['Decimal'],
  id: Scalars['ID'],
  invoice: Invoice,
  isExpense?: Maybe<Scalars['Boolean']>,
  itemDate: Scalars['Date'],
  lineTotal: Scalars['Decimal'],
  noCharge?: Maybe<Scalars['Boolean']>,
  nonBillable?: Maybe<Scalars['Boolean']>,
  project: Project,
  rate: Scalars['Decimal'],
  revised?: Maybe<Scalars['Boolean']>,
  testimony?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: User,
};

export type InvoicelineInput = {
  allowPayment?: Maybe<Scalars['Boolean']>,
  billedPosition?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  isExpense?: Maybe<Scalars['Boolean']>,
  itemDate?: Maybe<Scalars['String']>,
  lineTotal?: Maybe<Scalars['String']>,
  noCharge?: Maybe<Scalars['Boolean']>,
  nonBillable?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  rate?: Maybe<Scalars['String']>,
  testimony?: Maybe<Scalars['Boolean']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Issue = {
   __typename: 'Issue',
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  next?: Maybe<Issue>,
  sourceDocument?: Maybe<Document>,
  bpaLinks?: Maybe<Array<Maybe<BpaLink>>>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  customFields?: Maybe<Scalars['Quill']>,
  specificationsExecution?: Maybe<Scalars['String']>,
  issues?: Maybe<Array<Maybe<Issue>>>,
  otherKeyPhotoCount?: Maybe<Scalars['Int']>,
  pfcsPhotoCount?: Maybe<Scalars['Int']>,
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  photos?: Maybe<Array<Maybe<Photo>>>,
  iiaccIssue?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  otherPhotoCount?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  prev?: Maybe<Issue>,
  displayName?: Maybe<Scalars['String']>,
  header?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  issue?: Maybe<Issue>,
  analysis?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<Element>>>,
  photoLinks?: Maybe<Array<Maybe<PhotoLink>>>,
  issueId?: Maybe<Scalars['ID']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  alternateNumber?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  iiaccAnalysis?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  pfcsKeyPhotoCount?: Maybe<Scalars['Int']>,
  priority?: Maybe<Scalars['String']>,
};

export type IssueInput = {
  alternateNumber?: Maybe<Scalars['String']>,
  analysis?: Maybe<Scalars['String']>,
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  customFields?: Maybe<Scalars['Quill']>,
  description?: Maybe<Scalars['String']>,
  header?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  iiaccAnalysis?: Maybe<Scalars['String']>,
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  iiaccIssue?: Maybe<Scalars['String']>,
  issueId?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  sourceDocumentId?: Maybe<Scalars['ID']>,
  specificationsExecution?: Maybe<Scalars['String']>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};

export type KanbanCard = {
   __typename: 'KanbanCard',
  blocked?: Maybe<Scalars['Boolean']>,
  blockedReason?: Maybe<Scalars['String']>,
  column: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  cycleTime?: Maybe<Scalars['Int']>,
  dateAdded?: Maybe<Scalars['Date']>,
  dateCompleted?: Maybe<Scalars['Date']>,
  dateStarted?: Maybe<Scalars['Date']>,
  deliverable?: Maybe<Deliverable>,
  dueDate?: Maybe<Scalars['Date']>,
  events: Array<KanbanCardEvents>,
  feature?: Maybe<Feature>,
  hours?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  leadTime?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  rank?: Maybe<Scalars['Int']>,
  tasks: Array<Task>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type KanbanCardEvents = {
   __typename: 'KanbanCardEvents',
  column?: Maybe<Scalars['String']>,
  time?: Maybe<Scalars['String']>,
};

export type KanbanCardInput = {
  blocked?: Maybe<Scalars['Boolean']>,
  blockedReason?: Maybe<Scalars['String']>,
  column?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  dueDate?: Maybe<Scalars['String']>,
  featureId?: Maybe<Scalars['ID']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  tasks?: Maybe<Array<Maybe<TaskInput>>>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Kpi = {
   __typename: 'Kpi',
  createdAt?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['Date']>,
  globalSet?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  kpiType?: Maybe<KpiType>,
  notApplicable?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
  value?: Maybe<Scalars['Decimal']>,
};

export type KpiInput = {
  date?: Maybe<Scalars['String']>,
  globalSet?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  kpiTypeId?: Maybe<Scalars['ID']>,
  repeatGoal?: Maybe<Scalars['Boolean']>,
  userLogin?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type KpiSection = {
   __typename: 'KpiSection',
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  kpiSet?: Maybe<KpiSet>,
  kpiTypes?: Maybe<Array<Maybe<KpiType>>>,
  name?: Maybe<Scalars['String']>,
  pageBreak?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  who?: Maybe<Scalars['String']>,
};

export type KpiSectionInput = {
  category?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  kpiSetId?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  pageBreak?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  who?: Maybe<Scalars['String']>,
};

export type KpiSet = {
   __typename: 'KpiSet',
  createdAt?: Maybe<Scalars['DateTime']>,
  globalSet?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  kpiSections: Array<KpiSection>,
  name: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  users: Array<User>,
};

export type KpiSetInput = {
  globalSet?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type KpiType = {
   __typename: 'KpiType',
  aggregation?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  editable?: Maybe<Scalars['Boolean']>,
  endYear?: Maybe<Scalars['Int']>,
  hideWhenEmpty?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  kpiSection?: Maybe<KpiSection>,
  kpis?: Maybe<Array<Maybe<Kpi>>>,
  mode?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>,
  section?: Maybe<Scalars['String']>,
  shouldNotExceedGoal?: Maybe<Scalars['Boolean']>,
  staffTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
  startYear?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  valueType?: Maybe<Scalars['String']>,
};

export type KpiTypeInput = {
  aggregation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  editable?: Maybe<Scalars['Boolean']>,
  endYear?: Maybe<Scalars['IntegerInput']>,
  hideWhenEmpty?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  kpiSectionId?: Maybe<Scalars['ID']>,
  mode?: Maybe<Scalars['String']>,
  shouldNotExceedGoal?: Maybe<Scalars['Boolean']>,
  startYear?: Maybe<Scalars['IntegerInput']>,
  title?: Maybe<Scalars['String']>,
  valueType?: Maybe<Scalars['String']>,
};

export type LibrarySearch = {
   __typename: 'LibrarySearch',
  label: Scalars['String'],
  results: Array<Document>,
};

export type List = {
   __typename: 'List',
  active?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  fields: Array<Array<Scalars['String']>>,
  id: Scalars['ID'],
  items: Array<ListItem>,
  mode: Scalars['String'],
  name: Scalars['String'],
  project: Project,
  sortBy?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ListInput = {
  active?: Maybe<Scalars['Boolean']>,
  fields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  id?: Maybe<Scalars['ID']>,
  mode?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  sortBy?: Maybe<Scalars['String']>,
};

export type ListItem = {
   __typename: 'ListItem',
  createdAt?: Maybe<Scalars['DateTime']>,
  fields?: Maybe<Scalars['Quill']>,
  id: Scalars['ID'],
  item?: Maybe<ListItem>,
  items?: Maybe<ListItem>,
  list: List,
  name?: Maybe<Scalars['String']>,
  rank: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ListItemInput = {
  fields?: Maybe<Scalars['Quill']>,
  id?: Maybe<Scalars['ID']>,
  itemId?: Maybe<Scalars['ID']>,
  listId?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type Location = {
   __typename: 'Location',
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLink>>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  customFields?: Maybe<Scalars['Quill']>,
  displayName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  iiaccAnalysis?: Maybe<Scalars['String']>,
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  iiaccIssue?: Maybe<Scalars['String']>,
  location?: Maybe<Location>,
  locationId?: Maybe<Scalars['ID']>,
  locations?: Maybe<Array<Maybe<Location>>>,
  name?: Maybe<Scalars['String']>,
  nestedName?: Maybe<Scalars['String']>,
  next?: Maybe<Location>,
  otherKeyPhotoCount?: Maybe<Scalars['Int']>,
  otherPhotoCount?: Maybe<Scalars['Int']>,
  pfcsKeyPhotoCount?: Maybe<Scalars['Int']>,
  pfcsPhotoCount?: Maybe<Scalars['Int']>,
  photoLinks?: Maybe<Array<Maybe<PhotoLink>>>,
  photos?: Maybe<Array<Maybe<Photo>>>,
  prev?: Maybe<Location>,
  priority?: Maybe<Scalars['String']>,
  project?: Maybe<Project>,
  specificationsExecution?: Maybe<Scalars['String']>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type LocationInput = {
  analysisStatus?: Maybe<Scalars['String']>,
  basicAnalysis?: Maybe<Scalars['String']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  customFields?: Maybe<Scalars['Quill']>,
  id?: Maybe<Scalars['ID']>,
  iiaccAnalysis?: Maybe<Scalars['String']>,
  iiaccConclusion?: Maybe<Scalars['String']>,
  iiaccCosts?: Maybe<Scalars['String']>,
  iiaccInvestigation?: Maybe<Scalars['String']>,
  iiaccIssue?: Maybe<Scalars['String']>,
  locationId?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  specificationsExecution?: Maybe<Scalars['String']>,
  specificationsGeneral?: Maybe<Scalars['String']>,
  specificationsMaterials?: Maybe<Scalars['String']>,
  specificationsQualityAssurance?: Maybe<Scalars['String']>,
};

export type Mailing = {
   __typename: 'Mailing',
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  body: Scalars['String'],
  bypassFilters?: Maybe<Scalars['Boolean']>,
  campaign?: Maybe<Campaign>,
  campaignField?: Maybe<Scalars['String']>,
  checklists: Array<Checklist>,
  clientFilter?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  contactType?: Maybe<Scalars['String']>,
  contactsMailings: Array<ContactsMailing>,
  contactsMailingsCount?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  excludeCampaignField?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  previewContacts: Array<Contact>,
  replyTo?: Maybe<Scalars['String']>,
  sender: Scalars['String'],
  sentAt?: Maybe<Scalars['DateTime']>,
  status: Scalars['String'],
  subject: Scalars['String'],
  suppressUnsubscribeLink?: Maybe<Scalars['Boolean']>,
  taggings: Array<Tagging>,
  updateCampaignField?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type MailingInput = {
  attachment?: Maybe<Scalars['Upload']>,
  body?: Maybe<Scalars['String']>,
  bypassFilters?: Maybe<Scalars['Boolean']>,
  campaignField?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  clientFilter?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  contactType?: Maybe<Scalars['String']>,
  excludeCampaignField?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  replyTo?: Maybe<Scalars['String']>,
  sender?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  suppressUnsubscribeLink?: Maybe<Scalars['Boolean']>,
  updateCampaignField?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Membership = {
   __typename: 'Membership',
  blockClientAccess?: Maybe<Scalars['Boolean']>,
  contact: Contact,
  createdAt?: Maybe<Scalars['DateTime']>,
  fileNumber?: Maybe<Scalars['String']>,
  hashKey?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  invoicePercentage: Scalars['Float'],
  invoiceRecipient?: Maybe<Scalars['String']>,
  invoicing: Scalars['String'],
  memberId?: Maybe<Scalars['Int']>,
  memberType?: Maybe<Scalars['String']>,
  namesOnInvoices?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  primaryContact?: Maybe<Scalars['Boolean']>,
  project?: Maybe<Project>,
  role?: Maybe<Scalars['String']>,
  sendInvoice?: Maybe<Scalars['Boolean']>,
  survey?: Maybe<Survey>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MembershipInput = {
  blockClientAccess?: Maybe<Scalars['Boolean']>,
  contactId?: Maybe<Scalars['ID']>,
  fileNumber?: Maybe<Scalars['String']>,
  hashKey?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  invoicePercentage?: Maybe<Scalars['String']>,
  invoiceRecipient?: Maybe<Scalars['String']>,
  invoicing?: Maybe<Scalars['String']>,
  memberId?: Maybe<Scalars['Int']>,
  memberType?: Maybe<Scalars['String']>,
  namesOnInvoices?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  primaryContact?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  role?: Maybe<Scalars['String']>,
  sendInvoice?: Maybe<Scalars['Boolean']>,
};

export type Message = {
   __typename: 'Message',
  attachments: Array<Attachment>,
  bcc?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  cc?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  documents: Array<Document>,
  from?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  project: Project,
  sentAt: Scalars['DateTime'],
  subject?: Maybe<Scalars['String']>,
  to?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type MessageInput = {
  body?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  sentAt?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Metric = {
   __typename: 'Metric',
  campaign?: Maybe<Campaign>,
  campaignData: CampaignMetrics,
  captureDate: Scalars['Date'],
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  data: MetricValue,
  id: Scalars['ID'],
  rank?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type MetricInput = {
  campaignId?: Maybe<Scalars['ID']>,
  captureDate?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  data?: Maybe<MetricValueInput>,
};

export type MetricValue = {
   __typename: 'MetricValue',
  description?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
};

export type MetricValueInput = {
  description?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Float']>,
};

export type Milestone = {
   __typename: 'Milestone',
  amount?: Maybe<Scalars['Decimal']>,
  approved?: Maybe<Scalars['Boolean']>,
  approver?: Maybe<User>,
  completed?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  datePaid?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  manager?: Maybe<User>,
  payPeriod?: Maybe<PayPeriod>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MilestoneInput = {
  amount?: Maybe<Scalars['Decimal']>,
  approved?: Maybe<Scalars['Boolean']>,
  completed?: Maybe<Scalars['Boolean']>,
  datePaid?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
};

export type Milestoneparent = {
   __typename: 'Milestoneparent',
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverables: Array<Deliverable>,
  id: Scalars['ID'],
  plan: Plan,
  rank: Scalars['Int'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MilestoneparentInput = {
  planId?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type MonthlyPayment = {
   __typename: 'MonthlyPayment',
  amount?: Maybe<Scalars['Decimal']>,
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['Date']>,
  employee?: Maybe<Employee>,
  id: Scalars['ID'],
  paidOn?: Maybe<Scalars['Date']>,
  timesheets?: Maybe<Array<Maybe<Timesheet>>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MonthlyPaymentInput = {
  amount?: Maybe<Scalars['Decimal']>,
  category?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  employeeId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  paidOn?: Maybe<Scalars['Date']>,
};

export type Note = {
   __typename: 'Note',
  topic?: Maybe<Topic>,
  user?: Maybe<User>,
  feature?: Maybe<Feature>,
  noteUserNotifications?: Maybe<Array<Maybe<NoteUserNotification>>>,
  hidden?: Maybe<Scalars['Boolean']>,
  notifiedUsers?: Maybe<Array<Maybe<User>>>,
  contactType?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['Boolean']>,
  contact?: Maybe<Contact>,
  physicalAddress?: Maybe<PhysicalAddress>,
  notifyTl?: Maybe<Scalars['Boolean']>,
  community?: Maybe<Community>,
  attachmentUrl?: Maybe<Scalars['String']>,
  deviceId?: Maybe<Scalars['ID']>,
  employee?: Maybe<Employee>,
  source?: Maybe<Scalars['String']>,
  attachment?: Maybe<ArcAttachment>,
  device?: Maybe<Device>,
  campaign?: Maybe<Campaign>,
  updater?: Maybe<User>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  notifyPm?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  tasks?: Maybe<Array<Maybe<Task>>>,
  itemType?: Maybe<Scalars['String']>,
  humanInteraction?: Maybe<Scalars['Boolean']>,
  timesheet?: Maybe<Timesheet>,
  notifiedUsersHash?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  project?: Maybe<Project>,
  notableType?: Maybe<Scalars['String']>,
  attachmentThumbUrl?: Maybe<Scalars['String']>,
  itemDate?: Maybe<Scalars['Date']>,
  notableId?: Maybe<Scalars['Int']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type NoteInput = {
  attachment?: Maybe<Scalars['Upload']>,
  bypassEmail?: Maybe<Scalars['Boolean']>,
  campaignId?: Maybe<Scalars['ID']>,
  communityId?: Maybe<Scalars['ID']>,
  contactId?: Maybe<Scalars['ID']>,
  contactType?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  deviceId?: Maybe<Scalars['ID']>,
  employeeId?: Maybe<Scalars['ID']>,
  featureId?: Maybe<Scalars['ID']>,
  hidden?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  itemType?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['Boolean']>,
  notifiedUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  notifyPm?: Maybe<Scalars['Boolean']>,
  notifyTl?: Maybe<Scalars['Boolean']>,
  physicalAddressId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  source?: Maybe<Scalars['String']>,
  tasks?: Maybe<Array<Maybe<TaskInput>>>,
  topicId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type NoteUserNotification = {
   __typename: 'NoteUserNotification',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  note?: Maybe<Note>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type Office = {
   __typename: 'Office',
  address?: Maybe<Scalars['String']>,
  closedOn?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  location: Scalars['String'],
  openedOn: Scalars['Date'],
  physical?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type OfficeInput = {
  address?: Maybe<Scalars['String']>,
  closedOn?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  location?: Maybe<Scalars['String']>,
  openedOn?: Maybe<Scalars['Date']>,
  physical?: Maybe<Scalars['Boolean']>,
};

export type Payment = {
   __typename: 'Payment',
  adjuster?: Maybe<Scalars['String']>,
  amount: Scalars['Decimal'],
  appliedPayments?: Maybe<Array<Maybe<AppliedPayment>>>,
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  checkDate: Scalars['Date'],
  checkNumber?: Maybe<Scalars['String']>,
  claimNumber?: Maybe<Scalars['String']>,
  claimant?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['Date']>,
  deposit?: Maybe<Deposit>,
  depositDate: Scalars['Date'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  insured?: Maybe<Scalars['String']>,
  invoice?: Maybe<Invoice>,
  lossDate?: Maybe<Scalars['Date']>,
  payor?: Maybe<Scalars['String']>,
  policyNumber?: Maybe<Scalars['String']>,
  project: Project,
  retainer?: Maybe<Retainer>,
  share?: Maybe<Scalars['String']>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  writeoff?: Maybe<Scalars['Boolean']>,
};

export type PaymentAutocomplete = {
   __typename: 'PaymentAutocomplete',
  adjuster?: Maybe<Array<Maybe<Scalars['String']>>>,
  claimNumber?: Maybe<Array<Maybe<Scalars['String']>>>,
  claimant?: Maybe<Array<Maybe<Scalars['String']>>>,
  payor?: Maybe<Array<Maybe<Scalars['String']>>>,
  policyNumber?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PaymentInput = {
  adjuster?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Decimal']>,
  appliedPayments?: Maybe<Array<Maybe<AppliedPaymentInput>>>,
  attachment?: Maybe<Scalars['Upload']>,
  checkDate?: Maybe<Scalars['Date']>,
  checkNumber?: Maybe<Scalars['String']>,
  claimNumber?: Maybe<Scalars['String']>,
  claimant?: Maybe<Scalars['String']>,
  depositDate?: Maybe<Scalars['Date']>,
  depositId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  insured?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['ID']>,
  lossDate?: Maybe<Scalars['Date']>,
  payor?: Maybe<Scalars['String']>,
  policyNumber?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  retainerId?: Maybe<Scalars['ID']>,
  share?: Maybe<Scalars['String']>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  writeoff?: Maybe<Scalars['Boolean']>,
};

export type PayPeriod = {
   __typename: 'PayPeriod',
  checkDate: Scalars['Date'],
  endDate: Scalars['Date'],
  id: Scalars['ID'],
  manager?: Maybe<User>,
  milestones: Array<Milestone>,
  payPeriodLines: Array<PayPeriodLine>,
  processed?: Maybe<Scalars['Boolean']>,
  processedAt?: Maybe<Scalars['DateTime']>,
  startDate: Scalars['Date'],
};

export type PayPeriodLine = {
   __typename: 'PayPeriodLine',
  employee: Employee,
  incentive: Scalars['Decimal'],
  milestones: Scalars['Decimal'],
  otHours: Scalars['Decimal'],
  pay: Scalars['Decimal'],
  regularHours: Scalars['Decimal'],
  salary: Salary,
};

export type PeerReview = {
   __typename: 'PeerReview',
  attachment?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  feedback?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  report?: Maybe<Report>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type PeerReviewInput = {
  attachment?: Maybe<Scalars['Upload']>,
  feedback?: Maybe<Scalars['String']>,
  itemDate?: Maybe<Scalars['String']>,
  reportId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Photo = {
   __typename: 'Photo',
  addresses: Array<Address>,
  createdAt?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['Date']>,
  elements: Array<Element>,
  fieldNote?: Maybe<Scalars['String']>,
  finalAnnotation?: Maybe<Scalars['String']>,
  fullImage: Scalars['String'],
  id: Scalars['ID'],
  image?: Maybe<ArcAttachment>,
  imageNumber: Scalars['Int'],
  imageUrl: Scalars['String'],
  issues: Array<Issue>,
  keyPhoto?: Maybe<Scalars['Boolean']>,
  keyPhotoDescription?: Maybe<Scalars['String']>,
  locations: Array<Location>,
  nextPhoto?: Maybe<Photo>,
  photoLinks: Array<PhotoLink>,
  photoset: Photoset,
  players: Array<Player>,
  previousPhoto?: Maybe<Photo>,
  project: Project,
  revisedAnnotation?: Maybe<Scalars['String']>,
  smallImage: Scalars['String'],
  testLocations: Array<TestLocation>,
  thumbImage: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PhotoInput = {
  date?: Maybe<Scalars['String']>,
  fieldNote?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  image?: Maybe<Scalars['Upload']>,
  imageNumber?: Maybe<Scalars['Int']>,
  keyPhoto?: Maybe<Scalars['Boolean']>,
  keyPhotoDescription?: Maybe<Scalars['String']>,
  photoLinks?: Maybe<Array<Maybe<PhotoLinkInput>>>,
  photosetId?: Maybe<Scalars['ID']>,
  revisedAnnotation?: Maybe<Scalars['String']>,
};

export type PhotoLink = {
   __typename: 'PhotoLink',
  address?: Maybe<Address>,
  addressId?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  element?: Maybe<Element>,
  elementId?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  issue?: Maybe<Issue>,
  issueId?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Location>,
  locationId?: Maybe<Scalars['ID']>,
  photo?: Maybe<Photo>,
  photoId?: Maybe<Scalars['ID']>,
  player?: Maybe<Player>,
  playerId?: Maybe<Scalars['ID']>,
  testLocation?: Maybe<TestLocation>,
  testLocationId?: Maybe<Scalars['ID']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PhotoLinkInput = {
  addressId?: Maybe<Scalars['ID']>,
  delete?: Maybe<Scalars['Boolean']>,
  elementId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  issueId?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  locationId?: Maybe<Scalars['ID']>,
  photoId?: Maybe<Scalars['ID']>,
  playerId?: Maybe<Scalars['ID']>,
  testLocationId?: Maybe<Scalars['ID']>,
};

export type PhotoResult = {
   __typename: 'PhotoResult',
  count: Scalars['Int'],
  filteredCount: Scalars['Int'],
  photos: Array<Photo>,
};

export type PhotoSearchFilters = {
  addressIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  elementIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id?: Maybe<Scalars['ID']>,
  issueIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  keyPhotos?: Maybe<Scalars['Boolean']>,
  locationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  matchAll?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  parties?: Maybe<Array<Maybe<Scalars['String']>>>,
  playerIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  project?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  testLocationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type Photoset = {
   __typename: 'Photoset',
  complete?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['DateTime'],
  day?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  dispatch?: Maybe<Dispatch>,
  endDate?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  inspectionDate?: Maybe<Scalars['Date']>,
  keyPhotoCount: Scalars['Int'],
  legacyReports: Array<Report>,
  nextPhotoToAnnotate?: Maybe<Photo>,
  party?: Maybe<Scalars['String']>,
  pfcs: Scalars['Boolean'],
  photos: Array<Photo>,
  photosCount: Scalars['Int'],
  project: Project,
  reports: Array<Report>,
  source?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
  summary?: Maybe<Scalars['Quill']>,
  updatedAt: Scalars['DateTime'],
  user?: Maybe<User>,
};

export type PhotosetInput = {
  complete?: Maybe<Scalars['Boolean']>,
  day?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  dispatchId?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['String']>,
  expertId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  inspectionDate?: Maybe<Scalars['String']>,
  party?: Maybe<Scalars['String']>,
  pfcs?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  source?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['Quill']>,
};

export type PhysicalAddress = {
   __typename: 'PhysicalAddress',
  city?: Maybe<Scalars['String']>,
  community?: Maybe<Community>,
  country?: Maybe<Scalars['String']>,
  county?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  googleData?: Maybe<Scalars['Quill']>,
  googleFormatted?: Maybe<Scalars['String']>,
  googleId?: Maybe<Scalars['String']>,
  googleMultipleMatches?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  latitude?: Maybe<Scalars['Decimal']>,
  legacyCity?: Maybe<Scalars['String']>,
  legacyState?: Maybe<Scalars['String']>,
  legacyStreet?: Maybe<Scalars['String']>,
  legacyZip?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['Decimal']>,
  northeastLatitude?: Maybe<Scalars['Decimal']>,
  northeastLongitude?: Maybe<Scalars['Decimal']>,
  notes: Array<Note>,
  number?: Maybe<Scalars['String']>,
  premise?: Maybe<Scalars['String']>,
  residences: Array<Residence>,
  southwestLatitude?: Maybe<Scalars['Decimal']>,
  southwestLongitude?: Maybe<Scalars['Decimal']>,
  state?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  unitType?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  zip?: Maybe<Scalars['String']>,
};

export type PhysicalAddressInput = {
  city?: Maybe<Scalars['String']>,
  communityId?: Maybe<Scalars['ID']>,
  country?: Maybe<Scalars['String']>,
  county?: Maybe<Scalars['String']>,
  googleData?: Maybe<Scalars['Quill']>,
  googleFormatted?: Maybe<Scalars['String']>,
  googleId?: Maybe<Scalars['String']>,
  googleMultipleMatches?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  latitude?: Maybe<Scalars['Decimal']>,
  legacyCity?: Maybe<Scalars['String']>,
  legacyState?: Maybe<Scalars['String']>,
  legacyStreet?: Maybe<Scalars['String']>,
  legacyZip?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['Decimal']>,
  northeastLatitude?: Maybe<Scalars['Decimal']>,
  northeastLongitude?: Maybe<Scalars['Decimal']>,
  number?: Maybe<Scalars['String']>,
  premise?: Maybe<Scalars['String']>,
  southwestLatitude?: Maybe<Scalars['Decimal']>,
  southwestLongitude?: Maybe<Scalars['Decimal']>,
  state?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  unitType?: Maybe<Scalars['String']>,
  zip?: Maybe<Scalars['String']>,
};

export type Pile = {
   __typename: 'Pile',
  createdAt: Scalars['DateTime'],
  date: Scalars['Date'],
  id: Scalars['ID'],
  name: Scalars['String'],
  project: Project,
  sourceFiles: Array<SourceFile>,
  status: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type PileInput = {
  date?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type Plan = {
   __typename: 'Plan',
  amount: Scalars['Decimal'],
  billedTotal?: Maybe<Scalars['Decimal']>,
  costs: Array<DeliverableCost>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverables: Array<Deliverable>,
  expensesInvoiced?: Maybe<Scalars['Decimal']>,
  expensesPending?: Maybe<Scalars['Decimal']>,
  id: Scalars['ID'],
  milestoneparents: Array<Milestoneparent>,
  objective?: Maybe<Scalars['String']>,
  pendingTotal?: Maybe<Scalars['Decimal']>,
  planStatuses: Array<PlanStatus>,
  planType: PlanType,
  project: Project,
  uncategorizedInvoiced?: Maybe<Scalars['Decimal']>,
  uncategorizedNc?: Maybe<Scalars['Decimal']>,
  uncategorizedPending?: Maybe<Scalars['Decimal']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlanInput = {
  id?: Maybe<Scalars['ID']>,
  objective?: Maybe<Scalars['String']>,
  planTypeId?: Maybe<Scalars['ID']>,
};

export type PlanSection = {
   __typename: 'PlanSection',
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverableMenuItems: Array<DeliverableMenuItem>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  planType?: Maybe<PlanType>,
  position?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlanSectionInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  planTypeId?: Maybe<Scalars['ID']>,
};

export type PlanStatus = {
   __typename: 'PlanStatus',
  amount?: Maybe<Scalars['Decimal']>,
  attachment?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  date?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  notes?: Maybe<Scalars['String']>,
  plan?: Maybe<Plan>,
  status?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlanStatusInput = {
  amount?: Maybe<Scalars['Decimal']>,
  attachment?: Maybe<Scalars['Upload']>,
  date?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  planId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
};

export type PlanType = {
   __typename: 'PlanType',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  objective?: Maybe<Scalars['String']>,
  planSections: Array<PlanSection>,
  plans: Array<Plan>,
  proposalIntro?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlanTypeInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type Player = {
   __typename: 'Player',
  bpaLinks?: Maybe<Array<Maybe<BpaLink>>>,
  company?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  key?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  otherKeyPhotoCount?: Maybe<Scalars['Int']>,
  otherPhotoCount?: Maybe<Scalars['Int']>,
  pfcsKeyPhotoCount?: Maybe<Scalars['Int']>,
  pfcsPhotoCount?: Maybe<Scalars['Int']>,
  photoLinks?: Maybe<Array<Maybe<PhotoLink>>>,
  photos?: Maybe<Array<Maybe<Photo>>>,
  playerGroup?: Maybe<PlayerGroup>,
  project?: Maybe<Project>,
  role?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlayerGroup = {
   __typename: 'PlayerGroup',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  players: Array<Player>,
  position?: Maybe<Scalars['Int']>,
  project?: Maybe<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlayerGroupInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
};

export type PlayerInput = {
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  company?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  playerGroupId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  role?: Maybe<Scalars['String']>,
};

export type Project = {
   __typename: 'Project',
  recentHours?: Maybe<Scalars['Decimal']>,
  office: Office,
  budget?: Maybe<Scalars['Decimal']>,
  planUpdatedOn?: Maybe<Scalars['Date']>,
  addressFields: Array<Array<Scalars['String']>>,
  deliverableLevelsOnInvoices?: Maybe<Scalars['Boolean']>,
  testLocationsCount?: Maybe<Scalars['Int']>,
  mainPhotoId?: Maybe<Scalars['ID']>,
  interviews: Array<Interview>,
  trade?: Maybe<Scalars['String']>,
  issueFields: Array<Array<Scalars['String']>>,
  fieldInspection?: Maybe<Scalars['String']>,
  rate?: Maybe<Scalars['String']>,
  totalRefunds?: Maybe<Scalars['Decimal']>,
  deliverables: Array<Deliverable>,
  status: Scalars['String'],
  invoiceNote?: Maybe<Scalars['String']>,
  dispatches: Array<Dispatch>,
  yearBuilt?: Maybe<Scalars['String']>,
  requireAttachmentsOnInvoices?: Maybe<Scalars['Boolean']>,
  area?: Maybe<Scalars['String']>,
  issues: Array<Issue>,
  technicalSummaryUpdater?: Maybe<User>,
  prioritizeInvoices?: Maybe<Scalars['Boolean']>,
  closedBy?: Maybe<User>,
  address?: Maybe<Scalars['String']>,
  coExperts?: Maybe<Scalars['String']>,
  dispatchesCount?: Maybe<Scalars['Int']>,
  totalPayments?: Maybe<Scalars['Decimal']>,
  invoicelines: Array<Invoiceline>,
  shareOneMinuteSummary?: Maybe<Scalars['Boolean']>,
  startDate?: Maybe<Scalars['Date']>,
  elementFields: Array<Array<Scalars['String']>>,
  sourceUserId?: Maybe<Scalars['ID']>,
  documentsCount?: Maybe<Scalars['Int']>,
  addresses: Array<Address>,
  plans?: Maybe<Scalars['String']>,
  mdHoldNotes?: Maybe<Scalars['String']>,
  oneMinuteSummaryUpdatedAt?: Maybe<Scalars['DateTime']>,
  infoImages: Array<InfoImage>,
  maximumBillingPositionId?: Maybe<Scalars['ID']>,
  taggings: Array<Tagging>,
  invoiceHideHours?: Maybe<Scalars['Boolean']>,
  totalInvoicesWithPending?: Maybe<Scalars['Decimal']>,
  retainers: Array<Retainer>,
  parentOpportunityId?: Maybe<Scalars['ID']>,
  opportunityOwner?: Maybe<User>,
  represent?: Maybe<Scalars['String']>,
  checklists: Array<Checklist>,
  playerGroups: Array<PlayerGroup>,
  photos: Array<Photo>,
  otherExperts?: Maybe<Scalars['String']>,
  oneMinuteSummaryUpdater?: Maybe<User>,
  playersCount?: Maybe<Scalars['Int']>,
  refunds: Array<Refund>,
  oneMinuteSummary?: Maybe<Scalars['String']>,
  plan: Plan,
  opportunityStartDate?: Maybe<Scalars['Date']>,
  parentOpportunity?: Maybe<Project>,
  piles: Array<Pile>,
  billingSummary?: Maybe<Scalars['String']>,
  maximumBillingPosition?: Maybe<BillingPosition>,
  invoiceLevels?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  elementAnalysisMode?: Maybe<Scalars['String']>,
  totalDue?: Maybe<Scalars['Decimal']>,
  technicalLead?: Maybe<User>,
  state?: Maybe<Scalars['String']>,
  elementsCount?: Maybe<Scalars['Int']>,
  hideHoursAndDollarsOnInvoices?: Maybe<Scalars['Boolean']>,
  lineItemInvoices?: Maybe<Scalars['Boolean']>,
  pc?: Maybe<User>,
  appliedPayments: Array<AppliedPayment>,
  opportunityCloseDate?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  issuesCount: Scalars['Int'],
  lists: Array<List>,
  projectUsers: Array<ProjectUser>,
  technicalSummaryUpdatedAt?: Maybe<Scalars['DateTime']>,
  timesheets: Array<Timesheet>,
  locationFields: Array<Array<Scalars['String']>>,
  documents: Array<Document>,
  locationAnalysisMode?: Maybe<Scalars['String']>,
  issueAnalysisMode?: Maybe<Scalars['String']>,
  timelines: Array<Timeline>,
  invoiceBillingPeriods?: Maybe<Scalars['Boolean']>,
  timelineFields: Array<Array<Scalars['String']>>,
  secured?: Maybe<Scalars['Boolean']>,
  county?: Maybe<Scalars['String']>,
  testLocations: Array<TestLocation>,
  salesStageId: Scalars['ID'],
  entity?: Maybe<Scalars['String']>,
  topics: Array<Topic>,
  opportunityOwnerId?: Maybe<Scalars['ID']>,
  feeSchedule?: Maybe<FeeSchedule>,
  createdAt?: Maybe<Scalars['DateTime']>,
  salesProjections: Array<SalesProjection>,
  childOpportunities: Array<Project>,
  sourceOf?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  invoiceHideCosts?: Maybe<Scalars['Boolean']>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  reports: Array<Report>,
  projectType: Scalars['String'],
  guesstimate?: Maybe<Scalars['Decimal']>,
  deadBox?: Maybe<Scalars['String']>,
  addressesCount: Scalars['Int'],
  arSummary?: Maybe<Scalars['String']>,
  elements: Array<Element>,
  mdDate?: Maybe<Scalars['Date']>,
  shareL2Timeline?: Maybe<Scalars['Boolean']>,
  referralContact?: Maybe<Contact>,
  tags: Array<Tag>,
  totalInvoices?: Maybe<Scalars['Decimal']>,
  locations: Array<Location>,
  inspectionSummary?: Maybe<Scalars['Quill']>,
  shareL1Timeline?: Maybe<Scalars['Boolean']>,
  pm?: Maybe<User>,
  players: Array<Player>,
  aging?: Maybe<ProjectAging>,
  kanbanCards: Array<KanbanCard>,
  invoices: Array<Invoice>,
  photosets: Array<Photoset>,
  projectDesc?: Maybe<Scalars['String']>,
  closedById?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  memberships: Array<Membership>,
  salesStage: SalesStage,
  sourceUser?: Maybe<User>,
  officeId: Scalars['ID'],
  opportunityId?: Maybe<Scalars['ID']>,
  locationsCount?: Maybe<Scalars['Int']>,
  payments: Array<Payment>,
  unbilledTotal?: Maybe<Scalars['Decimal']>,
  shareOnClientAccess?: Maybe<Scalars['Boolean']>,
  interviewsCount?: Maybe<Scalars['Int']>,
  technicalSummary?: Maybe<Scalars['String']>,
  l1Timeline?: Maybe<Scalars['String']>,
  number: Scalars['String'],
  clientAccessHideAr?: Maybe<Scalars['Boolean']>,
  strategicTargetCompany?: Maybe<Contact>,
  notes: Array<Note>,
  messages: Array<Message>,
  reportCards: Array<ReportCard>,
  closedOn?: Maybe<Scalars['Date']>,
  mainPhotoType?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  entityNumber?: Maybe<Scalars['String']>,
  issueSort: Scalars['String'],
};


export type ProjectTimesheetsArgs = {
  status?: Maybe<Scalars['String']>
};


export type ProjectNotesArgs = {
  itemType?: Maybe<Scalars['String']>
};

export type ProjectAging = {
   __typename: 'ProjectAging',
  /** 0-30 */
  agingA?: Maybe<Scalars['Decimal']>,
  /** 31-60 */
  agingB?: Maybe<Scalars['Decimal']>,
  /** 61-90 */
  agingC?: Maybe<Scalars['Decimal']>,
  /** 91-180 */
  agingD?: Maybe<Scalars['Decimal']>,
  /** 181-365 */
  agingE?: Maybe<Scalars['Decimal']>,
  /** Over 1 Year */
  agingF?: Maybe<Scalars['Decimal']>,
};

export type ProjectInput = {
  issueSort?: Maybe<Scalars['String']>,
  entityNumber?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  mainPhotoType?: Maybe<Scalars['String']>,
  closedOn?: Maybe<Scalars['String']>,
  clientAccessHideAr?: Maybe<Scalars['Boolean']>,
  number?: Maybe<Scalars['String']>,
  l1Timeline?: Maybe<Scalars['String']>,
  technicalSummary?: Maybe<Scalars['String']>,
  shareOnClientAccess?: Maybe<Scalars['Boolean']>,
  opportunityId?: Maybe<Scalars['ID']>,
  officeId?: Maybe<Scalars['ID']>,
  memberships?: Maybe<Array<Maybe<MembershipInput>>>,
  id?: Maybe<Scalars['ID']>,
  closedById?: Maybe<Scalars['ID']>,
  projectDesc?: Maybe<Scalars['String']>,
  shareL1Timeline?: Maybe<Scalars['Boolean']>,
  inspectionSummary?: Maybe<Scalars['Quill']>,
  shareL2Timeline?: Maybe<Scalars['Boolean']>,
  mdDate?: Maybe<Scalars['String']>,
  arSummary?: Maybe<Scalars['String']>,
  deadBox?: Maybe<Scalars['String']>,
  guesstimate?: Maybe<Scalars['Decimal']>,
  projectType?: Maybe<Scalars['String']>,
  oneMinuteSummaryUpdaterId?: Maybe<Scalars['ID']>,
  syncedToQbw?: Maybe<Scalars['Boolean']>,
  invoiceHideCosts?: Maybe<Scalars['Boolean']>,
  sourceOf?: Maybe<Scalars['String']>,
  opportunityOwnerId?: Maybe<Scalars['ID']>,
  entity?: Maybe<Scalars['String']>,
  salesStageId?: Maybe<Scalars['ID']>,
  county?: Maybe<Scalars['String']>,
  secured?: Maybe<Scalars['Boolean']>,
  timelineFields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  invoiceBillingPeriods?: Maybe<Scalars['Boolean']>,
  issueAnalysisMode?: Maybe<Scalars['String']>,
  locationAnalysisMode?: Maybe<Scalars['String']>,
  locationFields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  technicalSummaryUpdatedAt?: Maybe<Scalars['String']>,
  projectUsers?: Maybe<Array<Maybe<ProjectUserInput>>>,
  opportunityCloseDate?: Maybe<Scalars['String']>,
  lineItemInvoices?: Maybe<Scalars['Boolean']>,
  referralContactId?: Maybe<Scalars['ID']>,
  hideHoursAndDollarsOnInvoices?: Maybe<Scalars['Boolean']>,
  state?: Maybe<Scalars['String']>,
  elementAnalysisMode?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  invoiceLevels?: Maybe<Scalars['String']>,
  billingSummary?: Maybe<Scalars['String']>,
  pcId?: Maybe<Scalars['ID']>,
  creatorId?: Maybe<Scalars['ID']>,
  opportunityStartDate?: Maybe<Scalars['String']>,
  oneMinuteSummary?: Maybe<Scalars['String']>,
  otherExperts?: Maybe<Scalars['String']>,
  represent?: Maybe<Scalars['String']>,
  parentOpportunityId?: Maybe<Scalars['ID']>,
  invoiceHideHours?: Maybe<Scalars['Boolean']>,
  maximumBillingPositionId?: Maybe<Scalars['ID']>,
  oneMinuteSummaryUpdatedAt?: Maybe<Scalars['String']>,
  mdHoldNotes?: Maybe<Scalars['String']>,
  plans?: Maybe<Scalars['String']>,
  technicalleadId?: Maybe<Scalars['ID']>,
  sourceUserId?: Maybe<Scalars['ID']>,
  elementFields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  startDate?: Maybe<Scalars['String']>,
  shareOneMinuteSummary?: Maybe<Scalars['Boolean']>,
  technicalSummaryUpdaterId?: Maybe<Scalars['ID']>,
  coExperts?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  prioritizeInvoices?: Maybe<Scalars['Boolean']>,
  area?: Maybe<Scalars['String']>,
  requireAttachmentsOnInvoices?: Maybe<Scalars['Boolean']>,
  yearBuilt?: Maybe<Scalars['String']>,
  invoiceNote?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  pmId?: Maybe<Scalars['ID']>,
  rate?: Maybe<Scalars['String']>,
  fieldInspection?: Maybe<Scalars['String']>,
  issueFields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  trade?: Maybe<Scalars['String']>,
  mainPhotoId?: Maybe<Scalars['ID']>,
  strategicTargetCompanyId?: Maybe<Scalars['ID']>,
  deliverableLevelsOnInvoices?: Maybe<Scalars['Boolean']>,
  addressFields?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  planUpdatedOn?: Maybe<Scalars['String']>,
  budget?: Maybe<Scalars['String']>,
};

export type ProjectUser = {
   __typename: 'ProjectUser',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  project: Project,
  role: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: User,
  userId: Scalars['ID'],
};

export type ProjectUserInput = {
  delete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  role?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type PtoPlan = {
   __typename: 'PtoPlan',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  tierOne: Scalars['Int'],
  tierThree: Scalars['Int'],
  tierTwo: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};



export type Receivables = {
   __typename: 'Receivables',
  projects: Array<Project>,
  title: Scalars['String'],
};

export type ReceivablesFilter = {
  flags?: Maybe<Array<Maybe<Scalars['String']>>>,
  query?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type Refund = {
   __typename: 'Refund',
  amount: Scalars['Float'],
  appliedPayments: Array<AppliedPayment>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  itemDate: Scalars['Date'],
  payer: Scalars['String'],
  paymentMethod: Scalars['String'],
  project: Project,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user: User,
};

export type RefundInput = {
  amount?: Maybe<Scalars['Decimal']>,
  appliedPayments?: Maybe<Array<Maybe<AppliedPaymentInput>>>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  payer?: Maybe<Scalars['String']>,
  paymentMethod?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Relationship = {
   __typename: 'Relationship',
  active: Scalars['Boolean'],
  contact: Contact,
  endDate?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  key?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  parent: Contact,
  role: Scalars['String'],
  strategicTargetRole?: Maybe<Scalars['String']>,
};

export type RelationshipInput = {
  active?: Maybe<Scalars['Boolean']>,
  contactId?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  role?: Maybe<Scalars['String']>,
  strategicTargetRole?: Maybe<Scalars['String']>,
};

export type Report = {
   __typename: 'Report',
  headerTitle?: Maybe<Scalars['String']>,
  user: User,
  reportPhotoGroups: Array<ReportPhotoGroup>,
  publishedOn?: Maybe<Scalars['Date']>,
  note?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  includeToc?: Maybe<Scalars['Boolean']>,
  intro?: Maybe<Scalars['Quill']>,
  legacy?: Maybe<Scalars['Boolean']>,
  reportSources: Array<ReportSource>,
  autoGenerateToc?: Maybe<Scalars['Boolean']>,
  omitCover?: Maybe<Scalars['Boolean']>,
  reportSections: Array<ReportSection>,
  staticRecipient?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  retainer?: Maybe<Scalars['Decimal']>,
  userId: Scalars['ID'],
  reportType: Scalars['String'],
  feeSchedule?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  noteInFooter?: Maybe<Scalars['Boolean']>,
  customToc?: Maybe<Scalars['Quill']>,
  includeNote?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  membershipId?: Maybe<Scalars['ID']>,
  internalDescription?: Maybe<Scalars['String']>,
  membership?: Maybe<Membership>,
  peerReviews: Array<PeerReview>,
  id: Scalars['ID'],
  project: Project,
  agreement?: Maybe<Agreement>,
  clientName?: Maybe<Scalars['String']>,
  includePageNumbers?: Maybe<Scalars['Boolean']>,
};

export type ReportCard = {
   __typename: 'ReportCard',
  attachment?: Maybe<ArcAttachment>,
  average?: Maybe<Scalars['Float']>,
  commentUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  comments?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  possibleScore?: Maybe<Scalars['Float']>,
  project?: Maybe<Project>,
  reportCardType?: Maybe<ReportCardType>,
  score?: Maybe<Scalars['Float']>,
  scores?: Maybe<Array<Maybe<Scalars['Int']>>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<User>,
};

export type ReportCardInput = {
  attachment?: Maybe<Scalars['Upload']>,
  commentUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  comments?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  reportCardTypeId?: Maybe<Scalars['ID']>,
  scores?: Maybe<Array<Maybe<Scalars['Int']>>>,
  userId?: Maybe<Scalars['ID']>,
};

export type ReportCardQuestion = {
   __typename: 'ReportCardQuestion',
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  maxScore?: Maybe<Scalars['Int']>,
  rank?: Maybe<Scalars['Int']>,
  reportCardType?: Maybe<ReportCardType>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportCardQuestionInput = {
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  maxScore?: Maybe<Scalars['IntegerInput']>,
  reportCardTypeId?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type ReportCardType = {
   __typename: 'ReportCardType',
  active?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  reportCardQuestions: Array<ReportCardQuestion>,
  reportCards: Array<ReportCard>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportCardTypeInput = {
  active?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type ReportDocument = {
   __typename: 'ReportDocument',
  createdAt?: Maybe<Scalars['DateTime']>,
  document: Document,
  id: Scalars['ID'],
  rank: Scalars['Int'],
  reportSection: ReportSection,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportInput = {
  agreementId?: Maybe<Scalars['ID']>,
  autoGenerateToc?: Maybe<Scalars['Boolean']>,
  clientName?: Maybe<Scalars['String']>,
  customToc?: Maybe<Scalars['Quill']>,
  feeSchedule?: Maybe<Scalars['Boolean']>,
  headerTitle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  includeNote?: Maybe<Scalars['Boolean']>,
  includePageNumbers?: Maybe<Scalars['Boolean']>,
  includeToc?: Maybe<Scalars['Boolean']>,
  internalDescription?: Maybe<Scalars['String']>,
  intro?: Maybe<Scalars['Quill']>,
  membershipId?: Maybe<Scalars['ID']>,
  note?: Maybe<Scalars['String']>,
  noteInFooter?: Maybe<Scalars['Boolean']>,
  omitCover?: Maybe<Scalars['Boolean']>,
  publishedOn?: Maybe<Scalars['Date']>,
  reportSections?: Maybe<Array<Maybe<ReportSectionInput>>>,
  reportType?: Maybe<Scalars['String']>,
  retainer?: Maybe<Scalars['Decimal']>,
  staticRecipient?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type ReportPhotoGroup = {
   __typename: 'ReportPhotoGroup',
  address?: Maybe<Address>,
  createdAt?: Maybe<Scalars['DateTime']>,
  element?: Maybe<Element>,
  id: Scalars['ID'],
  issue?: Maybe<Issue>,
  location?: Maybe<Location>,
  photoset?: Maybe<Photoset>,
  player?: Maybe<Player>,
  rank?: Maybe<Scalars['Int']>,
  reportSection?: Maybe<ReportSection>,
  testLocation?: Maybe<TestLocation>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportPhotoGroupInput = {
  addressId?: Maybe<Scalars['ID']>,
  elementId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  issueId?: Maybe<Scalars['ID']>,
  locationId?: Maybe<Scalars['ID']>,
  photosetId?: Maybe<Scalars['ID']>,
  playerId?: Maybe<Scalars['ID']>,
  reportSectionId?: Maybe<Scalars['ID']>,
  testLocationId?: Maybe<Scalars['ID']>,
};

export type ReportSection = {
   __typename: 'ReportSection',
  addresses: Array<Address>,
  analysisFields?: Maybe<Scalars['String']>,
  analysisPhotos?: Maybe<Scalars['Boolean']>,
  analysisSource?: Maybe<Scalars['String']>,
  autoGenerateAttachmentList?: Maybe<Scalars['Boolean']>,
  body?: Maybe<Scalars['String']>,
  bodyJson?: Maybe<Scalars['Quill']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  customAttachmentList?: Maybe<Scalars['Quill']>,
  documents: Array<Document>,
  heading?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageReferences: Array<ImageReference>,
  includeAddressesOnPhotos?: Maybe<Scalars['Boolean']>,
  includeAnalysisList?: Maybe<Scalars['Boolean']>,
  includeAttachmentList?: Maybe<Scalars['Boolean']>,
  infoImages: Array<InfoImage>,
  issueSort?: Maybe<Scalars['String']>,
  locations: Array<Location>,
  newPage?: Maybe<Scalars['Boolean']>,
  photoSort?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>,
  report?: Maybe<Report>,
  reportDocuments: Array<ReportDocument>,
  reportPhotoGroups: Array<ReportPhotoGroup>,
  sectionType?: Maybe<Scalars['String']>,
  showHeading?: Maybe<Scalars['Boolean']>,
  skipEmptyFields?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportSectionElement = {
   __typename: 'ReportSectionElement',
  createdAt?: Maybe<Scalars['DateTime']>,
  element: Element,
  id: Scalars['ID'],
  reportSection: ReportSection,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportSectionInput = {
  addressIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  analysisFields?: Maybe<Scalars['String']>,
  analysisPhotos?: Maybe<Scalars['Boolean']>,
  analysisSource?: Maybe<Scalars['String']>,
  autoGenerateAttachmentList?: Maybe<Scalars['Boolean']>,
  bodyJson?: Maybe<Scalars['Quill']>,
  customAttachmentList?: Maybe<Scalars['Quill']>,
  heading?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  includeAddressesOnPhotos?: Maybe<Scalars['Boolean']>,
  includeAnalysisList?: Maybe<Scalars['Boolean']>,
  includeAttachmentList?: Maybe<Scalars['Boolean']>,
  issueSort?: Maybe<Scalars['String']>,
  locationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  newPage?: Maybe<Scalars['Boolean']>,
  photoSort?: Maybe<Scalars['String']>,
  reportId?: Maybe<Scalars['ID']>,
  sectionType?: Maybe<Scalars['String']>,
  showHeading?: Maybe<Scalars['Boolean']>,
  skipEmptyFields?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
};

export type ReportSectionIssue = {
   __typename: 'ReportSectionIssue',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  issue: Issue,
  reportSection: ReportSection,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportSectionLocation = {
   __typename: 'ReportSectionLocation',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  location: Location,
  reportSection: ReportSection,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportSource = {
   __typename: 'ReportSource',
  id: Scalars['ID'],
  photoset?: Maybe<Photoset>,
  report?: Maybe<Report>,
};

export type ReportType = {
   __typename: 'ReportType',
  agreement?: Maybe<Agreement>,
  createdAt?: Maybe<Scalars['DateTime']>,
  feeSchedule?: Maybe<Scalars['Boolean']>,
  headerTitle?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  includeNote?: Maybe<Scalars['Boolean']>,
  includeToc?: Maybe<Scalars['Boolean']>,
  intro?: Maybe<Scalars['Quill']>,
  name: Scalars['String'],
  omitCover?: Maybe<Scalars['Boolean']>,
  overhead?: Maybe<Scalars['Boolean']>,
  rank?: Maybe<Scalars['Int']>,
  regarding?: Maybe<Scalars['String']>,
  reportTypeSections: Array<ReportTypeSection>,
  sku?: Maybe<Sku>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportTypeInput = {
  agreementId?: Maybe<Scalars['ID']>,
  feeSchedule?: Maybe<Scalars['Boolean']>,
  headerTitle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  includeNote?: Maybe<Scalars['Boolean']>,
  includeToc?: Maybe<Scalars['Boolean']>,
  intro?: Maybe<Scalars['Quill']>,
  name?: Maybe<Scalars['String']>,
  omitCover?: Maybe<Scalars['Boolean']>,
  overhead?: Maybe<Scalars['Boolean']>,
  regarding?: Maybe<Scalars['String']>,
  skuId?: Maybe<Scalars['ID']>,
};

export type ReportTypeSection = {
   __typename: 'ReportTypeSection',
  createdAt?: Maybe<Scalars['DateTime']>,
  heading?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  includeAnalysisList?: Maybe<Scalars['Boolean']>,
  includeAttachmentList?: Maybe<Scalars['Boolean']>,
  prefill?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>,
  reportType?: Maybe<ReportType>,
  sectionType?: Maybe<Scalars['String']>,
  showHeading?: Maybe<Scalars['Boolean']>,
  template?: Maybe<Scalars['Quill']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReportTypeSectionInput = {
  heading?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  includeAnalysisList?: Maybe<Scalars['Boolean']>,
  includeAttachmentList?: Maybe<Scalars['Boolean']>,
  prefill?: Maybe<Scalars['String']>,
  reportTypeId?: Maybe<Scalars['ID']>,
  sectionType?: Maybe<Scalars['String']>,
  showHeading?: Maybe<Scalars['Boolean']>,
  template?: Maybe<Scalars['Quill']>,
  title?: Maybe<Scalars['String']>,
};

export type Residence = {
   __typename: 'Residence',
  category?: Maybe<Scalars['String']>,
  contact?: Maybe<Contact>,
  endDate?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  physicalAddress?: Maybe<PhysicalAddress>,
  primary?: Maybe<Scalars['Boolean']>,
  residence?: Maybe<Residence>,
};


export type ResidenceContactArgs = {
  includeInactive?: Maybe<Scalars['Boolean']>
};

export type ResidenceInput = {
  category?: Maybe<Scalars['String']>,
  contactId?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  physicalAddressId?: Maybe<Scalars['ID']>,
  primary?: Maybe<Scalars['Boolean']>,
};

export type Retainer = {
   __typename: 'Retainer',
  amount: Scalars['Decimal'],
  checkDate: Scalars['Date'],
  checkNumber: Scalars['String'],
  createdAt: Scalars['DateTime'],
  deposit: Deposit,
  depositDate: Scalars['Date'],
  id: Scalars['ID'],
  payments: Array<Payment>,
  payor: Scalars['String'],
  project: Project,
  referenceNumber?: Maybe<Scalars['String']>,
  synced: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
};

export type RetainerInput = {
  amount?: Maybe<Scalars['Decimal']>,
  checkDate?: Maybe<Scalars['String']>,
  checkNumber?: Maybe<Scalars['String']>,
  depositDate?: Maybe<Scalars['String']>,
  depositId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  payor?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  referenceNumber?: Maybe<Scalars['String']>,
  synced?: Maybe<Scalars['Boolean']>,
};

export type RootMutationType = {
   __typename: 'RootMutationType',
  addCampaignsContact?: Maybe<CampaignsContact>,
  deleteList?: Maybe<List>,
  deleteKpiSection?: Maybe<KpiSection>,
  saveTopic?: Maybe<Topic>,
  deleteTask?: Maybe<Task>,
  addReportSectionLocations: Array<ReportSectionLocation>,
  sortMetric?: Maybe<Array<Maybe<Metric>>>,
  deletePhotoset?: Maybe<Photoset>,
  saveDocument?: Maybe<Array<Maybe<Document>>>,
  addReportSectionElements: Array<ReportSectionElement>,
  sendTenTouchTask?: Maybe<TenTouchTask>,
  saveListItem?: Maybe<ListItem>,
  completePhotoset?: Maybe<Photoset>,
  saveTrainingRequirement?: Maybe<TrainingRequirement>,
  deleteBillableGoal?: Maybe<BillableGoal>,
  deleteReport?: Maybe<Report>,
  saveKpiSection?: Maybe<KpiSection>,
  deletePlayer?: Maybe<Player>,
  deleteRefund?: Maybe<Refund>,
  movePlayerGroup?: Maybe<Array<Maybe<PlayerGroup>>>,
  saveAffiliationType?: Maybe<AffiliationType>,
  deleteMailing?: Maybe<Mailing>,
  rotatePhoto?: Maybe<Photo>,
  createMetric?: Maybe<Metric>,
  savePlayer?: Maybe<Player>,
  saveReportType?: Maybe<ReportType>,
  saveTraining?: Maybe<Training>,
  copyInvoicesToFiles?: Maybe<Array<Maybe<Document>>>,
  saveOffice?: Maybe<Office>,
  saveChecklistItem?: Maybe<ChecklistItem>,
  updateMetric?: Maybe<Metric>,
  saveMembership?: Maybe<Membership>,
  deleteAttachedFile?: Maybe<AttachedFile>,
  loginAccessUser?: Maybe<AccessUserSession>,
  saveIssue?: Maybe<Issue>,
  saveTestLocation?: Maybe<TestLocation>,
  deleteEmployeeReview?: Maybe<EmployeeReview>,
  saveTag?: Maybe<Tag>,
  saveRelationship?: Maybe<Relationship>,
  batchTag?: Maybe<Scalars['Int']>,
  addReportSectionIssues: Array<ReportSectionIssue>,
  sortChecklistItem?: Maybe<Array<Maybe<ChecklistItem>>>,
  deleteDeliverable?: Maybe<Deliverable>,
  saveReportCardType?: Maybe<ReportCardType>,
  noChargeInvoicelines?: Maybe<Array<Maybe<Invoiceline>>>,
  saveTenTouch?: Maybe<Array<Maybe<TenTouch>>>,
  savePhoto?: Maybe<Photo>,
  splitInvoiceline: Invoiceline,
  deleteIssue?: Maybe<Issue>,
  savePlanType?: Maybe<PlanType>,
  markContactOutdated?: Maybe<Contact>,
  savePlanSection?: Maybe<PlanSection>,
  moveImageReference?: Maybe<Array<Maybe<ImageReference>>>,
  saveTemplate?: Maybe<Template>,
  saveInvoice?: Maybe<Invoice>,
  saveBillableGoal?: Maybe<BillableGoal>,
  copyDocumentFromLibrary?: Maybe<Document>,
  savePhysicalAddress?: Maybe<PhysicalAddress>,
  syncCampaignToMailchimp?: Maybe<Scalars['String']>,
  saveFeeSchedule?: Maybe<FeeSchedule>,
  deleteInfoImage?: Maybe<InfoImage>,
  sortAttachment?: Maybe<Array<Maybe<Attachment>>>,
  deleteMessage?: Maybe<Message>,
  setGoal?: Maybe<Goal>,
  deleteMetric?: Maybe<Metric>,
  saveInfoImage?: Maybe<InfoImage>,
  deleteCalendar?: Maybe<Calendar>,
  moveReportTypeSection?: Maybe<Array<Maybe<ReportTypeSection>>>,
  updateInvoiceline?: Maybe<Invoiceline>,
  saveTenTouchTemplate?: Maybe<TenTouchTemplate>,
  saveNote?: Maybe<Note>,
  deleteDispatch?: Maybe<Dispatch>,
  deleteReportTypeSection?: Maybe<ReportTypeSection>,
  deletePayment?: Maybe<Payment>,
  deleteTagging?: Maybe<Tagging>,
  deleteTrainingCompletion?: Maybe<TrainingCompletion>,
  saveTenTouchTask?: Maybe<TenTouchTask>,
  saveInterview?: Maybe<Interview>,
  setNewAccessUserPassword?: Maybe<AccessUserSession>,
  saveKpi?: Maybe<Kpi>,
  deleteAffiliationType?: Maybe<AffiliationType>,
  sortKanbanCard?: Maybe<Array<Maybe<KanbanCard>>>,
  saveSeminar?: Maybe<Seminar>,
  deleteTenTouchTemplate?: Maybe<TenTouchTemplate>,
  batchUpdatePhotos?: Maybe<Array<Maybe<Photo>>>,
  deleteDocumentReference?: Maybe<DocumentReference>,
  deletePeerReview?: Maybe<PeerReview>,
  createDeliverable?: Maybe<Deliverable>,
  saveReportTypeSection?: Maybe<ReportTypeSection>,
  deleteMilestoneparent?: Maybe<Milestoneparent>,
  saveAttachedFile?: Maybe<Array<Maybe<AttachedFile>>>,
  updateTimesheet?: Maybe<Timesheet>,
  saveMilestone?: Maybe<Milestone>,
  delayInvoicelines?: Maybe<Invoice>,
  seminarImport?: Maybe<SeminarImportResults>,
  deleteReportSectionElement?: Maybe<ReportSectionElement>,
  deleteFeeSchedule?: Maybe<FeeSchedule>,
  saveRefund?: Maybe<Refund>,
  batchUpdateTestLocations?: Maybe<Array<Maybe<TestLocation>>>,
  saveSku?: Maybe<Sku>,
  saveTrainingCompletion?: Maybe<TrainingCompletion>,
  chargeCard?: Maybe<Scalars['String']>,
  saveCalendar?: Maybe<Calendar>,
  deletePlayerGroup?: Maybe<PlayerGroup>,
  sortInfoImage?: Maybe<Array<Maybe<InfoImage>>>,
  generateInvoice?: Maybe<Invoice>,
  saveList?: Maybe<List>,
  deleteMembership?: Maybe<Membership>,
  sortDeliverable?: Maybe<Array<Maybe<Deliverable>>>,
  mailInvoices?: Maybe<Array<Maybe<Invoice>>>,
  saveEmployee?: Maybe<Employee>,
  deleteChecklistItem?: Maybe<ChecklistItem>,
  updatePlan?: Maybe<Plan>,
  approveMilestone?: Maybe<Milestone>,
  saveElement?: Maybe<Element>,
  saveReportCardQuestion?: Maybe<ReportCardQuestion>,
  batchUpdateDocuments?: Maybe<Array<Maybe<Document>>>,
  saveEmployeeReview?: Maybe<EmployeeReview>,
  saveTimesheet?: Maybe<Timesheet>,
  saveMailing?: Maybe<Mailing>,
  toggleCampaignContactField?: Maybe<CampaignsContact>,
  deleteTraining?: Maybe<Training>,
  downloadPhotos?: Maybe<Scalars['String']>,
  confirmSeparateContacts?: Maybe<Array<Maybe<Contact>>>,
  saveTimeline?: Maybe<Timeline>,
  deleteListItem?: Maybe<ListItem>,
  saveAttachment?: Maybe<Attachment>,
  saveSeminarAttendee?: Maybe<SeminarAttendee>,
  approveExpenses?: Maybe<MonthlyPayment>,
  applyDeliverableToInvoicelines?: Maybe<Array<Maybe<Invoiceline>>>,
  deletePlanStatus?: Maybe<PlanStatus>,
  createReport?: Maybe<Report>,
  deleteReportPhotoGroup?: Maybe<ReportPhotoGroup>,
  deleteAttachment?: Maybe<Attachment>,
  savePhotoLink?: Maybe<PhotoLink>,
  deleteKanbanCard?: Maybe<KanbanCard>,
  saveTrainingAssignment?: Maybe<TrainingAssignment>,
  saveReportDocuments?: Maybe<Array<Maybe<ReportDocument>>>,
  copyReport?: Maybe<Report>,
  deleteEmployee?: Maybe<Employee>,
  deleteElement?: Maybe<Element>,
  deleteSalary?: Maybe<Salary>,
  deleteTrainingAssignment?: Maybe<TrainingAssignment>,
  saveMonthlyPayment?: Maybe<MonthlyPayment>,
  deleteAgreement?: Maybe<Agreement>,
  moveDeliverable?: Maybe<Array<Maybe<Deliverable>>>,
  savePile?: Maybe<Pile>,
  deleteImageReference?: Maybe<ImageReference>,
  login?: Maybe<UserSession>,
  generateAllInvoices?: Maybe<Scalars['String']>,
  updateDeliverable?: Maybe<Deliverable>,
  moveReportSection?: Maybe<Array<Maybe<ReportSection>>>,
  deleteReportSection?: Maybe<ReportSection>,
  deleteTrainingPlan?: Maybe<TrainingPlan>,
  createMilestoneparent?: Maybe<Milestoneparent>,
  saveBillableGoalReduction?: Maybe<BillableGoalReduction>,
  saveGoal?: Maybe<Goal>,
  createPeerReview?: Maybe<PeerReview>,
  deleteReportDocument?: Maybe<ReportDocument>,
  saveKpiSet?: Maybe<KpiSet>,
  deleteBillableGoalReduction?: Maybe<BillableGoalReduction>,
  saveDispatch?: Maybe<Dispatch>,
  submitPayPeriod?: Maybe<PayPeriod>,
  updateMilestoneparent?: Maybe<Milestoneparent>,
  saveContactImport?: Maybe<ContactImport>,
  moveDocumentReference?: Maybe<Array<Maybe<DocumentReference>>>,
  saveTask?: Maybe<Task>,
  moveKpiType?: Maybe<Array<Maybe<KpiType>>>,
  moveMilestoneparent?: Maybe<Array<Maybe<Milestoneparent>>>,
  saveCommunity?: Maybe<Community>,
  addContactsToGroup?: Maybe<AddContactsToGroupResults>,
  updateInvoicedDeliverable?: Maybe<InvoicedDeliverable>,
  saveSeminarAttachment?: Maybe<SeminarAttachment>,
  saveContact?: Maybe<Contact>,
  createAttachment?: Maybe<Attachment>,
  saveDevice: Device,
  deleteInterview?: Maybe<Interview>,
  createDocumentReferences?: Maybe<Array<Maybe<DocumentReference>>>,
  moveKpiSection?: Maybe<Array<Maybe<KpiSection>>>,
  saveMessage?: Maybe<Message>,
  deleteReportSectionIssue?: Maybe<ReportSectionIssue>,
  deleteSkuSample?: Maybe<SkuSample>,
  saveSourceFile?: Maybe<SourceFile>,
  deleteRetainer?: Maybe<Retainer>,
  deleteSeminarAttachment?: Maybe<SeminarAttachment>,
  deleteResidence?: Maybe<Residence>,
  saveDeposit?: Maybe<Deposit>,
  saveSkuSample?: Maybe<SkuSample>,
  saveProject?: Maybe<Project>,
  seminarSync?: Maybe<Seminar>,
  deleteTimesheet?: Maybe<Timesheet>,
  deleteCampaignsContact?: Maybe<CampaignsContact>,
  addElementsFromMenu?: Maybe<Array<Maybe<Element>>>,
  saveImageReferences?: Maybe<Array<Maybe<ImageReference>>>,
  saveAgreement?: Maybe<Agreement>,
  copyPreviousPhoto?: Maybe<Photo>,
  saveDeliverableMenuItem?: Maybe<DeliverableMenuItem>,
  deleteReportSectionLocation?: Maybe<ReportSectionLocation>,
  deleteTimeline?: Maybe<Timeline>,
  deleteAddress?: Maybe<Address>,
  deleteDocument?: Maybe<Document>,
  createDefaultPlayerGroups?: Maybe<Array<Maybe<PlayerGroup>>>,
  deleteNote?: Maybe<Note>,
  saveImageReference?: Maybe<ImageReference>,
  deleteReportCardQuestion?: Maybe<ReportCardQuestion>,
  saveReport?: Maybe<Report>,
  submitInvoice?: Maybe<Invoice>,
  saveBillingRate?: Maybe<BillingRate>,
  saveCampaign?: Maybe<Campaign>,
  saveReportPhotoGroup?: Maybe<ReportPhotoGroup>,
  deleteDeposit?: Maybe<Deposit>,
  savePlanStatus?: Maybe<PlanStatus>,
  saveChecklist?: Maybe<Checklist>,
  activateAccessUser?: Maybe<AccessUserSession>,
  saveLocation?: Maybe<Location>,
  savePhotoset?: Maybe<Photoset>,
  deleteKpiType?: Maybe<KpiType>,
  deleteSeminarAttendee?: Maybe<SeminarAttendee>,
  deleteMilestone?: Maybe<Milestone>,
  saveSalary?: Maybe<Salary>,
  deleteTrainingRequirement?: Maybe<TrainingRequirement>,
  createDeliverables?: Maybe<Array<Maybe<Deliverable>>>,
  deleteReportCard?: Maybe<ReportCard>,
  savePayment?: Maybe<Payment>,
  deleteDevice?: Maybe<Device>,
  sortTrainingRequirement?: Maybe<Array<Maybe<TrainingRequirement>>>,
  createTagging?: Maybe<Tagging>,
  saveReportCard?: Maybe<ReportCard>,
  savePlayerGroup?: Maybe<PlayerGroup>,
  saveKpiType?: Maybe<KpiType>,
  sendMailingTestEmail?: Maybe<Mailing>,
  createSurveys?: Maybe<Array<Maybe<Survey>>>,
  viewAccessPublication?: Maybe<AccessPublication>,
  deleteTestLocation?: Maybe<TestLocation>,
  saveFeature?: Maybe<Feature>,
  saveReportSection?: Maybe<ReportSection>,
  deleteInvoiceline?: Maybe<Invoiceline>,
  saveCreditMemo?: Maybe<CreditMemo>,
  saveUser?: Maybe<User>,
  saveKanbanCard?: Maybe<KanbanCard>,
  sendMailing?: Maybe<Mailing>,
  copyCampaignContacts: CopyCampaignContactsResult,
  moveReportDocument?: Maybe<Array<Maybe<ReportDocument>>>,
  moveReportCardQuestion?: Maybe<Array<Maybe<ReportCardQuestion>>>,
  deleteChecklist?: Maybe<Checklist>,
  resetAccessUserPassword?: Maybe<Scalars['String']>,
  createStandardLocations?: Maybe<Project>,
  submitTimesheet?: Maybe<Array<Maybe<Timesheet>>>,
  markContactInactive?: Maybe<Contact>,
  saveTenTouchItem?: Maybe<TenTouchItem>,
  saveTrainingPlan?: Maybe<TrainingPlan>,
  createAccessUser?: Maybe<AccessUser>,
  sendSeminarTestEmail?: Maybe<Seminar>,
  sortTrainingAssignment?: Maybe<Array<Maybe<TrainingAssignment>>>,
  deleteLocation?: Maybe<Location>,
  dnbInvoices?: Maybe<Array<Maybe<Invoice>>>,
  mergeContacts: Contact,
  saveRetainer?: Maybe<Retainer>,
  moveListItem?: Maybe<Array<Maybe<ListItem>>>,
  sendSeminar?: Maybe<Seminar>,
  saveAddress?: Maybe<Address>,
  createTimesheet?: Maybe<Timesheet>,
};


export type RootMutationTypeAddCampaignsContactArgs = {
  campaignId: Scalars['ID'],
  contactId: Scalars['ID']
};


export type RootMutationTypeDeleteListArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteKpiSectionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveTopicArgs = {
  input: TopicInput
};


export type RootMutationTypeDeleteTaskArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeAddReportSectionLocationsArgs = {
  locationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootMutationTypeSortMetricArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeDeletePhotosetArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveDocumentArgs = {
  input: DocumentInput
};


export type RootMutationTypeAddReportSectionElementsArgs = {
  elementIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootMutationTypeSendTenTouchTaskArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveListItemArgs = {
  input: ListItemInput
};


export type RootMutationTypeCompletePhotosetArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveTrainingRequirementArgs = {
  input: TrainingRequirementInput
};


export type RootMutationTypeDeleteBillableGoalArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteReportArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveKpiSectionArgs = {
  input: KpiSectionInput
};


export type RootMutationTypeDeletePlayerArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRefundArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeMovePlayerGroupArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSaveAffiliationTypeArgs = {
  input: AffiliationTypeInput
};


export type RootMutationTypeDeleteMailingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeRotatePhotoArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateMetricArgs = {
  input?: Maybe<MetricInput>
};


export type RootMutationTypeSavePlayerArgs = {
  input: PlayerInput
};


export type RootMutationTypeSaveReportTypeArgs = {
  input?: Maybe<ReportTypeInput>
};


export type RootMutationTypeSaveTrainingArgs = {
  input: TrainingInput
};


export type RootMutationTypeCopyInvoicesToFilesArgs = {
  projectId: Scalars['ID']
};


export type RootMutationTypeSaveOfficeArgs = {
  input: OfficeInput
};


export type RootMutationTypeSaveChecklistItemArgs = {
  input: ChecklistItemInput
};


export type RootMutationTypeUpdateMetricArgs = {
  id?: Maybe<Scalars['ID']>,
  input?: Maybe<MetricInput>
};


export type RootMutationTypeSaveMembershipArgs = {
  input?: Maybe<MembershipInput>
};


export type RootMutationTypeDeleteAttachedFileArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeLoginAccessUserArgs = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeSaveIssueArgs = {
  input: IssueInput
};


export type RootMutationTypeSaveTestLocationArgs = {
  input: TestLocationInput
};


export type RootMutationTypeDeleteEmployeeReviewArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveTagArgs = {
  input: TagInput
};


export type RootMutationTypeSaveRelationshipArgs = {
  input: RelationshipInput
};


export type RootMutationTypeBatchTagArgs = {
  input: BatchTagInput
};


export type RootMutationTypeAddReportSectionIssuesArgs = {
  issueIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootMutationTypeSortChecklistItemArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeDeleteDeliverableArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveReportCardTypeArgs = {
  input: ReportCardTypeInput
};


export type RootMutationTypeNoChargeInvoicelinesArgs = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type RootMutationTypeSaveTenTouchArgs = {
  input: TenTouchInput
};


export type RootMutationTypeSavePhotoArgs = {
  input: PhotoInput
};


export type RootMutationTypeSplitInvoicelineArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteIssueArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSavePlanTypeArgs = {
  input: PlanTypeInput
};


export type RootMutationTypeMarkContactOutdatedArgs = {
  id: Scalars['ID'],
  userId: Scalars['ID']
};


export type RootMutationTypeSavePlanSectionArgs = {
  input: PlanSectionInput
};


export type RootMutationTypeMoveImageReferenceArgs = {
  input: ImageReferenceInput
};


export type RootMutationTypeSaveTemplateArgs = {
  input: TemplateInput
};


export type RootMutationTypeSaveInvoiceArgs = {
  input?: Maybe<InvoiceInput>
};


export type RootMutationTypeSaveBillableGoalArgs = {
  input: BillableGoalInput
};


export type RootMutationTypeCopyDocumentFromLibraryArgs = {
  documentId: Scalars['ID'],
  projectId: Scalars['ID']
};


export type RootMutationTypeSavePhysicalAddressArgs = {
  input: PhysicalAddressInput
};


export type RootMutationTypeSyncCampaignToMailchimpArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveFeeScheduleArgs = {
  input: FeeScheduleInput
};


export type RootMutationTypeDeleteInfoImageArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSortAttachmentArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeDeleteMessageArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSetGoalArgs = {
  input?: Maybe<GoalInput>
};


export type RootMutationTypeDeleteMetricArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeSaveInfoImageArgs = {
  input: InfoImageInput
};


export type RootMutationTypeDeleteCalendarArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeMoveReportTypeSectionArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeUpdateInvoicelineArgs = {
  id?: Maybe<Scalars['ID']>,
  input?: Maybe<InvoicelineInput>
};


export type RootMutationTypeSaveTenTouchTemplateArgs = {
  input: TenTouchTemplateInput
};


export type RootMutationTypeSaveNoteArgs = {
  input: NoteInput
};


export type RootMutationTypeDeleteDispatchArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeleteReportTypeSectionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeletePaymentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTaggingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTrainingCompletionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveTenTouchTaskArgs = {
  input: TenTouchTaskInput
};


export type RootMutationTypeSaveInterviewArgs = {
  input: InterviewInput
};


export type RootMutationTypeSetNewAccessUserPasswordArgs = {
  password: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeSaveKpiArgs = {
  input: KpiInput
};


export type RootMutationTypeDeleteAffiliationTypeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSortKanbanCardArgs = {
  column: Scalars['String'],
  id: Scalars['ID'],
  position?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>
};


export type RootMutationTypeSaveSeminarArgs = {
  input: SeminarInput
};


export type RootMutationTypeDeleteTenTouchTemplateArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeBatchUpdatePhotosArgs = {
  input: BatchPhotoInput
};


export type RootMutationTypeDeleteDocumentReferenceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeletePeerReviewArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeCreateDeliverableArgs = {
  input: DeliverableInput
};


export type RootMutationTypeSaveReportTypeSectionArgs = {
  input?: Maybe<ReportTypeSectionInput>
};


export type RootMutationTypeDeleteMilestoneparentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveAttachedFileArgs = {
  input: AttachedFileInput
};


export type RootMutationTypeUpdateTimesheetArgs = {
  id: Scalars['ID'],
  input?: Maybe<TimesheetInput>
};


export type RootMutationTypeSaveMilestoneArgs = {
  input: MilestoneInput
};


export type RootMutationTypeDelayInvoicelinesArgs = {
  invoiceId?: Maybe<Scalars['ID']>,
  invoicelineIds: Array<Maybe<Scalars['ID']>>
};


export type RootMutationTypeSeminarImportArgs = {
  id: Scalars['ID'],
  token: Scalars['String']
};


export type RootMutationTypeDeleteReportSectionElementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeleteFeeScheduleArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveRefundArgs = {
  input: RefundInput
};


export type RootMutationTypeBatchUpdateTestLocationsArgs = {
  ids: Array<Scalars['ID']>,
  input: TestLocationInput,
  remove?: Maybe<Scalars['Boolean']>
};


export type RootMutationTypeSaveSkuArgs = {
  input: SkuInput
};


export type RootMutationTypeSaveTrainingCompletionArgs = {
  input: TrainingCompletionInput
};


export type RootMutationTypeChargeCardArgs = {
  amountCents: Scalars['Int'],
  projectNumber: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeSaveCalendarArgs = {
  input: CalendarInput
};


export type RootMutationTypeDeletePlayerGroupArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSortInfoImageArgs = {
  input: InfoImageInput
};


export type RootMutationTypeGenerateInvoiceArgs = {
  invoicelineIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  number: Scalars['String'],
  timesheetIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootMutationTypeSaveListArgs = {
  input: ListInput
};


export type RootMutationTypeDeleteMembershipArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSortDeliverableArgs = {
  id: Scalars['ID'],
  milestoneparentId: Scalars['ID'],
  position: Scalars['Int']
};


export type RootMutationTypeMailInvoicesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type RootMutationTypeSaveEmployeeArgs = {
  input: EmployeeInput
};


export type RootMutationTypeDeleteChecklistItemArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdatePlanArgs = {
  id: Scalars['ID'],
  input: PlanInput
};


export type RootMutationTypeApproveMilestoneArgs = {
  id: Scalars['ID'],
  managerId: Scalars['ID']
};


export type RootMutationTypeSaveElementArgs = {
  input: ElementInput
};


export type RootMutationTypeSaveReportCardQuestionArgs = {
  input: ReportCardQuestionInput
};


export type RootMutationTypeBatchUpdateDocumentsArgs = {
  ids: Array<Scalars['ID']>,
  input: DocumentInput
};


export type RootMutationTypeSaveEmployeeReviewArgs = {
  input: EmployeeReviewInput
};


export type RootMutationTypeSaveTimesheetArgs = {
  input?: Maybe<TimesheetInput>
};


export type RootMutationTypeSaveMailingArgs = {
  input: MailingInput
};


export type RootMutationTypeToggleCampaignContactFieldArgs = {
  field: Scalars['String'],
  id: Scalars['ID'],
  value: Scalars['Boolean']
};


export type RootMutationTypeDeleteTrainingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDownloadPhotosArgs = {
  input: DownloadPhotosInput
};


export type RootMutationTypeConfirmSeparateContactsArgs = {
  contactId: Scalars['ID'],
  otherId: Scalars['ID']
};


export type RootMutationTypeSaveTimelineArgs = {
  input: TimelineInput
};


export type RootMutationTypeDeleteListItemArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveAttachmentArgs = {
  input: AttachmentInput
};


export type RootMutationTypeSaveSeminarAttendeeArgs = {
  input: SeminarAttendeeInput
};


export type RootMutationTypeApproveExpensesArgs = {
  employeeId: Scalars['ID'],
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  month: Scalars['String']
};


export type RootMutationTypeApplyDeliverableToInvoicelinesArgs = {
  billedPosition?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  invoicelineIds: Array<Maybe<Scalars['ID']>>
};


export type RootMutationTypeDeletePlanStatusArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateReportArgs = {
  input?: Maybe<CreateReportInput>
};


export type RootMutationTypeDeleteReportPhotoGroupArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteAttachmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSavePhotoLinkArgs = {
  input: PhotoLinkInput
};


export type RootMutationTypeDeleteKanbanCardArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveTrainingAssignmentArgs = {
  input: TrainingAssignmentInput
};


export type RootMutationTypeSaveReportDocumentsArgs = {
  ids: Array<Scalars['ID']>,
  reportSectionId: Scalars['ID']
};


export type RootMutationTypeCopyReportArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteEmployeeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteElementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSalaryArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTrainingAssignmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveMonthlyPaymentArgs = {
  input?: Maybe<MonthlyPaymentInput>
};


export type RootMutationTypeDeleteAgreementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeMoveDeliverableArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSavePileArgs = {
  input: PileInput
};


export type RootMutationTypeDeleteImageReferenceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeLoginArgs = {
  token: Scalars['String']
};


export type RootMutationTypeGenerateAllInvoicesArgs = {
  month?: Maybe<Scalars['String']>
};


export type RootMutationTypeUpdateDeliverableArgs = {
  id: Scalars['ID'],
  input: DeliverableInput
};


export type RootMutationTypeMoveReportSectionArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeDeleteReportSectionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTrainingPlanArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateMilestoneparentArgs = {
  input: MilestoneparentInput
};


export type RootMutationTypeSaveBillableGoalReductionArgs = {
  input: BillableGoalReductionInput
};


export type RootMutationTypeSaveGoalArgs = {
  input?: Maybe<GoalInput>
};


export type RootMutationTypeCreatePeerReviewArgs = {
  input?: Maybe<PeerReviewInput>
};


export type RootMutationTypeDeleteReportDocumentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveKpiSetArgs = {
  input: KpiSetInput
};


export type RootMutationTypeDeleteBillableGoalReductionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveDispatchArgs = {
  input: DispatchInput
};


export type RootMutationTypeUpdateMilestoneparentArgs = {
  id: Scalars['ID'],
  input: MilestoneparentInput
};


export type RootMutationTypeSaveContactImportArgs = {
  input: ContactImportInput
};


export type RootMutationTypeMoveDocumentReferenceArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSaveTaskArgs = {
  input: TaskInput
};


export type RootMutationTypeMoveKpiTypeArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeMoveMilestoneparentArgs = {
  id: Scalars['ID'],
  position: Scalars['Int']
};


export type RootMutationTypeSaveCommunityArgs = {
  input: CommunityInput
};


export type RootMutationTypeAddContactsToGroupArgs = {
  campaignFields?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  contactId?: Maybe<Scalars['ID']>,
  filter?: Maybe<ContactSearchFilter>
};


export type RootMutationTypeUpdateInvoicedDeliverableArgs = {
  id?: Maybe<Scalars['ID']>,
  input?: Maybe<InvoicedDeliverableInput>
};


export type RootMutationTypeSaveSeminarAttachmentArgs = {
  input: SeminarAttachmentInput
};


export type RootMutationTypeSaveContactArgs = {
  input: ContactInput
};


export type RootMutationTypeCreateAttachmentArgs = {
  input?: Maybe<AttachmentInput>
};


export type RootMutationTypeSaveDeviceArgs = {
  input: DeviceInput
};


export type RootMutationTypeDeleteInterviewArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateDocumentReferencesArgs = {
  documentIds: Array<Maybe<Scalars['ID']>>,
  input: DocumentReferenceInput
};


export type RootMutationTypeMoveKpiSectionArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSaveMessageArgs = {
  input: MessageInput
};


export type RootMutationTypeDeleteReportSectionIssueArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeleteSkuSampleArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveSourceFileArgs = {
  input: SourceFileInput
};


export type RootMutationTypeDeleteRetainerArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSeminarAttachmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteResidenceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveDepositArgs = {
  input: DepositInput
};


export type RootMutationTypeSaveSkuSampleArgs = {
  input: SkuSampleInput
};


export type RootMutationTypeSaveProjectArgs = {
  input?: Maybe<ProjectInput>
};


export type RootMutationTypeSeminarSyncArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTimesheetArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeleteCampaignsContactArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeAddElementsFromMenuArgs = {
  elementIds: Array<Maybe<Scalars['ID']>>,
  projectId: Scalars['ID']
};


export type RootMutationTypeSaveImageReferencesArgs = {
  input: ImageReferencesInput
};


export type RootMutationTypeSaveAgreementArgs = {
  input: AgreementInput
};


export type RootMutationTypeCopyPreviousPhotoArgs = {
  id: Scalars['ID'],
  sourceId: Scalars['ID']
};


export type RootMutationTypeSaveDeliverableMenuItemArgs = {
  input: DeliverableMenuItemInput
};


export type RootMutationTypeDeleteReportSectionLocationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeDeleteTimelineArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteAddressArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteDocumentArgs = {
  id: Scalars['ID'],
  markAsKnown?: Maybe<Scalars['Boolean']>
};


export type RootMutationTypeCreateDefaultPlayerGroupsArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteNoteArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveImageReferenceArgs = {
  input: ImageReferenceInput
};


export type RootMutationTypeDeleteReportCardQuestionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveReportArgs = {
  input: ReportInput
};


export type RootMutationTypeSubmitInvoiceArgs = {
  id: Scalars['ID'],
  mode: Scalars['String']
};


export type RootMutationTypeSaveBillingRateArgs = {
  input: BillingRateInput
};


export type RootMutationTypeSaveCampaignArgs = {
  input: CampaignInput
};


export type RootMutationTypeSaveReportPhotoGroupArgs = {
  input: ReportPhotoGroupInput
};


export type RootMutationTypeDeleteDepositArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSavePlanStatusArgs = {
  input?: Maybe<PlanStatusInput>
};


export type RootMutationTypeSaveChecklistArgs = {
  input: ChecklistInput
};


export type RootMutationTypeActivateAccessUserArgs = {
  token: Scalars['String']
};


export type RootMutationTypeSaveLocationArgs = {
  input: LocationInput
};


export type RootMutationTypeSavePhotosetArgs = {
  input: PhotosetInput
};


export type RootMutationTypeDeleteKpiTypeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSeminarAttendeeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteMilestoneArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveSalaryArgs = {
  input: SalaryInput
};


export type RootMutationTypeDeleteTrainingRequirementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateDeliverablesArgs = {
  deliverableMenuItemIds: Array<Maybe<Scalars['ID']>>,
  planId: Scalars['ID']
};


export type RootMutationTypeDeleteReportCardArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSavePaymentArgs = {
  input: PaymentInput
};


export type RootMutationTypeDeleteDeviceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSortTrainingRequirementArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeCreateTaggingArgs = {
  input: TaggingInput
};


export type RootMutationTypeSaveReportCardArgs = {
  input: ReportCardInput
};


export type RootMutationTypeSavePlayerGroupArgs = {
  input: PlayerGroupInput
};


export type RootMutationTypeSaveKpiTypeArgs = {
  input: KpiTypeInput
};


export type RootMutationTypeSendMailingTestEmailArgs = {
  email: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeCreateSurveysArgs = {
  membershipIds: Array<Maybe<Scalars['ID']>>,
  projectId: Scalars['ID']
};


export type RootMutationTypeViewAccessPublicationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteTestLocationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveFeatureArgs = {
  input: FeatureInput
};


export type RootMutationTypeSaveReportSectionArgs = {
  input: ReportSectionInput
};


export type RootMutationTypeDeleteInvoicelineArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootMutationTypeSaveCreditMemoArgs = {
  input: CreditMemoInput
};


export type RootMutationTypeSaveUserArgs = {
  input: UserInput
};


export type RootMutationTypeSaveKanbanCardArgs = {
  input: KanbanCardInput
};


export type RootMutationTypeSendMailingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCopyCampaignContactsArgs = {
  id: Scalars['ID'],
  sourceId: Scalars['ID']
};


export type RootMutationTypeMoveReportDocumentArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeMoveReportCardQuestionArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeDeleteChecklistArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeResetAccessUserPasswordArgs = {
  login: Scalars['String']
};


export type RootMutationTypeCreateStandardLocationsArgs = {
  projectId: Scalars['ID']
};


export type RootMutationTypeSubmitTimesheetArgs = {
  login?: Maybe<Scalars['String']>,
  mode?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>
};


export type RootMutationTypeMarkContactInactiveArgs = {
  id: Scalars['ID'],
  reason: Scalars['String'],
  userId: Scalars['ID']
};


export type RootMutationTypeSaveTenTouchItemArgs = {
  input: TenTouchItemInput
};


export type RootMutationTypeSaveTrainingPlanArgs = {
  input: TrainingPlanInput
};


export type RootMutationTypeCreateAccessUserArgs = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeSendSeminarTestEmailArgs = {
  email: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSortTrainingAssignmentArgs = {
  input: TrainingAssignmentInput
};


export type RootMutationTypeDeleteLocationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDnbInvoicesArgs = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type RootMutationTypeMergeContactsArgs = {
  fieldsToCopy?: Maybe<Array<Maybe<Scalars['String']>>>,
  fieldsToMerge?: Maybe<Array<Maybe<Scalars['String']>>>,
  id: Scalars['ID'],
  mergeId: Scalars['ID'],
  residenceIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  userId: Scalars['ID']
};


export type RootMutationTypeSaveRetainerArgs = {
  input: RetainerInput
};


export type RootMutationTypeMoveListItemArgs = {
  direction: Scalars['String'],
  id: Scalars['ID']
};


export type RootMutationTypeSendSeminarArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeSaveAddressArgs = {
  input: AddressInput
};


export type RootMutationTypeCreateTimesheetArgs = {
  input?: Maybe<TimesheetInput>
};

export type RootQueryType = {
   __typename: 'RootQueryType',
  survey: Survey,
  creditMemo?: Maybe<CreditMemo>,
  office?: Maybe<Office>,
  topic: Topic,
  user: User,
  feature: Feature,
  photo: Photo,
  tenTouchTasks: Array<TenTouchTask>,
  accessUsers?: Maybe<Array<Maybe<AccessUser>>>,
  payment: Payment,
  asteriskCalls?: Maybe<Array<Maybe<AsteriskCall>>>,
  documentParties: Array<Scalars['String']>,
  sourceFile?: Maybe<SourceFile>,
  interviews?: Maybe<Array<Maybe<Interview>>>,
  milestone?: Maybe<Milestone>,
  tenTouch?: Maybe<TenTouch>,
  documentCategories: Array<DocumentCategory>,
  reportCardType?: Maybe<ReportCardType>,
  paymentAutocomplete?: Maybe<PaymentAutocomplete>,
  payPeriod?: Maybe<PayPeriod>,
  trainings: Array<Training>,
  billableGoalReduction?: Maybe<BillableGoalReduction>,
  photoSearch: PhotoResult,
  note: Note,
  listItem: ListItem,
  features: Array<Feature>,
  goals?: Maybe<Array<Maybe<Goal>>>,
  testLocation?: Maybe<TestLocation>,
  calendar?: Maybe<Calendar>,
  campaigns: Array<Campaign>,
  currentAccessUser?: Maybe<AccessUser>,
  ptoPlans: Array<PtoPlan>,
  interview?: Maybe<Interview>,
  issues: Array<Issue>,
  feeSchedules: Array<FeeSchedule>,
  training: Training,
  address?: Maybe<Address>,
  kpiSet: KpiSet,
  closedProjects: Array<Project>,
  invoicelines: Array<Invoiceline>,
  users: Array<User>,
  kpiSection?: Maybe<KpiSection>,
  contactImports: Array<ContactImport>,
  addresses: Array<Address>,
  surveys: Array<Survey>,
  contact: Contact,
  billableGoal?: Maybe<BillableGoal>,
  tenTouchTemplate: TenTouchTemplate,
  planSection?: Maybe<PlanSection>,
  affiliationTypes: Array<AffiliationType>,
  reportSection?: Maybe<ReportSection>,
  relationship?: Maybe<Relationship>,
  report: Report,
  offices: Array<Office>,
  deposit?: Maybe<Deposit>,
  physicalAddress?: Maybe<PhysicalAddress>,
  reportSectionElements: Array<ReportSectionElement>,
  billingRate?: Maybe<BillingRate>,
  sku: Sku,
  kpiType?: Maybe<KpiType>,
  conversionRates: Array<ConversionRate>,
  planTypes: Array<PlanType>,
  employeeReview?: Maybe<EmployeeReview>,
  employees: Array<Employee>,
  infoImage?: Maybe<InfoImage>,
  community?: Maybe<Community>,
  retainers: Array<Retainer>,
  salary?: Maybe<Salary>,
  employee: Employee,
  deposits: Array<Deposit>,
  trainingCategories: Array<TrainingCategory>,
  template?: Maybe<Template>,
  checklists?: Maybe<Array<Maybe<Checklist>>>,
  downloadContacts?: Maybe<Scalars['String']>,
  skus: Array<Sku>,
  playerGroups?: Maybe<Array<Maybe<PlayerGroup>>>,
  photos: Array<Photo>,
  refunds: Array<Refund>,
  tenTouchBatch?: Maybe<TenTouchBatch>,
  device: Device,
  seminars: Array<Seminar>,
  campaign: Campaign,
  contactImport: ContactImport,
  list: List,
  physicalAddresses?: Maybe<Array<Maybe<PhysicalAddress>>>,
  reportCard?: Maybe<ReportCard>,
  billingPositions: Array<BillingPosition>,
  commonbillingentries?: Maybe<Array<Maybe<Commonbillingentry>>>,
  retainer?: Maybe<Retainer>,
  timesheetStatus?: Maybe<TimesheetStatus>,
  timesheets: Array<Timesheet>,
  milestoneparents: Array<Milestoneparent>,
  documents: Array<Document>,
  reportType: ReportType,
  testLocations: Array<TestLocation>,
  dynamicMetrics: Array<DynamicMetric>,
  projectCounts: Array<DynamicMetric>,
  dispatch: Dispatch,
  topics?: Maybe<Array<Maybe<Topic>>>,
  salesMetrics: Array<SalesMetric>,
  editorTemplates: Array<EditorTemplate>,
  feeSchedule?: Maybe<FeeSchedule>,
  contacts: Array<Contact>,
  reportSectionIssues: Array<ReportSectionIssue>,
  trainingPlan?: Maybe<TrainingPlan>,
  tasks: Array<Task>,
  librarySearch: LibrarySearch,
  kpiSets: Array<KpiSet>,
  playerGroup?: Maybe<PlayerGroup>,
  legacyReports?: Maybe<Array<Maybe<Report>>>,
  timeline?: Maybe<Timeline>,
  contactSearch: ContactResults,
  planType: PlanType,
  player?: Maybe<Player>,
  reports?: Maybe<Array<Maybe<Report>>>,
  taskCounts: Array<DynamicMetric>,
  reportTypeSection?: Maybe<ReportTypeSection>,
  tag?: Maybe<Tag>,
  mailing: Mailing,
  timesheet: Timesheet,
  deliverableMenuItem?: Maybe<DeliverableMenuItem>,
  duplicateContacts: Array<DuplicateContactSet>,
  tenTouchTemplates: Array<TenTouchTemplate>,
  issue?: Maybe<Issue>,
  communities: Array<Community>,
  photoset: Photoset,
  calendars: Array<Calendar>,
  elements: Array<Element>,
  document: Document,
  companies: Array<Contact>,
  goal?: Maybe<Goal>,
  planStatus?: Maybe<PlanStatus>,
  tags: Array<Tag>,
  locations: Array<Location>,
  reportTypes: Array<ReportType>,
  skuSample?: Maybe<SkuSample>,
  reportCardTypes: Array<ReportCardType>,
  players?: Maybe<Array<Maybe<Player>>>,
  kanbanCards: Array<KanbanCard>,
  creditMemos: Array<CreditMemo>,
  affiliationType?: Maybe<AffiliationType>,
  invoices: Array<Invoice>,
  photosets: Array<Photoset>,
  agreements: Array<Agreement>,
  projects: Array<Project>,
  location?: Maybe<Location>,
  accessPublications: Array<AccessPublication>,
  memberships?: Maybe<Array<Maybe<Membership>>>,
  kpiTypes?: Maybe<Array<Maybe<KpiType>>>,
  monthlyPayment?: Maybe<MonthlyPayment>,
  project: Project,
  tenTouches: Array<TenTouch>,
  element?: Maybe<Element>,
  mailings: Array<Mailing>,
  refund?: Maybe<Refund>,
  currentUser?: Maybe<User>,
  payments: Array<Payment>,
  checklistItem?: Maybe<ChecklistItem>,
  invoice: Invoice,
  devices: Array<Device>,
  agreement?: Maybe<Agreement>,
  salesStages: Array<SalesStage>,
  seminar: Seminar,
  receivables: Receivables,
  pile: Pile,
  notes?: Maybe<Array<Maybe<Note>>>,
  trainingPlans: Array<TrainingPlan>,
  reportSectionLocations: Array<ReportSectionLocation>,
  checklist: Checklist,
  tenTouchItems: Array<TenTouchItem>,
  tenTouchItem?: Maybe<TenTouchItem>,
  kpis?: Maybe<Array<Maybe<Kpi>>>,
  templates: Array<Template>,
  metrics: Array<Metric>,
  reportCardQuestion?: Maybe<ReportCardQuestion>,
};


export type RootQueryTypeSurveyArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeCreditMemoArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeOfficeArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTopicArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeUserArgs = {
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>
};


export type RootQueryTypeFeatureArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePhotoArgs = {
  id?: Maybe<Scalars['ID']>,
  imageNumber?: Maybe<Scalars['ID']>,
  photosetNumber?: Maybe<Scalars['String']>,
  projectNumber?: Maybe<Scalars['String']>
};


export type RootQueryTypeTenTouchTasksArgs = {
  category?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  parentType?: Maybe<Scalars['String']>,
  scope?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


export type RootQueryTypePaymentArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeDocumentPartiesArgs = {
  projectNumber: Scalars['String']
};


export type RootQueryTypeSourceFileArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeInterviewsArgs = {
  template?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeMilestoneArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTenTouchArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReportCardTypeArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePaymentAutocompleteArgs = {
  number: Scalars['String']
};


export type RootQueryTypePayPeriodArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTrainingsArgs = {
  filter?: Maybe<Scalars['String']>
};


export type RootQueryTypeBillableGoalReductionArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePhotoSearchArgs = {
  filters: PhotoSearchFilters
};


export type RootQueryTypeNoteArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeListItemArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTestLocationArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeCalendarArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeCampaignsArgs = {
  filter?: Maybe<Scalars['String']>,
  includeId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeInterviewArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeIssuesArgs = {
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTrainingArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeAddressArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeKpiSetArgs = {
  globalSet?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>
};


export type RootQueryTypeClosedProjectsArgs = {
  month: Scalars['String']
};


export type RootQueryTypeInvoicelinesArgs = {
  billedDuringMonth?: Maybe<Scalars['Boolean']>,
  filter?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUsersArgs = {
  filter?: Maybe<Scalars['String']>,
  includeIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeKpiSectionArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeAddressesArgs = {
  filter?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  search?: Maybe<Scalars['String']>
};


export type RootQueryTypeSurveysArgs = {
  completed?: Maybe<Scalars['Boolean']>,
  template?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeContactArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeBillableGoalArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTenTouchTemplateArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePlanSectionArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReportSectionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRelationshipArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReportArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeDepositArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePhysicalAddressArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReportSectionElementsArgs = {
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeBillingRateArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeSkuArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeKpiTypeArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeEmployeeReviewArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeEmployeesArgs = {
  activeDuring?: Maybe<Scalars['String']>,
  activeWeek?: Maybe<Scalars['String']>,
  activeYear?: Maybe<Scalars['Int']>,
  future?: Maybe<Scalars['Boolean']>,
  managerId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>
};


export type RootQueryTypeInfoImageArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeCommunityArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeRetainersArgs = {
  filter?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>
};


export type RootQueryTypeSalaryArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeEmployeeArgs = {
  id?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
  userLogin?: Maybe<Scalars['String']>
};


export type RootQueryTypeDepositsArgs = {
  includeId?: Maybe<Scalars['ID']>,
  limit?: Maybe<Scalars['Int']>,
  month?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  synced?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeTemplateArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeChecklistsArgs = {
  category?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeDownloadContactsArgs = {
  filter: ContactSearchFilter,
  mode: Scalars['String']
};


export type RootQueryTypePlayerGroupsArgs = {
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypePhotosArgs = {
  addressId?: Maybe<Scalars['ID']>,
  elementId?: Maybe<Scalars['ID']>,
  issueId?: Maybe<Scalars['ID']>,
  keyForParent?: Maybe<Scalars['Boolean']>,
  keyPhotos?: Maybe<Scalars['Boolean']>,
  locationId?: Maybe<Scalars['ID']>,
  parentId?: Maybe<Scalars['ID']>,
  parentType?: Maybe<Scalars['String']>,
  photosetId?: Maybe<Scalars['ID']>,
  playerId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTenTouchBatchArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeDeviceArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeSeminarsArgs = {
  attended?: Maybe<Scalars['Boolean']>,
  contactId?: Maybe<Scalars['ID']>,
  eventType?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCampaignArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeContactImportArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeListArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePhysicalAddressesArgs = {
  filter?: Maybe<Scalars['String']>
};


export type RootQueryTypeReportCardArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeRetainerArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTimesheetsArgs = {
  expenses?: Maybe<Scalars['Boolean']>,
  filter?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  paymentType?: Maybe<Scalars['String']>,
  year?: Maybe<Scalars['String']>
};


export type RootQueryTypeMilestoneparentsArgs = {
  planId: Scalars['ID']
};


export type RootQueryTypeDocumentsArgs = {
  employeeId?: Maybe<Scalars['ID']>,
  filter?: Maybe<Scalars['String']>,
  global?: Maybe<Scalars['Boolean']>,
  md5?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  projectNumber?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>
};


export type RootQueryTypeReportTypeArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTestLocationsArgs = {
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeDynamicMetricsArgs = {
  end?: Maybe<Scalars['String']>,
  filter?: Maybe<Scalars['String']>,
  quarter?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeProjectCountsArgs = {
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeDispatchArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTopicsArgs = {
  category?: Maybe<Scalars['String']>
};


export type RootQueryTypeSalesMetricsArgs = {
  date: Scalars['Date'],
  period?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeEditorTemplatesArgs = {
  projectId?: Maybe<Scalars['ID']>,
  scope: Scalars['String']
};


export type RootQueryTypeFeeScheduleArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeContactsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  query?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeReportSectionIssuesArgs = {
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTrainingPlanArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTasksArgs = {
  category?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  parentType?: Maybe<Scalars['String']>,
  scope?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


export type RootQueryTypeLibrarySearchArgs = {
  category?: Maybe<Scalars['ID']>,
  element?: Maybe<Scalars['ID']>,
  filter?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>
};


export type RootQueryTypePlayerGroupArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTimelineArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeContactSearchArgs = {
  filter: ContactSearchFilter,
  paginate?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypePlanTypeArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePlayerArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReportsArgs = {
  author?: Maybe<Scalars['String']>,
  billable?: Maybe<Scalars['Boolean']>,
  notAuthor?: Maybe<Scalars['String']>,
  projectStatus?: Maybe<Scalars['String']>,
  projectUser?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>
};


export type RootQueryTypeTaskCountsArgs = {
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeReportTypeSectionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTagArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeMailingArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTimesheetArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeDeliverableMenuItemArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeDuplicateContactsArgs = {
  contactImportId?: Maybe<Scalars['ID']>,
  mode?: Maybe<Scalars['String']>
};


export type RootQueryTypeIssueArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePhotosetArgs = {
  id: Scalars['ID'],
  project?: Maybe<Scalars['String']>
};


export type RootQueryTypeCalendarsArgs = {
  endTime: Scalars['Int'],
  office?: Maybe<Scalars['String']>,
  project?: Maybe<Scalars['String']>,
  projectUser?: Maybe<Scalars['String']>,
  startTime: Scalars['Int'],
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeElementsArgs = {
  projectId?: Maybe<Scalars['ID']>,
  template?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeDocumentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCompaniesArgs = {
  search?: Maybe<Scalars['String']>
};


export type RootQueryTypeGoalArgs = {
  date?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  period: Scalars['String'],
  quarter?: Maybe<Scalars['String']>
};


export type RootQueryTypePlanStatusArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeTagsArgs = {
  scope?: Maybe<Scalars['String']>
};


export type RootQueryTypeLocationsArgs = {
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSkuSampleArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePlayersArgs = {
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeKanbanCardsArgs = {
  projectNumber?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeCreditMemosArgs = {
  month?: Maybe<Scalars['String']>,
  synced?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeAffiliationTypeArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeInvoicesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  filter?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>
};


export type RootQueryTypePhotosetsArgs = {
  filter?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeProjectsArgs = {
  billable?: Maybe<Scalars['Boolean']>,
  conflictQuery?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  filter?: Maybe<Scalars['String']>,
  includeId?: Maybe<Scalars['ID']>,
  month?: Maybe<Scalars['String']>,
  opportunityUser?: Maybe<Scalars['String']>,
  projectsOnly?: Maybe<Scalars['Boolean']>,
  search?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
};


export type RootQueryTypeLocationArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeMembershipsArgs = {
  memberId: Scalars['ID'],
  memberType: Scalars['String']
};


export type RootQueryTypeMonthlyPaymentArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeProjectArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['String']>
};


export type RootQueryTypeTenTouchesArgs = {
  tenTouchBatchId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeElementArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeRefundArgs = {
  id: Scalars['ID']
};


export type RootQueryTypePaymentsArgs = {
  endDate?: Maybe<Scalars['String']>,
  filter?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['String']>
};


export type RootQueryTypeChecklistItemArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeInvoiceArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeAgreementArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeSeminarArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeReceivablesArgs = {
  filter?: Maybe<ReceivablesFilter>
};


export type RootQueryTypePileArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeNotesArgs = {
  contactId?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTrainingPlansArgs = {
  login: Scalars['String']
};


export type RootQueryTypeReportSectionLocationsArgs = {
  reportSectionId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeChecklistArgs = {
  category?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  template?: Maybe<Scalars['Boolean']>
};


export type RootQueryTypeTenTouchItemsArgs = {
  active?: Maybe<Scalars['Boolean']>,
  includeId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTenTouchItemArgs = {
  id: Scalars['ID']
};


export type RootQueryTypeKpisArgs = {
  globalSet?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>
};


export type RootQueryTypeTemplatesArgs = {
  projectId?: Maybe<Scalars['ID']>,
  scope?: Maybe<Scalars['String']>
};


export type RootQueryTypeMetricsArgs = {
  campaignId?: Maybe<Scalars['ID']>,
  category?: Maybe<Scalars['String']>,
  quarter?: Maybe<Scalars['String']>
};


export type RootQueryTypeReportCardQuestionArgs = {
  id: Scalars['ID']
};

export type Salary = {
   __typename: 'Salary',
  annualBase?: Maybe<Scalars['Decimal']>,
  annualIncentive?: Maybe<Scalars['Decimal']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  effectiveDate?: Maybe<Scalars['Date']>,
  employee?: Maybe<Employee>,
  hourlyRate?: Maybe<Scalars['Decimal']>,
  hourlyRates?: Maybe<Scalars['Quill']>,
  id: Scalars['ID'],
  manager?: Maybe<User>,
  performancePaySummary?: Maybe<Scalars['String']>,
  ptoPlan?: Maybe<PtoPlan>,
  retroactiveDate?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SalaryInput = {
  annualBase?: Maybe<Scalars['Decimal']>,
  annualIncentive?: Maybe<Scalars['Decimal']>,
  effectiveDate?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>,
  hourlyRate?: Maybe<Scalars['Decimal']>,
  hourlyRates?: Maybe<Scalars['Quill']>,
  id?: Maybe<Scalars['ID']>,
  performancePaySummary?: Maybe<Scalars['String']>,
  ptoPlanId?: Maybe<Scalars['ID']>,
  retroactiveDate?: Maybe<Scalars['String']>,
};

export type SalesMetric = {
   __typename: 'SalesMetric',
  category: Scalars['String'],
  count: Scalars['Int'],
  date: Scalars['Date'],
  name: Scalars['String'],
  points: Scalars['Int'],
  score: Scalars['Int'],
  totalOnly?: Maybe<Scalars['Boolean']>,
};

export type SalesProjection = {
   __typename: 'SalesProjection',
  amount?: Maybe<Scalars['Decimal']>,
  closeDate?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  project?: Maybe<Project>,
  salesStage?: Maybe<SalesStage>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SalesStage = {
   __typename: 'SalesStage',
  createdAt?: Maybe<Scalars['DateTime']>,
  description: Scalars['String'],
  id: Scalars['ID'],
  probability: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type Seminar = {
   __typename: 'Seminar',
  seminarrecipientsCount?: Maybe<Scalars['Int']>,
  user?: Maybe<User>,
  categoriesSome?: Maybe<Scalars['String']>,
  subject: Scalars['String'],
  seminarAttachments: Array<SeminarAttachment>,
  categoriesAll?: Maybe<Scalars['String']>,
  bodyConfirmation?: Maybe<Scalars['String']>,
  followupStatus: Scalars['String'],
  eventLocation?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  bodyReminder?: Maybe<Scalars['String']>,
  bodyFollowup?: Maybe<Scalars['String']>,
  categoriesNone?: Maybe<Scalars['String']>,
  checklists: Array<Checklist>,
  eventTime: Scalars['String'],
  campaign?: Maybe<Campaign>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  goToWebinarKey?: Maybe<Scalars['String']>,
  attendeeCount?: Maybe<Scalars['Int']>,
  followupSentAt?: Maybe<Scalars['DateTime']>,
  approved?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  fromName: Scalars['String'],
  eventDate: Scalars['Date'],
  videoUrl?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  id: Scalars['ID'],
  fromEmail: Scalars['String'],
  seminarAttendees: Array<SeminarAttendee>,
  eventDirections?: Maybe<Scalars['String']>,
  eventType: Scalars['String'],
  campaignId?: Maybe<Scalars['ID']>,
  registrantCount?: Maybe<Scalars['Int']>,
};

export type SeminarAttachment = {
   __typename: 'SeminarAttachment',
  attachment?: Maybe<ArcAttachment>,
  attachmentFileSize?: Maybe<Scalars['Int']>,
  attachmentUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  role?: Maybe<Scalars['String']>,
  seminar?: Maybe<Seminar>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SeminarAttachmentInput = {
  attachment?: Maybe<Scalars['Upload']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  role?: Maybe<Scalars['String']>,
  seminarId?: Maybe<Scalars['ID']>,
};

export type SeminarAttendee = {
   __typename: 'SeminarAttendee',
  attended: Scalars['Boolean'],
  confirmed: Scalars['Boolean'],
  contact: Contact,
  createdAt?: Maybe<Scalars['DateTime']>,
  followedup: Scalars['Boolean'],
  id: Scalars['ID'],
  key: Scalars['Boolean'],
  registered: Scalars['Boolean'],
  seminar: Seminar,
  tickled: Scalars['Boolean'],
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SeminarAttendeeInput = {
  attended?: Maybe<Scalars['Boolean']>,
  contactId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  key?: Maybe<Scalars['Boolean']>,
  registered?: Maybe<Scalars['Boolean']>,
  seminarId?: Maybe<Scalars['ID']>,
};

export type SeminarImportResults = {
   __typename: 'SeminarImportResults',
  matchCount?: Maybe<Scalars['Int']>,
  unmatched?: Maybe<Scalars['Quill']>,
};

export type SeminarInput = {
  approved?: Maybe<Scalars['Boolean']>,
  body?: Maybe<Scalars['String']>,
  bodyConfirmation?: Maybe<Scalars['String']>,
  bodyFollowup?: Maybe<Scalars['String']>,
  bodyReminder?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  eventDate?: Maybe<Scalars['String']>,
  eventLocation?: Maybe<Scalars['String']>,
  eventTime?: Maybe<Scalars['String']>,
  eventType?: Maybe<Scalars['String']>,
  followupSentAt?: Maybe<Scalars['String']>,
  followupStatus?: Maybe<Scalars['String']>,
  fromEmail?: Maybe<Scalars['String']>,
  fromName?: Maybe<Scalars['String']>,
  goToWebinarKey?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  subject?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
  videoUrl?: Maybe<Scalars['String']>,
};

export type Sku = {
   __typename: 'Sku',
  category: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  reportTypes: Array<ReportType>,
  samples: Array<SkuSample>,
  trainingUrl?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SkuInput = {
  category?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  trainingUrl?: Maybe<Scalars['String']>,
};

export type SkuSample = {
   __typename: 'SkuSample',
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  project?: Maybe<Project>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
};

export type SkuSampleInput = {
  attachment?: Maybe<Scalars['Upload']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  skuId?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
};

export type SourceFile = {
   __typename: 'SourceFile',
  attachedFiles: Array<AttachedFile>,
  createdAt: Scalars['DateTime'],
  document?: Maybe<Document>,
  id: Scalars['ID'],
  name: Scalars['String'],
  path: Scalars['String'],
  pile: Pile,
  project: Project,
  sourceFile?: Maybe<SourceFile>,
  sourceFiles: Array<SourceFile>,
  status: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type SourceFileInput = {
  attachment?: Maybe<Scalars['Upload']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  pileId?: Maybe<Scalars['ID']>,
};

export type Survey = {
   __typename: 'Survey',
  averageRating?: Maybe<Scalars['Float']>,
  completed?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  emailSent?: Maybe<Scalars['Boolean']>,
  hashKey?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  keepAnonymous?: Maybe<Scalars['Boolean']>,
  membership: Membership,
  noGift?: Maybe<Scalars['Boolean']>,
  project: Project,
  surveyQuestions: Array<SurveyQuestion>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SurveyQuestion = {
   __typename: 'SurveyQuestion',
  answer?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  numeric: Scalars['Boolean'],
  question: Scalars['String'],
  survey: Survey,
  updatedAt: Scalars['DateTime'],
};

export type Tag = {
   __typename: 'Tag',
  category: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  isActive?: Maybe<Scalars['Boolean']>,
  projectCount?: Maybe<Scalars['Int']>,
  scope: Scalars['String'],
  section: Scalars['String'],
  subsection?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type Tagging = {
   __typename: 'Tagging',
  contact?: Maybe<Contact>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  mailing?: Maybe<Mailing>,
  project?: Maybe<Project>,
  scope?: Maybe<Scalars['String']>,
  tag: Tag,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TaggingInput = {
  contactId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  mailingId?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  scope?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['ID']>,
};

export type TagInput = {
  category?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  scope?: Maybe<Scalars['String']>,
  section?: Maybe<Scalars['String']>,
  subsection?: Maybe<Scalars['String']>,
};

export type Task = {
   __typename: 'Task',
  user?: Maybe<User>,
  feature?: Maybe<Feature>,
  pending?: Maybe<Scalars['Boolean']>,
  completed?: Maybe<Scalars['Boolean']>,
  tenTouch?: Maybe<TenTouch>,
  kanbanCard?: Maybe<KanbanCard>,
  note?: Maybe<Note>,
  interview?: Maybe<Interview>,
  hours?: Maybe<Scalars['Decimal']>,
  uuid?: Maybe<Scalars['String']>,
  contact?: Maybe<Contact>,
  tenTouchItemId?: Maybe<Scalars['ID']>,
  tenTouchSubject?: Maybe<Scalars['String']>,
  tenTouchNote?: Maybe<Scalars['String']>,
  creator?: Maybe<User>,
  deviceId?: Maybe<Scalars['ID']>,
  employee?: Maybe<Employee>,
  completedAt?: Maybe<Scalars['DateTime']>,
  device?: Maybe<Device>,
  campaign?: Maybe<Campaign>,
  completer?: Maybe<User>,
  description?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  completedOn?: Maybe<Scalars['Date']>,
  userId?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverable?: Maybe<Deliverable>,
  tenTouchType?: Maybe<Scalars['String']>,
  tenTouchEmail?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  project?: Maybe<Project>,
  itemDate?: Maybe<Scalars['Date']>,
  priority?: Maybe<Scalars['String']>,
  tenTouchItem?: Maybe<TenTouchItem>,
  projectId?: Maybe<Scalars['ID']>,
};

export type TaskInput = {
  campaignId?: Maybe<Scalars['ID']>,
  category?: Maybe<Scalars['String']>,
  completed?: Maybe<Scalars['Boolean']>,
  completerId?: Maybe<Scalars['ID']>,
  contactId?: Maybe<Scalars['ID']>,
  creatorId?: Maybe<Scalars['ID']>,
  delete?: Maybe<Scalars['Boolean']>,
  deliverableId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  deviceId?: Maybe<Scalars['ID']>,
  employeeId?: Maybe<Scalars['ID']>,
  featureId?: Maybe<Scalars['ID']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  interviewId?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  priority?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  tempUuid?: Maybe<Scalars['String']>,
  tenTouchEmail?: Maybe<Scalars['String']>,
  tenTouchItemId?: Maybe<Scalars['ID']>,
  tenTouchNote?: Maybe<Scalars['String']>,
  tenTouchSubject?: Maybe<Scalars['String']>,
  tenTouchType?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Template = {
   __typename: 'Template',
  category?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['Quill']>,
  contentType?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  plainContent?: Maybe<Scalars['String']>,
  scope?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TemplateInput = {
  category?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['Quill']>,
  contentType?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  plainContent?: Maybe<Scalars['String']>,
  scope?: Maybe<Scalars['String']>,
};

export type TenTouch = {
   __typename: 'TenTouch',
  campaign?: Maybe<Campaign>,
  campaignField?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  completed?: Maybe<Scalars['Boolean']>,
  completedOn?: Maybe<Scalars['Date']>,
  contact: Contact,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  notes?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  tenTouchBatch?: Maybe<TenTouchBatch>,
  tenTouchTasks: Array<TenTouchTask>,
  title?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
};

export type TenTouchBatch = {
   __typename: 'TenTouchBatch',
  campaign: Campaign,
  campaignField: Scalars['String'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  tenTouches: Array<TenTouch>,
  updatedAt: Scalars['DateTime'],
};

export type TenTouchInput = {
  campaignField?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  completedOn?: Maybe<Scalars['Date']>,
  contactId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  notes?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  tenTouchTasks?: Maybe<Array<Maybe<TenTouchTaskInput>>>,
  title?: Maybe<Scalars['String']>,
};

export type TenTouchItem = {
   __typename: 'TenTouchItem',
  active?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  document?: Maybe<Document>,
  emailBody?: Maybe<Scalars['String']>,
  emailSubject?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  tenTouchTasks: Array<TenTouchTask>,
  touchTypes: Array<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TenTouchItemInput = {
  active?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  documentId?: Maybe<Scalars['ID']>,
  emailBody?: Maybe<Scalars['String']>,
  emailSubject?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  touchTypes?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type TenTouchTask = {
   __typename: 'TenTouchTask',
  body?: Maybe<Scalars['String']>,
  completed?: Maybe<Scalars['Boolean']>,
  completedOn?: Maybe<Scalars['Date']>,
  createdAt: Scalars['DateTime'],
  days: Scalars['Int'],
  id: Scalars['ID'],
  itemDate?: Maybe<Scalars['Date']>,
  manualEmail?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  number: Scalars['Int'],
  overrideEmail?: Maybe<Scalars['Boolean']>,
  subject?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>,
  tenTouch?: Maybe<TenTouch>,
  tenTouchItem?: Maybe<TenTouchItem>,
  tenTouchTemplate?: Maybe<TenTouchTemplate>,
  touchType: Scalars['String'],
  updatedAt: Scalars['DateTime'],
  user?: Maybe<User>,
};

export type TenTouchTaskInput = {
  body?: Maybe<Scalars['String']>,
  completed?: Maybe<Scalars['Boolean']>,
  days?: Maybe<Scalars['String']>,
  delete?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['String']>,
  manualEmail?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  overrideEmail?: Maybe<Scalars['Boolean']>,
  subject?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['Boolean']>,
  tenTouchId?: Maybe<Scalars['ID']>,
  tenTouchItemId?: Maybe<Scalars['ID']>,
  tenTouchTemplateId?: Maybe<Scalars['ID']>,
  touchType?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type TenTouchTemplate = {
   __typename: 'TenTouchTemplate',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  tenTouchTasks: Array<TenTouchTask>,
  updatedAt: Scalars['DateTime'],
};

export type TenTouchTemplateInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  tenTouchTasks?: Maybe<Array<Maybe<TenTouchTaskInput>>>,
};

export type TestLocation = {
   __typename: 'TestLocation',
  addresses: Array<Address>,
  alternateNumber?: Maybe<Scalars['String']>,
  analysis?: Maybe<Scalars['String']>,
  attended?: Maybe<Scalars['Boolean']>,
  bpaLinks: Array<BpaLink>,
  createdAt?: Maybe<Scalars['DateTime']>,
  damage?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  displayName: Scalars['String'],
  elements: Array<Element>,
  id: Scalars['ID'],
  issues: Array<Issue>,
  locations: Array<Location>,
  next?: Maybe<TestLocation>,
  number: Scalars['String'],
  otherKeyPhotoCount: Scalars['Int'],
  otherPhotoCount: Scalars['Int'],
  pfcsKeyPhotoCount: Scalars['Int'],
  pfcsPhotoCount: Scalars['Int'],
  photoLinks: Array<PhotoLink>,
  photos: Array<Photo>,
  prev?: Maybe<TestLocation>,
  project: Project,
  swi?: Maybe<Scalars['Boolean']>,
  testedAt?: Maybe<Scalars['Date']>,
  testedBy?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TestLocationInput = {
  addressIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  alternateNumber?: Maybe<Scalars['String']>,
  analysis?: Maybe<Scalars['String']>,
  attended?: Maybe<Scalars['Boolean']>,
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  damage?: Maybe<Scalars['Boolean']>,
  description?: Maybe<Scalars['String']>,
  elementIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id?: Maybe<Scalars['ID']>,
  issueIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  locationIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  number?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  swi?: Maybe<Scalars['Boolean']>,
  testedAt?: Maybe<Scalars['Date']>,
  testedBy?: Maybe<Scalars['String']>,
};


export type Timeline = {
   __typename: 'Timeline',
  bpaLinks: Array<BpaLink>,
  createdAt?: Maybe<Scalars['DateTime']>,
  customFields?: Maybe<Scalars['Quill']>,
  description?: Maybe<Scalars['String']>,
  document?: Maybe<Document>,
  elements: Array<Element>,
  id: Scalars['ID'],
  interview?: Maybe<Interview>,
  itemDate?: Maybe<Scalars['Date']>,
  keyEvent?: Maybe<Scalars['Boolean']>,
  players: Array<Player>,
  project?: Maybe<Project>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TimelineInput = {
  bpaLinks?: Maybe<Array<Maybe<BpaLinkInput>>>,
  customFields?: Maybe<Scalars['Quill']>,
  description?: Maybe<Scalars['String']>,
  documentId?: Maybe<Scalars['ID']>,
  id?: Maybe<Scalars['ID']>,
  interviewId?: Maybe<Scalars['ID']>,
  itemDate?: Maybe<Scalars['Date']>,
  keyEvent?: Maybe<Scalars['Boolean']>,
  projectId?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
};

export type Timesheet = {
   __typename: 'Timesheet',
  user: User,
  paymentType?: Maybe<Scalars['String']>,
  note?: Maybe<Note>,
  rate?: Maybe<Scalars['Decimal']>,
  status: Scalars['String'],
  suggestion?: Maybe<Scalars['String']>,
  expenseStatus?: Maybe<Scalars['String']>,
  hours: Scalars['Decimal'],
  hasNote?: Maybe<Scalars['Boolean']>,
  isExpense?: Maybe<Scalars['Boolean']>,
  mentor?: Maybe<User>,
  opportunity?: Maybe<Scalars['Boolean']>,
  attachmentUrl?: Maybe<Scalars['String']>,
  paidOn?: Maybe<Scalars['Date']>,
  attachment?: Maybe<Scalars['String']>,
  paid?: Maybe<Scalars['Boolean']>,
  testimony?: Maybe<Scalars['Boolean']>,
  campaign?: Maybe<Campaign>,
  description: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  userId: Scalars['ID'],
  seconds?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  noCharge?: Maybe<Scalars['Boolean']>,
  deliverable?: Maybe<Deliverable>,
  total?: Maybe<Scalars['Decimal']>,
  category?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  project: Project,
  billedPosition?: Maybe<Scalars['String']>,
  itemDate: Scalars['Date'],
  dueDate?: Maybe<Scalars['Date']>,
  campaignId?: Maybe<Scalars['ID']>,
  projectId: Scalars['ID'],
};

export type TimesheetInput = {
  attachment?: Maybe<Scalars['Upload']>,
  billedPosition?: Maybe<Scalars['String']>,
  campaignId?: Maybe<Scalars['ID']>,
  category?: Maybe<Scalars['String']>,
  deliverableId?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  dueDate?: Maybe<Scalars['String']>,
  hasNote?: Maybe<Scalars['Boolean']>,
  hours?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  isExpense?: Maybe<Scalars['Boolean']>,
  itemDate?: Maybe<Scalars['String']>,
  mentorId?: Maybe<Scalars['ID']>,
  noCharge?: Maybe<Scalars['Boolean']>,
  note?: Maybe<NoteInput>,
  paymentType?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['ID']>,
  rate?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  suggestion?: Maybe<Scalars['String']>,
  testimony?: Maybe<Scalars['Boolean']>,
  userId?: Maybe<Scalars['ID']>,
};

export type TimesheetStatus = {
   __typename: 'TimesheetStatus',
  month?: Maybe<Scalars['Date']>,
  results?: Maybe<Array<Maybe<TimesheetStatusResult>>>,
};

export type TimesheetStatusResult = {
   __typename: 'TimesheetStatusResult',
  count?: Maybe<Scalars['Int']>,
  user?: Maybe<User>,
  weeklyStatus?: Maybe<Scalars['String']>,
};

export type Topic = {
   __typename: 'Topic',
  attachments: Array<Attachment>,
  category?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  notes: Array<Note>,
  project: Project,
  status: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  updatedAt: Scalars['DateTime'],
  user: User,
};

export type TopicInput = {
  category?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['ID']>,
};

export type Training = {
   __typename: 'Training',
  attachments: Array<Attachment>,
  bodyJson?: Maybe<Scalars['Quill']>,
  bodyOld?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  expectedDate?: Maybe<Scalars['Date']>,
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  position?: Maybe<Scalars['Int']>,
  priority?: Maybe<Scalars['String']>,
  producedOn?: Maybe<Scalars['Date']>,
  status: Scalars['String'],
  training?: Maybe<Training>,
  trainingAssignments: Array<TrainingAssignment>,
  trainingCategories: Array<TrainingCategory>,
  trainingCompletions: Array<TrainingCompletion>,
  trainingRequirements: Array<TrainingRequirement>,
  trainings: Array<Training>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
};

export type TrainingAssignment = {
   __typename: 'TrainingAssignment',
  completed?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  position?: Maybe<Scalars['Int']>,
  training: Training,
  trainingPlan: TrainingPlan,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TrainingAssignmentInput = {
  direction?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  trainingId?: Maybe<Scalars['ID']>,
  trainingPlanId?: Maybe<Scalars['ID']>,
};

export type TrainingCategorization = {
   __typename: 'TrainingCategorization',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  training?: Maybe<Training>,
  trainingCategory?: Maybe<TrainingCategory>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TrainingCategory = {
   __typename: 'TrainingCategory',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  trainingCategorizations?: Maybe<Array<Maybe<TrainingCategorization>>>,
  trainings?: Maybe<Array<Maybe<Training>>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TrainingCompletion = {
   __typename: 'TrainingCompletion',
  answer?: Maybe<Scalars['String']>,
  answers: Array<Scalars['String']>,
  attachment?: Maybe<ArcAttachment>,
  attachmentUrl?: Maybe<Scalars['String']>,
  correct?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  project?: Maybe<Project>,
  status: Scalars['String'],
  training: Training,
  trainingRequirement?: Maybe<TrainingRequirement>,
  trainingRequirementId?: Maybe<Scalars['ID']>,
  updatedAt: Scalars['DateTime'],
  user: User,
  userId: Scalars['ID'],
};

export type TrainingCompletionInput = {
  answer?: Maybe<Scalars['String']>,
  answers?: Maybe<Array<Scalars['String']>>,
  attachment?: Maybe<Scalars['Upload']>,
  correct?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['ID']>,
  status?: Maybe<Scalars['String']>,
  trainingId?: Maybe<Scalars['ID']>,
  trainingRequirementId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type TrainingInput = {
  bodyJson?: Maybe<Scalars['Quill']>,
  expectedDate?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  priority?: Maybe<Scalars['String']>,
  producedOn?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  trainingCategoryIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  url?: Maybe<Scalars['String']>,
};

export type TrainingPlan = {
   __typename: 'TrainingPlan',
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  name: Scalars['String'],
  status: Scalars['String'],
  trainingAssignments: Array<TrainingAssignment>,
  updatedAt: Scalars['DateTime'],
  user?: Maybe<User>,
  userId?: Maybe<Scalars['ID']>,
};

export type TrainingPlanInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  templateId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type TrainingRequirement = {
   __typename: 'TrainingRequirement',
  createdAt?: Maybe<Scalars['DateTime']>,
  deliverables?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  id: Scalars['ID'],
  mode: Scalars['String'],
  options: Array<Scalars['Quill']>,
  rank?: Maybe<Scalars['Int']>,
  training?: Maybe<Training>,
  trainingCompletions?: Maybe<Array<Maybe<TrainingCompletion>>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type TrainingRequirementInput = {
  deliverables?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  mode?: Maybe<Scalars['String']>,
  options?: Maybe<Array<Maybe<Scalars['Quill']>>>,
  trainingId?: Maybe<Scalars['ID']>,
};


export type User = {
   __typename: 'User',
  todayTaskCount?: Maybe<Scalars['Int']>,
  office: Scalars['String'],
  endDate?: Maybe<Scalars['Date']>,
  signature?: Maybe<Scalars['String']>,
  noteUserNotifications?: Maybe<Array<Maybe<NoteUserNotification>>>,
  roles: Array<Scalars['String']>,
  isTimeAdministrator?: Maybe<Scalars['Boolean']>,
  passwordDigest?: Maybe<Scalars['String']>,
  workState: Scalars['String'],
  isSalaryManager?: Maybe<Scalars['Boolean']>,
  tracksTime?: Maybe<Scalars['Boolean']>,
  features?: Maybe<Array<Maybe<Feature>>>,
  isManager?: Maybe<Scalars['Boolean']>,
  contactId?: Maybe<Scalars['Int']>,
  invoiceReviewCount?: Maybe<Scalars['Int']>,
  kpiSet?: Maybe<KpiSet>,
  invoicelines?: Maybe<Array<Maybe<Invoiceline>>>,
  startDate: Scalars['Date'],
  showMarketingDash?: Maybe<Scalars['Boolean']>,
  showManagement?: Maybe<Scalars['Boolean']>,
  timesheetsScrollToBottom?: Maybe<Scalars['Boolean']>,
  goToWebinarExpiresAt?: Maybe<Scalars['Int']>,
  employee?: Maybe<Employee>,
  email?: Maybe<Scalars['String']>,
  notifications: Array<Scalars['String']>,
  showArDash?: Maybe<Scalars['Boolean']>,
  showAreaManagerDash?: Maybe<Scalars['Boolean']>,
  timesheetsHideLockedWeeks?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  projectListTotalDue?: Maybe<Scalars['Boolean']>,
  login: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  timesheets?: Maybe<Array<Maybe<Timesheet>>>,
  canApprovePayroll?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  employmentStatus: Scalars['String'],
  requiresNewPassword?: Maybe<Scalars['Boolean']>,
  isIgk?: Maybe<Scalars['Boolean']>,
  planMethodShow?: Maybe<Scalars['Boolean']>,
  pendingTimesheets?: Maybe<Scalars['Boolean']>,
  userType: Scalars['String'],
  trainingCompletions: Array<TrainingCompletion>,
  token?: Maybe<Scalars['String']>,
  taskCompletionNotification?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  fullname: Scalars['String'],
  timesheetsShowWeeks?: Maybe<Scalars['Boolean']>,
  allowArChanges?: Maybe<Scalars['Boolean']>,
  goToWebinarAccessToken?: Maybe<Scalars['String']>,
  projectListStartDate?: Maybe<Scalars['Boolean']>,
  showPrimaryContactsOnly?: Maybe<Scalars['Boolean']>,
  showExecutiveDash?: Maybe<Scalars['Boolean']>,
  trainingPlans: Array<TrainingPlan>,
  kpis?: Maybe<Array<Maybe<Kpi>>>,
  pastDueTaskCount?: Maybe<Scalars['Int']>,
  isAdministrator?: Maybe<Scalars['Boolean']>,
};


export type UserInvoicelinesArgs = {
  filters?: Maybe<Array<Maybe<Scalars['String']>>>,
  invoiceMonth?: Maybe<Scalars['String']>
};


export type UserTimesheetsArgs = {
  expenses?: Maybe<Scalars['Boolean']>,
  filter?: Maybe<Scalars['String']>,
  filterMonth?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  month?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  paymentType?: Maybe<Scalars['String']>
};

export type UserInput = {
  isAdministrator?: Maybe<Scalars['Boolean']>,
  showExecutiveDash?: Maybe<Scalars['Boolean']>,
  showPrimaryContactsOnly?: Maybe<Scalars['Boolean']>,
  projectListStartDate?: Maybe<Scalars['Boolean']>,
  goToWebinarAccessToken?: Maybe<Scalars['String']>,
  allowArChanges?: Maybe<Scalars['Boolean']>,
  timesheetsShowWeeks?: Maybe<Scalars['Boolean']>,
  kpiSetId?: Maybe<Scalars['ID']>,
  fullname?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  taskCompletionNotification?: Maybe<Scalars['Boolean']>,
  userType?: Maybe<Scalars['String']>,
  planMethodShow?: Maybe<Scalars['Boolean']>,
  isIgk?: Maybe<Scalars['Boolean']>,
  requiresNewPassword?: Maybe<Scalars['Boolean']>,
  employmentStatus?: Maybe<Scalars['String']>,
  canApprovePayroll?: Maybe<Scalars['Boolean']>,
  login?: Maybe<Scalars['String']>,
  projectListTotalDue?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  timesheetsHideLockedWeeks?: Maybe<Scalars['Boolean']>,
  showAreaManagerDash?: Maybe<Scalars['Boolean']>,
  showArDash?: Maybe<Scalars['Boolean']>,
  notifications?: Maybe<Array<Maybe<Scalars['String']>>>,
  email?: Maybe<Scalars['String']>,
  goToWebinarExpiresAt?: Maybe<Scalars['Int']>,
  timesheetsScrollToBottom?: Maybe<Scalars['Boolean']>,
  showManagement?: Maybe<Scalars['Boolean']>,
  showMarketingDash?: Maybe<Scalars['Boolean']>,
  startDate?: Maybe<Scalars['String']>,
  contactId?: Maybe<Scalars['ID']>,
  isManager?: Maybe<Scalars['Boolean']>,
  tracksTime?: Maybe<Scalars['Boolean']>,
  isSalaryManager?: Maybe<Scalars['Boolean']>,
  workState?: Maybe<Scalars['String']>,
  passwordDigest?: Maybe<Scalars['String']>,
  isTimeAdministrator?: Maybe<Scalars['Boolean']>,
  roles?: Maybe<Array<Maybe<Scalars['String']>>>,
  signature?: Maybe<Scalars['String']>,
  endDate?: Maybe<Scalars['String']>,
  office?: Maybe<Scalars['String']>,
};

export type UserSession = {
   __typename: 'UserSession',
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};
export type ActivateAccessUserMutationVariables = {
  token: Scalars['String']
};


export type ActivateAccessUserMutation = (
  { __typename: 'RootMutationType' }
  & { activateAccessUser: Maybe<(
    { __typename: 'AccessUserSession' }
    & Pick<AccessUserSession, 'token'>
    & { accessUser: Maybe<(
      { __typename: 'AccessUser' }
      & Pick<AccessUser, 'id'>
    )> }
  )> }
);

export type ChoosePasswordMutationVariables = {
  token: Scalars['String'],
  password: Scalars['String']
};


export type ChoosePasswordMutation = (
  { __typename: 'RootMutationType' }
  & { setNewAccessUserPassword: Maybe<(
    { __typename: 'AccessUserSession' }
    & Pick<AccessUserSession, 'token'>
    & { accessUser: Maybe<(
      { __typename: 'AccessUser' }
      & Pick<AccessUser, 'id'>
    )> }
  )> }
);

export type CreateAccessUserMutationVariables = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type CreateAccessUserMutation = (
  { __typename: 'RootMutationType' }
  & { createAccessUser: Maybe<(
    { __typename: 'AccessUser' }
    & Pick<AccessUser, 'id'>
  )> }
);

export type LoginAccessUserMutationVariables = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type LoginAccessUserMutation = (
  { __typename: 'RootMutationType' }
  & { loginAccessUser: Maybe<(
    { __typename: 'AccessUserSession' }
    & Pick<AccessUserSession, 'token'>
    & { accessUser: Maybe<(
      { __typename: 'AccessUser' }
      & Pick<AccessUser, 'id'>
    )> }
  )> }
);

export type ResetAccessUserPasswordMutationVariables = {
  login: Scalars['String']
};


export type ResetAccessUserPasswordMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'resetAccessUserPassword'>
);

export type AddressFragmentFragment = (
  { __typename: 'Address' }
  & Pick<Address, 'id' | 'name' | 'analysis' | 'analysisJson' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount' | 'customFields' | 'displayName'>
  & { address: Maybe<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )> }
);

export type DeleteAddressMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAddressMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAddress: Maybe<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )> }
);

export type AddressQueryVariables = {
  id: Scalars['ID']
};


export type AddressQuery = (
  { __typename: 'RootQueryType' }
  & { address: Maybe<{ __typename: 'Address' }
    & AddressFormFragmentFragment
  > }
);

export type AddressesQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type AddressesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { addresses: Array<{ __typename: 'Address' }
      & AddressFragmentFragment
    > }
  ) }
);

export type AddressFormFragmentFragment = (
  { __typename: 'Address' }
  & Pick<Address, 'id' | 'analysis' | 'analysisJson' | 'customFields' | 'name'>
  & { address: Maybe<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )>, next: Maybe<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )>, prev: Maybe<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )>, bpaLinks: Array<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  > }
);

export type GlobalAddressesQueryVariables = {
  filter: Scalars['String']
};


export type GlobalAddressesQuery = (
  { __typename: 'RootQueryType' }
  & { addresses: Array<(
    { __typename: 'Address' }
    & Pick<Address, 'id' | 'analysis' | 'analysisJson'>
  )> }
);

export type SaveAddressMutationVariables = {
  input: AddressInput
};


export type SaveAddressMutation = (
  { __typename: 'RootMutationType' }
  & { saveAddress: Maybe<{ __typename: 'Address' }
    & AddressFormFragmentFragment
  > }
);

export type AddressSearchQueryVariables = {
  search?: Maybe<Scalars['String']>
};


export type AddressSearchQuery = (
  { __typename: 'RootQueryType' }
  & { addresses: Array<(
    { __typename: 'Address' }
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ) }
  )
    & AddressFragmentFragment
  > }
);

export type AttachmentFragmentFragment = (
  { __typename: 'Attachment' }
  & Pick<Attachment, 'id' | 'attachmentThumbUrl' | 'attachmentUrl'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName' | 'updatedAt'>
  )> }
);

export type DeleteAttachmentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAttachment: Maybe<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id'>
  )> }
);

export type SaveAttachmentMutationVariables = {
  input: AttachmentInput
};


export type SaveAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { saveAttachment: Maybe<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'url' | 'rank' | 'projectId' | 'note' | 'attachmentUrl'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )>, document: Maybe<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    >, attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )> }
);

export type SortAttachmentMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type SortAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { sortAttachment: Maybe<Array<Maybe<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'rank'>
  )>>> }
);

export type BpaLinkFragmentFragment = (
  { __typename: 'BpaLink' }
  & Pick<BpaLink, 'id' | 'addressId' | 'locationId' | 'elementId' | 'issueId' | 'playerId' | 'testLocationId' | 'infoImageId' | 'documentId' | 'description'>
);

export type BillingPositionsQueryVariables = {};


export type BillingPositionsQuery = (
  { __typename: 'RootQueryType' }
  & { billingPositions: Array<(
    { __typename: 'BillingPosition' }
    & Pick<BillingPosition, 'id' | 'description' | 'active'>
  )> }
);

export type CostFragmentFragment = (
  { __typename: 'DeliverableCost' }
  & Pick<DeliverableCost, 'id' | 'hours' | 'amount' | 'description'>
  & { billingPosition: (
    { __typename: 'BillingPosition' }
    & Pick<BillingPosition, 'id' | 'initials'>
  ) }
);

export type CreateDeliverableMutationVariables = {
  input: DeliverableInput
};


export type CreateDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { createDeliverable: Maybe<{ __typename: 'Deliverable' }
    & DeliverableFragmentFragment
  > }
);

export type CreateDeliverablesMutationVariables = {
  planId: Scalars['ID'],
  deliverableMenuItemIds: Array<Maybe<Scalars['ID']>>
};


export type CreateDeliverablesMutation = (
  { __typename: 'RootMutationType' }
  & { createDeliverables: Maybe<Array<Maybe<{ __typename: 'Deliverable' }
    & DeliverableFragmentFragment
  >>> }
);

export type DeleteDeliverableMutationVariables = {
  id: Scalars['ID']
};


export type DeleteDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDeliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id'>
  )> }
);

export type DeliverableFragmentFragment = (
  { __typename: 'Deliverable' }
  & Pick<Deliverable, 'id' | 'priority' | 'completed' | 'rank' | 'description' | 'dueDate'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  ), costs: Array<{ __typename: 'DeliverableCost' }
    & CostFragmentFragment
  >, kanbanCards: Array<{ __typename: 'KanbanCard' }
    & CardFragmentFragment
  >, milestoneparent: (
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id'>
  ) }
);

export type MoveDeliverableMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { moveDeliverable: Maybe<Array<Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'rank'>
  )>>> }
);

export type DeliverablesQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type DeliverablesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number'>
    & { plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id'>
      & { milestoneparents: Array<(
        { __typename: 'Milestoneparent' }
        & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
        & { deliverables: Array<(
          { __typename: 'Deliverable' }
          & Pick<Deliverable, 'id' | 'description' | 'completed' | 'rank'>
        )> }
      )> }
    ) }
  ) }
);

export type SortDeliverableMutationVariables = {
  id: Scalars['ID'],
  position: Scalars['Int'],
  milestoneparentId: Scalars['ID']
};


export type SortDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { sortDeliverable: Maybe<Array<Maybe<{ __typename: 'Deliverable' }
    & DeliverableFragmentFragment
  >>> }
);

export type UpdateDeliverableMutationVariables = {
  id: Scalars['ID'],
  input: DeliverableInput
};


export type UpdateDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { updateDeliverable: Maybe<{ __typename: 'Deliverable' }
    & DeliverableFragmentFragment
  > }
);

export type DevicesQueryVariables = {};


export type DevicesQuery = (
  { __typename: 'RootQueryType' }
  & { devices: Array<{ __typename: 'Device' }
    & DeviceFragmentFragment
  > }
);

export type DeleteDeviceMutationVariables = {
  id: Scalars['ID']
};


export type DeleteDeviceMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDevice: Maybe<(
    { __typename: 'Device' }
    & Pick<Device, 'id'>
  )> }
);

export type DeviceFragmentFragment = (
  { __typename: 'Device' }
  & Pick<Device, 'id' | 'category' | 'location' | 'office' | 'model' | 'os' | 'ip' | 'storage' | 'cpuRank' | 'cpu' | 'ramType' | 'ramSize' | 'motherboard' | 'graphics' | 'videoPorts' | 'originalInstallDate' | 'vnc' | 'goToMeeting' | 'msOffice' | 'acrobat' | 'faststone' | 'chrome' | 'pfcsAccount' | 'lastUpdated' | 'productKey' | 'printer' | 'equipmentId'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, notes: Array<(
    { __typename: 'Note' }
    & Pick<Note, 'id'>
  )
    & NoteShowFragmentFragment
  > }
);

export type DeviceQueryVariables = {
  id: Scalars['ID']
};


export type DeviceQuery = (
  { __typename: 'RootQueryType' }
  & { device: { __typename: 'Device' }
    & DeviceFragmentFragment
   }
);

export type UpdateDeviceMutationVariables = {
  input: DeviceInput
};


export type UpdateDeviceMutation = (
  { __typename: 'RootMutationType' }
  & { saveDevice: { __typename: 'Device' }
    & DeviceFragmentFragment
   }
);

export type DeleteDispatchMutationVariables = {
  id: Scalars['ID']
};


export type DeleteDispatchMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDispatch: Maybe<(
    { __typename: 'Dispatch' }
    & Pick<Dispatch, 'id'>
  )> }
);

export type DispatchFragmentFragment = (
  { __typename: 'Dispatch' }
  & Pick<Dispatch, 'id' | 'date' | 'time' | 'category' | 'location' | 'legacy' | 'startingAddress' | 'photoNumber' | 'meetings' | 'materials' | 'description' | 'oneMinuteSummary' | 'hideOms' | 'hideLocations' | 'hideElements' | 'hideIssues' | 'hideImages' | 'hideMaps'>
  & { expert: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ), photoset: Maybe<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id'>
  )>, documentReferences: Array<{ __typename: 'DocumentReference' }
    & DocumentReferenceFragmentFragment
  >, imageReferences: Array<{ __typename: 'ImageReference' }
    & ImageReferenceFragmentFragment
  >, checklists: Array<{ __typename: 'Checklist' }
    & ChecklistFragmentFragment
  > }
);

export type EditDispatchQueryVariables = {
  id: Scalars['ID']
};


export type EditDispatchQuery = (
  { __typename: 'RootQueryType' }
  & { dispatch: { __typename: 'Dispatch' }
    & DispatchFragmentFragment
   }
);

export type DispatchesQueryVariables = {
  number: Scalars['String']
};


export type DispatchesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number'>
    & { dispatches: Array<(
      { __typename: 'Dispatch' }
      & Pick<Dispatch, 'id' | 'time' | 'date' | 'category'>
      & { expert: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      ) }
    )> }
  ) }
);

export type DispatchProjectInfoQueryVariables = {
  number: Scalars['String']
};


export type DispatchProjectInfoQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'oneMinuteSummary' | 'address'>
  ) }
);

export type SaveDispatchMutationVariables = {
  input: DispatchInput
};


export type SaveDispatchMutation = (
  { __typename: 'RootMutationType' }
  & { saveDispatch: Maybe<{ __typename: 'Dispatch' }
    & DispatchFragmentFragment
  > }
);

export type ProjectDocumentsQueryVariables = {
  projectNumber?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['ID']>,
  filter?: Maybe<Scalars['String']>,
  hasParent?: Maybe<Scalars['Boolean']>
};


export type ProjectDocumentsQuery = (
  { __typename: 'RootQueryType' }
  & { documents: Array<{ __typename: 'Document' }
    & DocumentRowFragmentFragment
  >, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { piles: Array<{ __typename: 'Pile' }
      & PileFieldsFragment
    > }
  ), parent: (
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'section' | 'mode' | 'author'>
    & { ancestors: Array<(
      { __typename: 'Document' }
      & Pick<Document, 'id' | 'path' | 'section' | 'mode' | 'author'>
    )> }
  ) }
);

export type AttachedFileFragmentFragment = (
  { __typename: 'AttachedFile' }
  & Pick<AttachedFile, 'id' | 'primaryFile' | 'attachmentUrl' | 'md5' | 'attachmentThumbUrl'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )> }
);

export type ProjectDocumentAuthorsQueryVariables = {
  projectNumber: Scalars['String']
};


export type ProjectDocumentAuthorsQuery = (
  { __typename: 'RootQueryType' }
  & Pick<RootQueryType, 'documentParties'>
);

export type BatchUpdateDocumentsMutationVariables = {
  ids: Array<Scalars['ID']>,
  input: DocumentInput
};


export type BatchUpdateDocumentsMutation = (
  { __typename: 'RootMutationType' }
  & { batchUpdateDocuments: Maybe<Array<Maybe<{ __typename: 'Document' }
    & DocumentRowFragmentFragment
  >>> }
);

export type CopyDocumentFromLibraryMutationVariables = {
  projectId: Scalars['ID'],
  documentId: Scalars['ID']
};


export type CopyDocumentFromLibraryMutation = (
  { __typename: 'RootMutationType' }
  & { copyDocumentFromLibrary: Maybe<{ __typename: 'Document' }
    & DocumentRowFragmentFragment
  > }
);

export type CreateDocumentInterviewsMutationVariables = {
  input: DocumentReferenceInput,
  documentIds: Array<Scalars['ID']>
};


export type CreateDocumentInterviewsMutation = (
  { __typename: 'RootMutationType' }
  & { createDocumentReferences: Maybe<Array<Maybe<{ __typename: 'DocumentReference' }
    & DocumentReferenceFragmentFragment
  >>> }
);

export type DeleteDocumentMutationVariables = {
  id: Scalars['ID'],
  markAsKnown?: Maybe<Scalars['Boolean']>
};


export type DeleteDocumentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDocument: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )> }
);

export type DeleteAttachedFileMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAttachedFileMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAttachedFile: Maybe<(
    { __typename: 'AttachedFile' }
    & Pick<AttachedFile, 'id'>
  )> }
);

export type DeleteDocumentReferenceMutationVariables = {
  id: Scalars['ID']
};


export type DeleteDocumentReferenceMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDocumentReference: Maybe<(
    { __typename: 'DocumentReference' }
    & Pick<DocumentReference, 'id'>
  )> }
);

export type DocumentCategoriesQueryVariables = {};


export type DocumentCategoriesQuery = (
  { __typename: 'RootQueryType' }
  & { documentCategories: Array<(
    { __typename: 'DocumentCategory' }
    & Pick<DocumentCategory, 'id' | 'name' | 'documentCategoryId'>
    & { documentCategories: Array<(
      { __typename: 'DocumentCategory' }
      & Pick<DocumentCategory, 'id' | 'name'>
    )> }
  )> }
);

export type DocumentFieldsFragmentFragment = (
  { __typename: 'Document' }
  & Pick<Document, 'id' | 'description' | 'hidden' | 'path' | 'mode' | 'section' | 'suffix' | 'author' | 'recipient' | 'md5' | 'pdfSecurity' | 'url' | 'library' | 'migrated' | 'attachmentId' | 'analysis' | 'analysisJson' | 'analysisDate' | 'analysisTitle' | 'header' | 'key' | 'date' | 'endDate' | 'receivedDate' | 'pages' | 'pageReference' | 'batesStamp' | 'printed' | 'summary' | 'source' | 'updatedAt'>
  & { analysisUser: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )>, attachedFiles: Array<{ __typename: 'AttachedFile' }
    & AttachedFileFragmentFragment
  >, documentCategories: Array<(
    { __typename: 'DocumentCategory' }
    & Pick<DocumentCategory, 'id'>
  )>, elements: Array<(
    { __typename: 'Element' }
    & Pick<Element, 'id'>
  )>, document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'section'>
  )>, sourceFile: Maybe<(
    { __typename: 'SourceFile' }
    & Pick<SourceFile, 'id' | 'name'>
    & { pile: (
      { __typename: 'Pile' }
      & Pick<Pile, 'id' | 'name'>
    ), attachedFiles: Array<{ __typename: 'AttachedFile' }
      & AttachedFileFragmentFragment
    > }
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
  )> }
);

export type DocumentFragmentFragment = (
  { __typename: 'Document' }
  & { referenceDocument: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )
    & DocumentFieldsFragmentFragment
  >, references: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )> }
)
  & DocumentFieldsFragmentFragment
;

export type DocumentReferenceFragmentFragment = (
  { __typename: 'DocumentReference' }
  & Pick<DocumentReference, 'id' | 'rank'>
  & { document: Maybe<(
    { __typename: 'Document' }
    & { referenceDocument: Maybe<{ __typename: 'Document' }
      & DocumentRowFieldsFragmentFragment
    >, project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number'>
    )> }
  )
    & DocumentRowFieldsFragmentFragment
  > }
);

export type DocumentRowFieldsFragmentFragment = (
  { __typename: 'Document' }
  & Pick<Document, 'id' | 'header' | 'hidden' | 'mode' | 'section' | 'suffix' | 'key' | 'path' | 'pdfSecurity' | 'description' | 'library' | 'recipient' | 'date' | 'endDate' | 'author' | 'receivedDate' | 'pages' | 'pageReference' | 'batesStamp' | 'printed' | 'analysis' | 'analysisJson' | 'summary' | 'source'>
  & { attachedFiles: Array<{ __typename: 'AttachedFile' }
    & AttachedFileFragmentFragment
  >, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
  )>, document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'section' | 'hidden'>
  )>, sourceFile: Maybe<(
    { __typename: 'SourceFile' }
    & Pick<SourceFile, 'id'>
    & { attachedFiles: Array<{ __typename: 'AttachedFile' }
      & AttachedFileFragmentFragment
    > }
  )> }
);

export type DocumentRowFragmentFragment = (
  { __typename: 'Document' }
  & { referenceDocument: Maybe<{ __typename: 'Document' }
    & DocumentRowFieldsFragmentFragment
  > }
)
  & DocumentRowFieldsFragmentFragment
;

export type EditDocumentQueryVariables = {
  id: Scalars['ID']
};


export type EditDocumentQuery = (
  { __typename: 'RootQueryType' }
  & { document: (
    { __typename: 'Document' }
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )> }
  )
    & DocumentFragmentFragment
   }
);

export type EmployeeDocumentsQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeDocumentsQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { documents: Array<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    > }
  ) }
);

export type GlobalDocumentsQueryVariables = {
  filter: Scalars['String']
};


export type GlobalDocumentsQuery = (
  { __typename: 'RootQueryType' }
  & { documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'analysis' | 'analysisJson'>
  )> }
);

export type LibrarySearchQueryVariables = {
  query?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['ID']>,
  element?: Maybe<Scalars['ID']>,
  filter?: Maybe<Scalars['String']>
};


export type LibrarySearchQuery = (
  { __typename: 'RootQueryType' }
  & { librarySearch: (
    { __typename: 'LibrarySearch' }
    & Pick<LibrarySearch, 'label'>
    & { results: Array<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    > }
  ) }
);

export type DocumentMd5QueryVariables = {
  md5: Scalars['String'],
  projectId?: Maybe<Scalars['ID']>,
  employeeId?: Maybe<Scalars['ID']>
};


export type DocumentMd5Query = (
  { __typename: 'RootQueryType' }
  & { documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'description'>
  )> }
);

export type MoveDocumentReferenceMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveDocumentReferenceMutation = (
  { __typename: 'RootMutationType' }
  & { moveDocumentReference: Maybe<Array<Maybe<(
    { __typename: 'DocumentReference' }
    & Pick<DocumentReference, 'id' | 'rank'>
  )>>> }
);

export type DocumentPickerQueryVariables = {
  projectNumber: Scalars['String']
};


export type DocumentPickerQuery = (
  { __typename: 'RootQueryType' }
  & { documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'displayName'>
  )> }
);

export type SaveDocumentMutationVariables = {
  input: DocumentInput
};


export type SaveDocumentMutation = (
  { __typename: 'RootMutationType' }
  & { saveDocument: Maybe<Array<Maybe<{ __typename: 'Document' }
    & DocumentFragmentFragment
  >>> }
);

export type SaveAttachedFileMutationVariables = {
  input: AttachedFileInput
};


export type SaveAttachedFileMutation = (
  { __typename: 'RootMutationType' }
  & { saveAttachedFile: Maybe<Array<Maybe<{ __typename: 'AttachedFile' }
    & AttachedFileFragmentFragment
  >>> }
);

export type ProjectDocumentSectionsQueryVariables = {
  projectNumber?: Maybe<Scalars['String']>,
  employeeId?: Maybe<Scalars['ID']>
};


export type ProjectDocumentSectionsQuery = (
  { __typename: 'RootQueryType' }
  & { documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'section' | 'author'>
    & { document: Maybe<(
      { __typename: 'Document' }
      & Pick<Document, 'id'>
    )> }
  )> }
);

export type AddElementsFromMenuMutationVariables = {
  projectId: Scalars['ID'],
  elementIds: Array<Maybe<Scalars['ID']>>
};


export type AddElementsFromMenuMutation = (
  { __typename: 'RootMutationType' }
  & { addElementsFromMenu: Maybe<Array<Maybe<{ __typename: 'Element' }
    & ElementListFragmentFragment
  >>> }
);

export type ElementsQueryVariables = {
  projectId?: Maybe<Scalars['ID']>,
  template?: Maybe<Scalars['Boolean']>
};


export type ElementsQuery = (
  { __typename: 'RootQueryType' }
  & { elements: Array<{ __typename: 'Element' }
    & ElementListFragmentFragment
  > }
);

export type DeleteElementMutationVariables = {
  id: Scalars['ID']
};


export type DeleteElementMutation = (
  { __typename: 'RootMutationType' }
  & { deleteElement: Maybe<(
    { __typename: 'Element' }
    & Pick<Element, 'id'>
  )> }
);

export type ElementQueryVariables = {
  id: Scalars['ID']
};


export type ElementQuery = (
  { __typename: 'RootQueryType' }
  & { element: Maybe<{ __typename: 'Element' }
    & ElementFormFragmentFragment
  > }
);

export type ElementFormFragmentFragment = (
  { __typename: 'Element' }
  & Pick<Element, 'id' | 'number' | 'name' | 'template' | 'description' | 'analysisStatus' | 'priority' | 'basicAnalysis' | 'iiaccIssue' | 'iiaccInvestigation' | 'iiaccAnalysis' | 'iiaccConclusion' | 'iiaccCosts' | 'specificationsGeneral' | 'specificationsMaterials' | 'specificationsExecution' | 'specificationsQualityAssurance' | 'customFields'>
  & { bpaLinks: Array<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  >, next: Maybe<(
    { __typename: 'Element' }
    & Pick<Element, 'id'>
  )>, prev: Maybe<(
    { __typename: 'Element' }
    & Pick<Element, 'id'>
  )> }
);

export type ElementListFragmentFragment = (
  { __typename: 'Element' }
  & Pick<Element, 'id' | 'number' | 'name' | 'description' | 'priority' | 'analysisStatus' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount' | 'customFields'>
);

export type SaveElementMutationVariables = {
  input: ElementInput
};


export type SaveElementMutation = (
  { __typename: 'RootMutationType' }
  & { saveElement: Maybe<{ __typename: 'Element' }
    & ElementFormFragmentFragment
  > }
);

export type EmployeeMonthlyGoalsQueryVariables = {
  month: Scalars['String'],
  startDate: Scalars['String'],
  endDate: Scalars['String']
};


export type EmployeeMonthlyGoalsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs' | 'department' | 'firstName' | 'lastName' | 'revisedBillableGoal' | 'revisedBillableTarget' | 'originalBillableTarget' | 'workingHours'>
    & { dayTarget: Employee['revisedBillableTarget'] }
    & { billableHours: Array<(
      { __typename: 'DynamicMetric' }
      & Pick<DynamicMetric, 'sum' | 'name' | 'date'>
    )>, billableHoursNoOpportunities: Array<(
      { __typename: 'DynamicMetric' }
      & Pick<DynamicMetric, 'sum' | 'name' | 'date'>
    )>, yesterdayBillableHours: Array<(
      { __typename: 'DynamicMetric' }
      & Pick<DynamicMetric, 'sum' | 'name' | 'date'>
    )>, originalBillableGoal: Maybe<(
      { __typename: 'Goal' }
      & Pick<Goal, 'id' | 'value' | 'name'>
    )>, billableGoals: Array<(
      { __typename: 'BillableGoal' }
      & Pick<BillableGoal, 'id' | 'effectiveDate' | 'fixed' | 'percentage' | 'goal'>
    )>, billableGoalReductions: Array<(
      { __typename: 'BillableGoalReduction' }
      & Pick<BillableGoalReduction, 'id' | 'itemDate' | 'amount'>
    )>, user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
      & { timesheets: Maybe<Array<Maybe<(
        { __typename: 'Timesheet' }
        & Pick<Timesheet, 'id' | 'hours'>
      )>>> }
    )> }
  )> }
);

export type EmployeeForecastsQueryVariables = {
  year: Scalars['Int']
};


export type EmployeeForecastsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<{ __typename: 'Employee' }
    & EmployeeForecastsEmployeeFieldsFragment
  > }
);

export type EmployeeForecastsEmployeeFieldsFragment = (
  { __typename: 'Employee' }
  & Pick<Employee, 'id' | 'displayAs' | 'sortAs' | 'department' | 'future' | 'firstName' | 'lastName' | 'description' | 'startDate'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, forecasts: Array<(
    { __typename: 'EmployeeForecast' }
    & Pick<EmployeeForecast, 'date' | 'goal' | 'cost' | 'rate' | 'gp' | 'sales'>
  )> }
);

export type SaveGoalMutationVariables = {
  input: GoalInput
};


export type SaveGoalMutation = (
  { __typename: 'RootMutationType' }
  & { saveGoal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type SetGoalMutationVariables = {
  input?: Maybe<GoalInput>
};


export type SetGoalMutation = (
  { __typename: 'RootMutationType' }
  & { setGoal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'name' | 'date' | 'period' | 'value'>
  )> }
);

export type DeleteInfoImageMutationVariables = {
  id: Scalars['ID']
};


export type DeleteInfoImageMutation = (
  { __typename: 'RootMutationType' }
  & { deleteInfoImage: Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id'>
  )> }
);

export type DeleteImageReferenceMutationVariables = {
  id: Scalars['ID']
};


export type DeleteImageReferenceMutation = (
  { __typename: 'RootMutationType' }
  & { deleteImageReference: Maybe<(
    { __typename: 'ImageReference' }
    & Pick<ImageReference, 'id'>
  )> }
);

export type InfoImageQueryVariables = {
  id: Scalars['ID']
};


export type InfoImageQuery = (
  { __typename: 'RootQueryType' }
  & { infoImage: Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id' | 'category' | 'description' | 'attachmentUrl'>
  )> }
);

export type InfoImageFieldsFragment = (
  { __typename: 'InfoImage' }
  & Pick<InfoImage, 'id' | 'position' | 'category' | 'description' | 'attachmentUrl'>
  & { attachment: (
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  ) }
);

export type InfoImagesQueryVariables = {
  number: Scalars['String']
};


export type InfoImagesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'mainPhotoType' | 'mainPhotoId'>
    & { infoImages: Array<{ __typename: 'InfoImage' }
      & InfoImageFieldsFragment
    > }
  ) }
);

export type ImageReferenceFragmentFragment = (
  { __typename: 'ImageReference' }
  & Pick<ImageReference, 'id' | 'rank'>
  & { infoImage: Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id' | 'category' | 'description' | 'attachmentUrl'>
    & { attachment: (
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    ) }
  )> }
);

export type MainPhotoImageQueryVariables = {
  id: Scalars['ID']
};


export type MainPhotoImageQuery = (
  { __typename: 'RootQueryType' }
  & { image: Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id' | 'attachmentUrl'>
  )> }
);

export type MoveImageReferenceMutationVariables = {
  input: ImageReferenceInput
};


export type MoveImageReferenceMutation = (
  { __typename: 'RootMutationType' }
  & { moveImageReference: Maybe<Array<Maybe<(
    { __typename: 'ImageReference' }
    & Pick<ImageReference, 'id' | 'rank'>
  )>>> }
);

export type SaveInfoImageMutationVariables = {
  input: InfoImageInput
};


export type SaveInfoImageMutation = (
  { __typename: 'RootMutationType' }
  & { saveInfoImage: Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id'>
  )> }
);

export type SaveImageReferenceMutationVariables = {
  input: ImageReferenceInput
};


export type SaveImageReferenceMutation = (
  { __typename: 'RootMutationType' }
  & { saveImageReference: Maybe<{ __typename: 'ImageReference' }
    & ImageReferenceFragmentFragment
  > }
);

export type SaveImageReferencesMutationVariables = {
  input: ImageReferencesInput
};


export type SaveImageReferencesMutation = (
  { __typename: 'RootMutationType' }
  & { saveImageReferences: Maybe<Array<Maybe<{ __typename: 'ImageReference' }
    & ImageReferenceFragmentFragment
  >>> }
);

export type SortInfoImageMutationVariables = {
  input: InfoImageInput
};


export type SortInfoImageMutation = (
  { __typename: 'RootMutationType' }
  & { sortInfoImage: Maybe<Array<Maybe<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id' | 'position'>
  )>>> }
);

export type ApplyDeliverableToInvoicelinesMutationVariables = {
  deliverableId?: Maybe<Scalars['ID']>,
  billedPosition?: Maybe<Scalars['String']>,
  invoicelineIds: Array<Maybe<Scalars['ID']>>
};


export type ApplyDeliverableToInvoicelinesMutation = (
  { __typename: 'RootMutationType' }
  & { applyDeliverableToInvoicelines: Maybe<Array<Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'billedPosition' | 'rate' | 'lineTotal'>
    & { deliverable: Maybe<(
      { __typename: 'Deliverable' }
      & Pick<Deliverable, 'id' | 'description'>
    )>, invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
      & { invoicedDeliverables: Array<(
        { __typename: 'InvoicedDeliverable' }
        & Pick<InvoicedDeliverable, 'id' | 'description' | 'fixedFee'>
        & { deliverable: (
          { __typename: 'Deliverable' }
          & Pick<Deliverable, 'id' | 'description' | 'rank'>
          & { milestoneparent: (
            { __typename: 'Milestoneparent' }
            & Pick<Milestoneparent, 'id' | 'title'>
          ) }
        ) }
      )> }
    ) }
  )>>> }
);

export type BilledHoursQueryVariables = {
  month: Scalars['String'],
  userId: Scalars['ID']
};


export type BilledHoursQuery = (
  { __typename: 'RootQueryType' }
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { employee: Maybe<(
      { __typename: 'Employee' }
      & Pick<Employee, 'id'>
      & { monthlyPayments: Array<(
        { __typename: 'MonthlyPayment' }
        & Pick<MonthlyPayment, 'id' | 'date' | 'amount' | 'category' | 'updatedAt'>
      )>, salaries: Array<{ __typename: 'Salary' }
        & BilledHoursSalaryFieldsFragment
      > }
    )> }
  ), invoicelines: Array<{ __typename: 'Invoiceline' }
    & BilledHoursInvoicelineFieldsFragment
  > }
);

export type BilledHoursSalaryFieldsFragment = (
  { __typename: 'Salary' }
  & Pick<Salary, 'id' | 'effectiveDate' | 'hourlyRates'>
);

export type BilledHoursInvoicelineFieldsFragment = (
  { __typename: 'Invoiceline' }
  & Pick<Invoiceline, 'id' | 'itemDate' | 'noCharge' | 'billedPosition' | 'description' | 'nonBillable' | 'testimony' | 'hours' | 'allowPayment'>
  & { deliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description'>
  )>, invoice: (
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'status' | 'invoiceDate'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'rate' | 'projectType'>
    ) }
  ) }
);

export type CopyToFilesMutationVariables = {
  projectId: Scalars['ID']
};


export type CopyToFilesMutation = (
  { __typename: 'RootMutationType' }
  & { copyInvoicesToFiles: Maybe<Array<Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )>>> }
);

export type CreateAttachmentMutationVariables = {
  input?: Maybe<AttachmentInput>
};


export type CreateAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { createAttachment: Maybe<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'prepend' | 'attachmentUrl'>
    & { attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )> }
);

export type DnbInvoicesMutationVariables = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type DnbInvoicesMutation = (
  { __typename: 'RootMutationType' }
  & { dnbInvoices: Maybe<Array<Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'status'>
  )>>> }
);

export type DelayEntriesMutationVariables = {
  invoiceId: Scalars['ID'],
  invoicelineIds: Array<Maybe<Scalars['ID']>>
};


export type DelayEntriesMutation = (
  { __typename: 'RootMutationType' }
  & { delayInvoicelines: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'invoiceTotal'>
  )> }
);

export type DeleteInvoiceAttachmentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteInvoiceAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAttachment: Maybe<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id'>
  )> }
);

export type DeleteInvoicelineMutationVariables = {
  id: Scalars['ID']
};


export type DeleteInvoicelineMutation = (
  { __typename: 'RootMutationType' }
  & { deleteInvoiceline: Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id'>
    & { invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
    ) }
  )> }
);

export type EditInvoiceQueryVariables = {
  id: Scalars['ID']
};


export type EditInvoiceQuery = (
  { __typename: 'RootQueryType' }
  & { invoice: { __typename: 'Invoice' }
    & EditInvoiceFieldsFragment
   }
);

export type EditInvoiceAttachmentFieldsFragment = (
  { __typename: 'Attachment' }
  & Pick<Attachment, 'id' | 'prepend' | 'attachmentUrl'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )> }
);

export type EditInvoiceInvoiceLineFieldsFragment = (
  { __typename: 'Invoiceline' }
  & Pick<Invoiceline, 'id' | 'itemDate' | 'hours' | 'rate' | 'lineTotal' | 'isExpense' | 'testimony' | 'noCharge' | 'nonBillable' | 'billedPosition' | 'description' | 'category'>
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname' | 'email'>
  ), deliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description'>
  )>, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  ), invoice: (
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id'>
  ) }
);

export type EditInvoiceInvoicedDeliverableFieldsFragment = (
  { __typename: 'InvoicedDeliverable' }
  & Pick<InvoicedDeliverable, 'id' | 'description' | 'fixedFee'>
  & { deliverable: (
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description' | 'rank'>
    & { milestoneparent: (
      { __typename: 'Milestoneparent' }
      & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
    ) }
  ) }
);

export type EditInvoiceFieldsFragment = (
  { __typename: 'Invoice' }
  & Pick<Invoice, 'id' | 'invoiceDate' | 'invoiceTotal' | 'invoiceType' | 'viewByDeliverable' | 'memo' | 'displayLines' | 'description' | 'status'>
  & { attachments: Array<{ __typename: 'Attachment' }
    & EditInvoiceAttachmentFieldsFragment
  >, invoicedDeliverables: Array<{ __typename: 'InvoicedDeliverable' }
    & EditInvoiceInvoicedDeliverableFieldsFragment
  >, invoicelines: Array<{ __typename: 'Invoiceline' }
    & EditInvoiceInvoiceLineFieldsFragment
  >, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'rate' | 'number' | 'name' | 'invoiceNote' | 'status' | 'projectType' | 'billingSummary'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id'>
    ), pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, projectUsers: Array<(
      { __typename: 'ProjectUser' }
      & Pick<ProjectUser, 'id' | 'role'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      ) }
    )>, memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'invoicing'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs' | 'workPhone' | 'directPhone' | 'extension' | 'mobile' | 'email' | 'clientAccess'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )>, residences: Array<{ __typename: 'Residence' }
          & ResidenceFragmentFragment
        > }
      ) }
    )> }
  ) }
);

export type EditInvoiceAdjustmentQueryVariables = {
  id: Scalars['ID']
};


export type EditInvoiceAdjustmentQuery = (
  { __typename: 'RootQueryType' }
  & { invoice: (
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'invoiceDate' | 'invoiceTotal' | 'invoiceType' | 'viewByDeliverable' | 'description'>
  ) }
);

export type ProjectInvoicesQueryVariables = {
  number: Scalars['String']
};


export type ProjectInvoicesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'totalInvoices' | 'totalPayments' | 'totalDue'>
    & { invoices: Array<(
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'status' | 'attachmentUrl' | 'invoiceDate' | 'invoiceTotal' | 'paymentTotal'>
      & { appliedPayments: Maybe<Array<Maybe<(
        { __typename: 'AppliedPayment' }
        & Pick<AppliedPayment, 'id' | 'amount'>
        & { payment: Maybe<(
          { __typename: 'Payment' }
          & Pick<Payment, 'id' | 'amount' | 'payor' | 'checkNumber' | 'claimNumber' | 'checkDate'>
          & { retainer: Maybe<(
            { __typename: 'Retainer' }
            & Pick<Retainer, 'id' | 'checkDate'>
          )> }
        )>, creditMemo: Maybe<(
          { __typename: 'CreditMemo' }
          & Pick<CreditMemo, 'id' | 'itemDate' | 'amount'>
        )>, refund: Maybe<(
          { __typename: 'Refund' }
          & Pick<Refund, 'id' | 'payer' | 'amount' | 'itemDate'>
        )> }
      )>>> }
    )>, payments: Array<(
      { __typename: 'Payment' }
      & Pick<Payment, 'id' | 'checkDate' | 'amount'>
    )>, retainers: Array<(
      { __typename: 'Retainer' }
      & Pick<Retainer, 'id' | 'checkDate' | 'amount'>
      & { payments: Array<(
        { __typename: 'Payment' }
        & Pick<Payment, 'id' | 'amount'>
      )> }
    )>, refunds: Array<(
      { __typename: 'Refund' }
      & Pick<Refund, 'id' | 'payer' | 'amount' | 'itemDate'>
    )> }
  ) }
);

export type GenerateInvoiceMutationVariables = {
  timesheetIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  invoicelineIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  number: Scalars['String']
};


export type GenerateInvoiceMutation = (
  { __typename: 'RootMutationType' }
  & { generateInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id'>
  )> }
);

export type ProjectInvoiceLinesQueryVariables = {
  number: Scalars['String']
};


export type ProjectInvoiceLinesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { invoicelines: Array<(
      { __typename: 'Invoiceline' }
      & Pick<Invoiceline, 'id' | 'description' | 'itemDate' | 'billedPosition' | 'noCharge' | 'nonBillable' | 'hours' | 'rate' | 'lineTotal'>
      & { deliverable: Maybe<(
        { __typename: 'Deliverable' }
        & Pick<Deliverable, 'id' | 'description'>
        & { milestoneparent: (
          { __typename: 'Milestoneparent' }
          & Pick<Milestoneparent, 'id' | 'title'>
        ) }
      )>, user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      ) }
    )> }
  ) }
);

export type MailInvoicesMutationVariables = {
  ids: Array<Maybe<Scalars['String']>>
};


export type MailInvoicesMutation = (
  { __typename: 'RootMutationType' }
  & { mailInvoices: Maybe<Array<Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'mailedAt' | 'updatedAt'>
  )>>> }
);

export type NoChargeInvoicelinesMutationVariables = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type NoChargeInvoicelinesMutation = (
  { __typename: 'RootMutationType' }
  & { noChargeInvoicelines: Maybe<Array<Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'noCharge'>
    & { invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
    ) }
  )>>> }
);

export type NoChargesQueryVariables = {
  month: Scalars['String'],
  billedDuringMonth: Scalars['Boolean']
};


export type NoChargesQuery = (
  { __typename: 'RootQueryType' }
  & { invoicelines: Array<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'hours' | 'lineTotal' | 'noCharge' | 'nonBillable' | 'itemDate' | 'description'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ), user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    ) }
  )> }
);

export type ReportDnbInvoicesQueryVariables = {};


export type ReportDnbInvoicesQuery = (
  { __typename: 'RootQueryType' }
  & { invoices: Array<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'invoiceTotal' | 'invoiceDate'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'salesStageId'>
    ) }
  )> }
);

export type ReportInvoiceStatusQueryVariables = {};


export type ReportInvoiceStatusQuery = (
  { __typename: 'RootQueryType' }
  & { invoices: Array<{ __typename: 'Invoice' }
    & ReportInvoiceStatusFieldsFragment
  > }
);

export type ReportInvoiceStatusFieldsFragment = (
  { __typename: 'Invoice' }
  & Pick<Invoice, 'id' | 'invoiceTotal' | 'status' | 'invoiceDate' | 'nonBillableTotal' | 'noChargeTotal'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType' | 'prioritizeInvoices'>
  )
    & TeamFieldsFragment
   }
);

export type InvoicesToReviewQueryVariables = {
  login: Scalars['String']
};


export type InvoicesToReviewQuery = (
  { __typename: 'RootQueryType' }
  & { invoices: Array<{ __typename: 'Invoice' }
    & InvoicesToReviewFieldsFragment
  > }
);

export type InvoicesToReviewFieldsFragment = (
  { __typename: 'Invoice' }
  & Pick<Invoice, 'id' | 'status' | 'invoiceDate' | 'invoiceTotal' | 'nonBillableTotal' | 'noChargeTotal'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'prioritizeInvoices' | 'name' | 'number'>
    & { pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  ) }
);

export type SaveInvoiceAdjustmentMutationVariables = {
  input: InvoiceInput
};


export type SaveInvoiceAdjustmentMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'isAdjustment' | 'status' | 'attachmentUrl' | 'invoiceDate' | 'invoiceTotal' | 'paymentTotal' | 'emailedAt' | 'mailedAt'>
    & { appliedPayments: Maybe<Array<Maybe<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
      & { payment: Maybe<(
        { __typename: 'Payment' }
        & Pick<Payment, 'id' | 'description' | 'amount' | 'checkDate' | 'payor' | 'claimNumber' | 'checkNumber'>
      )> }
    )>>> }
  )> }
);

export type SplitInvoicelineMutationVariables = {
  id: Scalars['ID']
};


export type SplitInvoicelineMutation = (
  { __typename: 'RootMutationType' }
  & { splitInvoiceline: (
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'itemDate' | 'hours' | 'rate' | 'lineTotal' | 'isExpense' | 'testimony' | 'noCharge' | 'nonBillable' | 'billedPosition' | 'description' | 'category'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname' | 'email'>
    ), deliverable: Maybe<(
      { __typename: 'Deliverable' }
      & Pick<Deliverable, 'id' | 'description'>
    )>, project: (
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    ), invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
    ) }
  ) }
);

export type SubmitInvoiceMutationVariables = {
  id: Scalars['ID'],
  mode: Scalars['String']
};


export type SubmitInvoiceMutation = (
  { __typename: 'RootMutationType' }
  & { submitInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'status'>
  )> }
);

export type InvoiceToMailQueryVariables = {};


export type InvoiceToMailQuery = (
  { __typename: 'RootQueryType' }
  & { invoices: Array<{ __typename: 'Invoice' }
    & InvoiceToMailFragmentFragment
  > }
);

export type InvoiceToMailFragmentFragment = (
  { __typename: 'Invoice' }
  & Pick<Invoice, 'id' | 'sentAt' | 'invoiceDate' | 'emailedAt' | 'mailedAt'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
    & { memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'invoicing'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      ) }
    )> }
  ) }
);

export type UnbilledTimeQueryVariables = {
  number: Scalars['String']
};


export type UnbilledTimeQuery = (
  { __typename: 'RootQueryType' }
  & { timesheets: Array<(
    { __typename: 'Timesheet' }
    & Pick<Timesheet, 'id' | 'description' | 'itemDate' | 'hours' | 'noCharge' | 'rate' | 'isExpense' | 'billedPosition' | 'total'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'email' | 'login'>
    ), deliverable: Maybe<{ __typename: 'Deliverable' }
      & UnbilledDeliverableFragmentFragment
    > }
  )>, invoicelines: Array<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'description' | 'itemDate' | 'hours' | 'noCharge' | 'nonBillable' | 'rate' | 'isExpense' | 'billedPosition' | 'lineTotal'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'email' | 'login'>
    ), invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id'>
      & { project: (
        { __typename: 'Project' }
        & Pick<Project, 'id' | 'number'>
      ) }
    ), project: (
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    ), deliverable: Maybe<{ __typename: 'Deliverable' }
      & UnbilledDeliverableFragmentFragment
    > }
  )>, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'projectType'>
    & { plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id'>
      & { deliverables: Array<(
        { __typename: 'Deliverable' }
        & Pick<Deliverable, 'id' | 'description'>
        & { milestoneparent: (
          { __typename: 'Milestoneparent' }
          & Pick<Milestoneparent, 'id' | 'title'>
        ) }
      )> }
    ) }
  ) }
);

export type UnbilledDeliverableFragmentFragment = (
  { __typename: 'Deliverable' }
  & Pick<Deliverable, 'id' | 'description' | 'priority' | 'rank'>
  & { milestoneparent: (
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id' | 'title'>
  ) }
);

export type UpdateInvoiceAttachmentMutationVariables = {
  input: InvoiceInput
};


export type UpdateInvoiceAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'attachmentUrl'>
  )> }
);

export type UpdateInvoiceDateMutationVariables = {
  input: InvoiceInput
};


export type UpdateInvoiceDateMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'invoiceDate'>
  )> }
);

export type UpdateFixedFeeInvoiceMutationVariables = {
  input: InvoiceInput
};


export type UpdateFixedFeeInvoiceMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'displayLines' | 'description' | 'invoiceTotal'>
  )> }
);

export type UpdateInvoicedDeliverableMutationVariables = {
  id: Scalars['ID'],
  input: InvoicedDeliverableInput
};


export type UpdateInvoicedDeliverableMutation = (
  { __typename: 'RootMutationType' }
  & { updateInvoicedDeliverable: Maybe<(
    { __typename: 'InvoicedDeliverable' }
    & Pick<InvoicedDeliverable, 'id' | 'fixedFee' | 'description'>
    & { invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
    ) }
  )> }
);

export type UpdateInvoicelineMutationVariables = {
  id: Scalars['ID'],
  input: InvoicelineInput
};


export type UpdateInvoicelineMutation = (
  { __typename: 'RootMutationType' }
  & { updateInvoiceline: Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'description' | 'itemDate' | 'hours' | 'noCharge' | 'billedPosition' | 'testimony' | 'nonBillable' | 'category' | 'rate' | 'lineTotal'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname' | 'login' | 'email'>
    ), deliverable: Maybe<(
      { __typename: 'Deliverable' }
      & Pick<Deliverable, 'id' | 'description' | 'priority' | 'rank'>
      & { milestoneparent: (
        { __typename: 'Milestoneparent' }
        & Pick<Milestoneparent, 'id' | 'title'>
      ) }
    )>, project: (
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    ), invoice: (
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'invoiceTotal'>
      & { invoicedDeliverables: Array<(
        { __typename: 'InvoicedDeliverable' }
        & Pick<InvoicedDeliverable, 'id' | 'description' | 'fixedFee'>
        & { deliverable: (
          { __typename: 'Deliverable' }
          & Pick<Deliverable, 'id' | 'description' | 'rank'>
          & { milestoneparent: (
            { __typename: 'Milestoneparent' }
            & Pick<Milestoneparent, 'id' | 'title'>
          ) }
        ) }
      )> }
    ) }
  )> }
);

export type UpdateInvoicelineDescriptionMutationVariables = {
  id: Scalars['ID'],
  input: InvoicelineInput
};


export type UpdateInvoicelineDescriptionMutation = (
  { __typename: 'RootMutationType' }
  & { updateInvoiceline: Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'description'>
  )> }
);

export type UpdateInvoiceLineMutationVariables = {
  id: Scalars['ID'],
  input: InvoicelineInput
};


export type UpdateInvoiceLineMutation = (
  { __typename: 'RootMutationType' }
  & { updateInvoiceline: Maybe<(
    { __typename: 'Invoiceline' }
    & Pick<Invoiceline, 'id' | 'allowPayment'>
  )> }
);

export type UpdateInvoiceMemoMutationVariables = {
  input: InvoiceInput
};


export type UpdateInvoiceMemoMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'memo'>
  )> }
);

export type UpdateInvoiceModesMutationVariables = {
  input: InvoiceInput
};


export type UpdateInvoiceModesMutation = (
  { __typename: 'RootMutationType' }
  & { saveInvoice: Maybe<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'viewByDeliverable' | 'invoiceType' | 'invoiceTotal'>
  )> }
);

export type IssuesQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type IssuesQuery = (
  { __typename: 'RootQueryType' }
  & { issues: Array<{ __typename: 'Issue' }
    & IssueFragmentFragment
  >, documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'displayName'>
  )> }
);

export type DeleteIssueMutationVariables = {
  id: Scalars['ID']
};


export type DeleteIssueMutation = (
  { __typename: 'RootMutationType' }
  & { deleteIssue: Maybe<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id'>
  )> }
);

export type IssueQueryVariables = {
  id: Scalars['ID']
};


export type IssueQuery = (
  { __typename: 'RootQueryType' }
  & { issue: Maybe<{ __typename: 'Issue' }
    & IssueFormFragmentFragment
  > }
);

export type IssueFormFragmentFragment = (
  { __typename: 'Issue' }
  & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description' | 'header' | 'status' | 'analysisStatus' | 'priority' | 'basicAnalysis' | 'iiaccIssue' | 'iiaccInvestigation' | 'iiaccAnalysis' | 'iiaccConclusion' | 'iiaccCosts' | 'specificationsGeneral' | 'specificationsMaterials' | 'specificationsExecution' | 'specificationsQualityAssurance' | 'customFields'>
  & { issue: Maybe<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id'>
  )>, sourceDocument: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )>, bpaLinks: Maybe<Array<Maybe<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  >>>, next: Maybe<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id'>
  )>, prev: Maybe<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id'>
  )> }
);

export type IssueFragmentFragment = (
  { __typename: 'Issue' }
  & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount' | 'header' | 'analysisStatus' | 'customFields' | 'priority'>
  & { issue: Maybe<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id'>
  )>, elements: Maybe<Array<Maybe<(
    { __typename: 'Element' }
    & Pick<Element, 'id' | 'number' | 'name'>
  )>>>, sourceDocument: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )> }
);

export type IssuesPickerQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type IssuesPickerQuery = (
  { __typename: 'RootQueryType' }
  & { issues: Array<{ __typename: 'Issue' }
    & IssueFragmentFragment
  > }
);

export type SaveIssueMutationVariables = {
  input: IssueInput
};


export type SaveIssueMutation = (
  { __typename: 'RootMutationType' }
  & { saveIssue: Maybe<{ __typename: 'Issue' }
    & IssueFormFragmentFragment
  > }
);

export type CreateStandardLocationsMutationVariables = {
  projectId: Scalars['ID']
};


export type CreateStandardLocationsMutation = (
  { __typename: 'RootMutationType' }
  & { createStandardLocations: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { locations: Array<{ __typename: 'Location' }
      & LocationRowFragmentFragment
    >, addresses: Array<{ __typename: 'Address' }
      & AddressFragmentFragment
    > }
  )> }
);

export type DeleteLocationMutationVariables = {
  id: Scalars['ID']
};


export type DeleteLocationMutation = (
  { __typename: 'RootMutationType' }
  & { deleteLocation: Maybe<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )> }
);

export type LocationQueryVariables = {
  id: Scalars['ID']
};


export type LocationQuery = (
  { __typename: 'RootQueryType' }
  & { location: Maybe<{ __typename: 'Location' }
    & LocationFormFragmentFragment
  > }
);

export type ProjectLocationsQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type ProjectLocationsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { locations: Array<{ __typename: 'Location' }
      & LocationFragmentFragment
    > }
  ) }
);

export type LocationFormFragmentFragment = (
  { __typename: 'Location' }
  & Pick<Location, 'id' | 'name' | 'specificationsGeneral' | 'specificationsMaterials' | 'specificationsExecution' | 'specificationsQualityAssurance' | 'analysisStatus' | 'priority' | 'customFields' | 'iiaccIssue' | 'iiaccInvestigation' | 'iiaccAnalysis' | 'iiaccConclusion' | 'iiaccCosts' | 'basicAnalysis'>
  & { location: Maybe<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )>, bpaLinks: Maybe<Array<Maybe<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  >>>, next: Maybe<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )>, prev: Maybe<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )> }
);

export type LocationsQueryVariables = {
  id: Scalars['ID']
};


export type LocationsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { locations: Array<{ __typename: 'Location' }
      & LocationRowFragmentFragment
    >, addresses: Array<{ __typename: 'Address' }
      & AddressFragmentFragment
    > }
  ) }
);

export type LocationFragmentFragment = (
  { __typename: 'Location' }
  & Pick<Location, 'id' | 'name' | 'nestedName' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
  & { location: Maybe<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )> }
);

export type LocationRowFragmentFragment = (
  { __typename: 'Location' }
  & Pick<Location, 'priority' | 'analysisStatus' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'customFields'>
)
  & LocationFragmentFragment
;

export type LocationsPickerQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type LocationsPickerQuery = (
  { __typename: 'RootQueryType' }
  & { locations: Array<{ __typename: 'Location' }
    & LocationRowFragmentFragment
  > }
);

export type SaveLocationMutationVariables = {
  input: LocationInput
};


export type SaveLocationMutation = (
  { __typename: 'RootMutationType' }
  & { saveLocation: Maybe<{ __typename: 'Location' }
    & LocationFormFragmentFragment
  > }
);

export type ActiveProjectsMetricQueryVariables = {
  quarter: Scalars['String']
};


export type ActiveProjectsMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type AnnualMetricsQueryVariables = {
  types: Array<Maybe<Scalars['String']>>,
  start: Scalars['String'],
  end: Scalars['String']
};


export type AnnualMetricsQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count' | 'format' | 'sum' | 'name' | 'currentOnly'>
  )> }
);

export type AuditCountQueryVariables = {
  quarter: Scalars['String'],
  user?: Maybe<Scalars['String']>
};


export type AuditCountQuery = (
  { __typename: 'RootQueryType' }
  & { audits: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, activeProjects: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )> }
);

export type BillableHoursCountQueryVariables = {
  quarter: Scalars['String'],
  filter?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>
};


export type BillableHoursCountQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'sum'>
  )>, goals: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'sum'>
  )>, targets: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'sum'>
  )> }
);

export type CallsMetricQueryVariables = {
  quarter: Scalars['String']
};


export type CallsMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type DashboardCampaignsQueryVariables = {
  quarter: Scalars['String']
};


export type DashboardCampaignsQuery = (
  { __typename: 'RootQueryType' }
  & { metrics: Array<{ __typename: 'Metric' }
    & DashboardCampaignFieldsFragment
  > }
);

export type DashboardCampaignFieldsFragment = (
  { __typename: 'Metric' }
  & Pick<Metric, 'id' | 'captureDate' | 'category'>
  & { campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name' | 'percentCompleted'>
  )> }
);

export type ConversionRatesQueryVariables = {};


export type ConversionRatesQuery = (
  { __typename: 'RootQueryType' }
  & { conversionRates: Array<(
    { __typename: 'ConversionRate' }
    & Pick<ConversionRate, 'stage' | 'to10' | 'to30' | 'to50' | 'to70' | 'to90' | 'to0' | 'to100' | 'count'>
  )> }
);

export type CreateMetricMutationVariables = {
  input?: Maybe<MetricInput>
};


export type CreateMetricMutation = (
  { __typename: 'RootMutationType' }
  & { createMetric: Maybe<(
    { __typename: 'Metric' }
    & Pick<Metric, 'id' | 'captureDate' | 'category' | 'rank'>
    & { data: (
      { __typename: 'MetricValue' }
      & Pick<MetricValue, 'value' | 'description'>
    ), campaign: Maybe<(
      { __typename: 'Campaign' }
      & Pick<Campaign, 'id' | 'name' | 'percentCompleted'>
    )> }
  )> }
);

export type DeleteMetricMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMetricMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMetric: Maybe<(
    { __typename: 'Metric' }
    & Pick<Metric, 'id'>
  )> }
);

export type HeadCountQueryVariables = {
  quarter: Scalars['String']
};


export type HeadCountQuery = (
  { __typename: 'RootQueryType' }
  & { employeeCount: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count' | 'notes'>
  )>, contractorCount: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count' | 'notes'>
  )> }
);

export type ProspectMeetingsMetricQueryVariables = {
  quarter: Scalars['String']
};


export type ProspectMeetingsMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type SalesMilestonesQueryVariables = {
  quarter: Scalars['String']
};


export type SalesMilestonesQuery = (
  { __typename: 'RootQueryType' }
  & { metrics: Array<{ __typename: 'Metric' }
    & SalesMilestonesMetricFieldsFragment
  > }
);

export type SalesMilestonesMetricFieldsFragment = (
  { __typename: 'Metric' }
  & Pick<Metric, 'id' | 'captureDate' | 'rank' | 'category'>
  & { data: (
    { __typename: 'MetricValue' }
    & Pick<MetricValue, 'value' | 'description'>
  ) }
);

export type NewOpportunitiesMetricQueryVariables = {
  quarter: Scalars['String']
};


export type NewOpportunitiesMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type NewProjectVolumeQueryVariables = {
  start: Scalars['String'],
  end: Scalars['String']
};


export type NewProjectVolumeQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count' | 'sum'>
  )> }
);

export type NewProjectsMetricQueryVariables = {
  quarter: Scalars['String']
};


export type NewProjectsMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type PpmCountQueryVariables = {
  quarter: Scalars['String'],
  user?: Maybe<Scalars['String']>
};


export type PpmCountQuery = (
  { __typename: 'RootQueryType' }
  & { ppms: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, activeProjects: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )> }
);

export type PlannedCountQueryVariables = {
  quarter: Scalars['String']
};


export type PlannedCountQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, projectCount: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )> }
);

export type ProjectMetricsQueryVariables = {
  quarter: Scalars['String'],
  user?: Maybe<Scalars['String']>
};


export type ProjectMetricsQuery = (
  { __typename: 'RootQueryType' }
  & { audits: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, myAudits: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, ppms: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, activeProjects: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )> }
);

export type SalesFunnelQueryVariables = {};


export type SalesFunnelQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'sum' | 'count' | 'name' | 'extraInt' | 'date'>
  )>, salesStages: Array<(
    { __typename: 'SalesStage' }
    & Pick<SalesStage, 'id' | 'probability' | 'description'>
  )> }
);

export type SalesMetricsQueryVariables = {
  user?: Maybe<Scalars['String']>,
  date: Scalars['Date'],
  period?: Maybe<Scalars['String']>
};


export type SalesMetricsQuery = (
  { __typename: 'RootQueryType' }
  & { salesMetrics: Array<(
    { __typename: 'SalesMetric' }
    & Pick<SalesMetric, 'name' | 'category' | 'points' | 'totalOnly' | 'score' | 'count' | 'date'>
  )> }
);

export type ShippedProposalsMetricQueryVariables = {
  quarter: Scalars['String']
};


export type ShippedProposalsMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type SortMetricMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type SortMetricMutation = (
  { __typename: 'RootMutationType' }
  & { sortMetric: Maybe<Array<Maybe<(
    { __typename: 'Metric' }
    & Pick<Metric, 'id' | 'rank'>
  )>>> }
);

export type SurveysCountQueryVariables = {
  quarter: Scalars['String']
};


export type SurveysCountQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count' | 'sum'>
  )> }
);

export type TenTouchesMetricQueryVariables = {
  quarter: Scalars['String']
};


export type TenTouchesMetricQuery = (
  { __typename: 'RootQueryType' }
  & { months: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date'>
  )>, started: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, completed: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )> }
);

export type UpdateMetricMutationVariables = {
  id?: Maybe<Scalars['ID']>,
  input?: Maybe<MetricInput>
};


export type UpdateMetricMutation = (
  { __typename: 'RootMutationType' }
  & { updateMetric: Maybe<(
    { __typename: 'Metric' }
    & Pick<Metric, 'id' | 'captureDate' | 'rank' | 'category'>
    & { data: (
      { __typename: 'MetricValue' }
      & Pick<MetricValue, 'value' | 'description'>
    ) }
  )> }
);

export type WonOpportunitiesMetricQueryVariables = {
  quarter: Scalars['String']
};


export type WonOpportunitiesMetricQuery = (
  { __typename: 'RootQueryType' }
  & { dynamicMetrics: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'date' | 'count'>
  )>, goal: Maybe<(
    { __typename: 'Goal' }
    & Pick<Goal, 'id' | 'value'>
  )> }
);

export type CreateMilestoneParentMutationVariables = {
  input: MilestoneparentInput
};


export type CreateMilestoneParentMutation = (
  { __typename: 'RootMutationType' }
  & { createMilestoneparent: Maybe<(
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
    & { deliverables: Array<{ __typename: 'Deliverable' }
      & DeliverableFragmentFragment
    > }
  )> }
);

export type DeleteMilestoneParentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMilestoneParentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMilestoneparent: Maybe<(
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id'>
  )> }
);

export type MoveMilestoneParentMutationVariables = {
  id: Scalars['ID'],
  position: Scalars['Int']
};


export type MoveMilestoneParentMutation = (
  { __typename: 'RootMutationType' }
  & { moveMilestoneparent: Maybe<Array<Maybe<(
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id' | 'rank'>
  )>>> }
);

export type MilestoneParentsQueryVariables = {
  planId: Scalars['ID']
};


export type MilestoneParentsQuery = (
  { __typename: 'RootQueryType' }
  & { milestoneparents: Array<{ __typename: 'Milestoneparent' }
    & MilestoneParentsFieldsFragment
  > }
);

export type MilestoneParentsFieldsFragment = (
  { __typename: 'Milestoneparent' }
  & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
);

export type UpdateMilestoneParentMutationVariables = {
  id: Scalars['ID'],
  input: MilestoneparentInput
};


export type UpdateMilestoneParentMutation = (
  { __typename: 'RootMutationType' }
  & { updateMilestoneparent: Maybe<(
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id' | 'title'>
  )> }
);

export type OfficeQueryVariables = {
  id: Scalars['ID']
};


export type OfficeQuery = (
  { __typename: 'RootQueryType' }
  & { office: Maybe<{ __typename: 'Office' }
    & OfficeFragmentFragment
  > }
);

export type OfficesQueryVariables = {};


export type OfficesQuery = (
  { __typename: 'RootQueryType' }
  & { offices: Array<{ __typename: 'Office' }
    & OfficeFragmentFragment
  > }
);

export type OfficeFragmentFragment = (
  { __typename: 'Office' }
  & Pick<Office, 'id' | 'location' | 'openedOn' | 'closedOn' | 'physical' | 'address'>
);

export type OfficesPickerQueryVariables = {};


export type OfficesPickerQuery = (
  { __typename: 'RootQueryType' }
  & { offices: Array<(
    { __typename: 'Office' }
    & Pick<Office, 'id' | 'location'>
  )> }
);

export type SaveOfficeMutationVariables = {
  input: OfficeInput
};


export type SaveOfficeMutation = (
  { __typename: 'RootMutationType' }
  & { saveOffice: Maybe<{ __typename: 'Office' }
    & OfficeFragmentFragment
  > }
);

export type ChargeCardMutationVariables = {
  token: Scalars['String'],
  amountCents: Scalars['Int'],
  projectNumber: Scalars['String']
};


export type ChargeCardMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'chargeCard'>
);

export type DeletePaymentMutationVariables = {
  id: Scalars['ID']
};


export type DeletePaymentMutation = (
  { __typename: 'RootMutationType' }
  & { deletePayment: Maybe<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id'>
  )> }
);

export type PaymentQueryVariables = {
  id: Scalars['ID']
};


export type PaymentQuery = (
  { __typename: 'RootQueryType' }
  & { payment: (
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'description' | 'amount' | 'checkDate' | 'depositDate' | 'payor' | 'claimNumber' | 'checkNumber' | 'lossDate' | 'adjuster' | 'claimant' | 'policyNumber'>
    & { deposit: Maybe<(
      { __typename: 'Deposit' }
      & Pick<Deposit, 'id'>
    )>, appliedPayments: Maybe<Array<Maybe<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
      & { invoice: Maybe<(
        { __typename: 'Invoice' }
        & Pick<Invoice, 'id'>
      )> }
    )>>> }
  ) }
);

export type PaymentsQueryVariables = {
  month: Scalars['String']
};


export type PaymentsQuery = (
  { __typename: 'RootQueryType' }
  & { payments: Array<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'amount' | 'checkDate' | 'depositDate' | 'checkNumber' | 'payor'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'totalDue' | 'status'>
    ), retainer: Maybe<(
      { __typename: 'Retainer' }
      & Pick<Retainer, 'id'>
    )> }
  )>, retainers: Array<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'amount' | 'checkDate' | 'depositDate' | 'payor' | 'checkNumber'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'totalDue' | 'status'>
    ) }
  )> }
);

export type RecentPaymentsQueryVariables = {
  startDate: Scalars['String'],
  endDate: Scalars['String']
};


export type RecentPaymentsQuery = (
  { __typename: 'RootQueryType' }
  & { payments: Array<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'amount' | 'depositDate'>
    & { retainer: Maybe<(
      { __typename: 'Retainer' }
      & Pick<Retainer, 'id'>
    )> }
  )> }
);

export type SavePaymentMutationVariables = {
  input: PaymentInput
};


export type SavePaymentMutation = (
  { __typename: 'RootMutationType' }
  & { savePayment: Maybe<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'description' | 'amount' | 'checkDate' | 'payor' | 'claimNumber' | 'checkNumber' | 'attachmentUrl'>
  )> }
);

export type SaveMultiplePaymentsMutationVariables = {
  input: PaymentInput
};


export type SaveMultiplePaymentsMutation = (
  { __typename: 'RootMutationType' }
  & { savePayment: Maybe<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'description' | 'amount' | 'checkDate' | 'payor' | 'claimNumber' | 'checkNumber'>
  )> }
);

export type WriteoffsQueryVariables = {
  month: Scalars['String']
};


export type WriteoffsQuery = (
  { __typename: 'RootQueryType' }
  & { creditMemos: Array<(
    { __typename: 'CreditMemo' }
    & Pick<CreditMemo, 'id' | 'itemDate' | 'description' | 'amount'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ) }
  )> }
);

export type CreatePeerReviewMutationVariables = {
  input?: Maybe<PeerReviewInput>
};


export type CreatePeerReviewMutation = (
  { __typename: 'RootMutationType' }
  & { createPeerReview: Maybe<(
    { __typename: 'PeerReview' }
    & Pick<PeerReview, 'id' | 'feedback' | 'itemDate' | 'attachment'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'fullname'>
    )> }
  )> }
);

export type DeletePeerReviewMutationVariables = {
  id?: Maybe<Scalars['ID']>
};


export type DeletePeerReviewMutation = (
  { __typename: 'RootMutationType' }
  & { deletePeerReview: Maybe<(
    { __typename: 'PeerReview' }
    & Pick<PeerReview, 'id'>
  )> }
);

export type ReportPeerReviewsQueryVariables = {
  id?: Maybe<Scalars['ID']>
};


export type ReportPeerReviewsQuery = (
  { __typename: 'RootQueryType' }
  & { report: (
    { __typename: 'Report' }
    & Pick<Report, 'id'>
    & { peerReviews: Array<(
      { __typename: 'PeerReview' }
      & Pick<PeerReview, 'id' | 'feedback' | 'itemDate' | 'attachment'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'fullname'>
      )> }
    )> }
  ) }
);

export type PileFieldsFragment = (
  { __typename: 'Pile' }
  & Pick<Pile, 'id' | 'name' | 'date' | 'status'>
);

export type PilesQueryVariables = {
  projectNumber: Scalars['String']
};


export type PilesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { piles: Array<{ __typename: 'Pile' }
      & PileFieldsFragment
    > }
  ) }
);

export type SavePileMutationVariables = {
  input: PileInput
};


export type SavePileMutation = (
  { __typename: 'RootMutationType' }
  & { savePile: Maybe<(
    { __typename: 'Pile' }
    & Pick<Pile, 'id' | 'name' | 'date'>
  )> }
);

export type SaveSourceFileMutationVariables = {
  input: SourceFileInput
};


export type SaveSourceFileMutation = (
  { __typename: 'RootMutationType' }
  & { saveSourceFile: Maybe<(
    { __typename: 'SourceFile' }
    & Pick<SourceFile, 'id' | 'status'>
    & { attachedFiles: Array<{ __typename: 'AttachedFile' }
      & AttachedFileFragmentFragment
    > }
  )> }
);

export type ShowPileQueryVariables = {
  id: Scalars['ID']
};


export type ShowPileQuery = (
  { __typename: 'RootQueryType' }
  & { pile: { __typename: 'Pile' }
    & ShowPileFieldsFragment
   }
);

export type ShowPileFieldsFragment = (
  { __typename: 'Pile' }
  & Pick<Pile, 'id' | 'name' | 'date' | 'status'>
  & { sourceFiles: Array<{ __typename: 'SourceFile' }
    & ShowPileSourceFileFieldsFragment
  > }
);

export type ShowPileSourceFileFieldsFragment = (
  { __typename: 'SourceFile' }
  & Pick<SourceFile, 'id' | 'name' | 'path' | 'status'>
  & { document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )>, attachedFiles: Array<{ __typename: 'AttachedFile' }
    & AttachedFileFragmentFragment
  > }
);

export type SourceFileQueryVariables = {
  id: Scalars['ID']
};


export type SourceFileQuery = (
  { __typename: 'RootQueryType' }
  & { sourceFile: Maybe<(
    { __typename: 'SourceFile' }
    & Pick<SourceFile, 'id' | 'name' | 'path' | 'status'>
    & { attachedFiles: Array<{ __typename: 'AttachedFile' }
      & AttachedFileFragmentFragment
    >, pile: (
      { __typename: 'Pile' }
      & Pick<Pile, 'id' | 'name'>
    ), project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number'>
    ) }
  )> }
);

export type PlayersQueryVariables = {
  number: Scalars['String']
};


export type PlayersQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number'>
    & { playerGroups: Array<{ __typename: 'PlayerGroup' }
      & PlayerGroupFieldsFragment
    >, players: Array<{ __typename: 'Player' }
      & PlayerFieldsFragment
    > }
  ) }
);

export type PlayerGroupFieldsFragment = (
  { __typename: 'PlayerGroup' }
  & Pick<PlayerGroup, 'id' | 'name' | 'position'>
);

export type PlayerFieldsFragment = (
  { __typename: 'Player' }
  & Pick<Player, 'id' | 'role' | 'company' | 'name' | 'key' | 'description' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
  & { playerGroup: Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id'>
  )> }
);

export type CreateDefaultGroupsMutationVariables = {
  id: Scalars['ID']
};


export type CreateDefaultGroupsMutation = (
  { __typename: 'RootMutationType' }
  & { createDefaultPlayerGroups: Maybe<Array<Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id'>
  )>>> }
);

export type DeletePlayerMutationVariables = {
  id: Scalars['ID']
};


export type DeletePlayerMutation = (
  { __typename: 'RootMutationType' }
  & { deletePlayer: Maybe<(
    { __typename: 'Player' }
    & Pick<Player, 'id'>
  )> }
);

export type DeletePlayerGroupMutationVariables = {
  id: Scalars['ID']
};


export type DeletePlayerGroupMutation = (
  { __typename: 'RootMutationType' }
  & { deletePlayerGroup: Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id'>
  )> }
);

export type PlayerQueryVariables = {
  id: Scalars['ID']
};


export type PlayerQuery = (
  { __typename: 'RootQueryType' }
  & { player: Maybe<{ __typename: 'Player' }
    & PlayerFormFragmentFragment
  > }
);

export type PlayerGroupQueryVariables = {
  id: Scalars['ID']
};


export type PlayerGroupQuery = (
  { __typename: 'RootQueryType' }
  & { playerGroup: Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id' | 'name'>
  )> }
);

export type PlayerFormFragmentFragment = (
  { __typename: 'Player' }
  & Pick<Player, 'id' | 'name' | 'company' | 'role' | 'description'>
  & { playerGroup: Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id'>
  )>, bpaLinks: Maybe<Array<Maybe<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  >>> }
);

export type PlayerGroupsQueryVariables = {
  id: Scalars['ID']
};


export type PlayerGroupsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { playerGroups: Array<(
      { __typename: 'PlayerGroup' }
      & Pick<PlayerGroup, 'id' | 'name' | 'position'>
    )> }
  ) }
);

export type MovePlayerGroupMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MovePlayerGroupMutation = (
  { __typename: 'RootMutationType' }
  & { movePlayerGroup: Maybe<Array<Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id' | 'position'>
  )>>> }
);

export type PlayersPickerQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type PlayersPickerQuery = (
  { __typename: 'RootQueryType' }
  & { playerGroups: Maybe<Array<Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'name' | 'position' | 'id'>
  )>>>, players: Maybe<Array<Maybe<(
    { __typename: 'Player' }
    & Pick<Player, 'id' | 'role' | 'company' | 'name' | 'pfcsPhotoCount' | 'otherPhotoCount' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    & { playerGroup: Maybe<(
      { __typename: 'PlayerGroup' }
      & Pick<PlayerGroup, 'id'>
    )> }
  )>>> }
);

export type SavePlayerMutationVariables = {
  input: PlayerInput
};


export type SavePlayerMutation = (
  { __typename: 'RootMutationType' }
  & { savePlayer: Maybe<{ __typename: 'Player' }
    & PlayerFormFragmentFragment
  > }
);

export type SavePlayerGroupMutationVariables = {
  input: PlayerGroupInput
};


export type SavePlayerGroupMutation = (
  { __typename: 'RootMutationType' }
  & { savePlayerGroup: Maybe<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id'>
  )> }
);

export type AccessPublicationsQueryVariables = {};


export type AccessPublicationsQuery = (
  { __typename: 'RootQueryType' }
  & { accessPublications: Array<{ __typename: 'AccessPublication' }
    & AccessPublicationFieldsFragment
  > }
);

export type AccessPublicationFieldsFragment = (
  { __typename: 'AccessPublication' }
  & Pick<AccessPublication, 'id' | 'title' | 'path' | 'description'>
);

export type MarkViewedMutationVariables = {
  id: Scalars['ID']
};


export type MarkViewedMutation = (
  { __typename: 'RootMutationType' }
  & { viewAccessPublication: Maybe<(
    { __typename: 'AccessPublication' }
    & Pick<AccessPublication, 'id'>
  )> }
);

export type RefundsQueryVariables = {};


export type RefundsQuery = (
  { __typename: 'RootQueryType' }
  & { refunds: Array<(
    { __typename: 'Refund' }
    & Pick<Refund, 'id' | 'amount' | 'payer' | 'itemDate'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ), appliedPayments: Array<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
    )> }
  )> }
);

export type DeleteRefundMutationVariables = {
  id: Scalars['ID']
};


export type DeleteRefundMutation = (
  { __typename: 'RootMutationType' }
  & { deleteRefund: Maybe<(
    { __typename: 'Refund' }
    & Pick<Refund, 'id'>
  )> }
);

export type EditRefundQueryVariables = {
  id: Scalars['ID']
};


export type EditRefundQuery = (
  { __typename: 'RootQueryType' }
  & { refund: Maybe<(
    { __typename: 'Refund' }
    & Pick<Refund, 'id' | 'amount' | 'paymentMethod' | 'payer' | 'itemDate'>
    & { appliedPayments: Array<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
      & { invoice: Maybe<(
        { __typename: 'Invoice' }
        & Pick<Invoice, 'id'>
      )> }
    )> }
  )> }
);

export type SaveRefundMutationVariables = {
  input: RefundInput
};


export type SaveRefundMutation = (
  { __typename: 'RootMutationType' }
  & { saveRefund: Maybe<(
    { __typename: 'Refund' }
    & Pick<Refund, 'id' | 'amount' | 'payer' | 'itemDate'>
  )> }
);

export type DeleteReportCardMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportCardMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportCard: Maybe<(
    { __typename: 'ReportCard' }
    & Pick<ReportCard, 'id'>
  )> }
);

export type DeleteReportCardQuestionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportCardQuestionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportCardQuestion: Maybe<(
    { __typename: 'ReportCardQuestion' }
    & Pick<ReportCardQuestion, 'id'>
  )> }
);

export type EditReportCardQueryVariables = {
  id: Scalars['ID']
};


export type EditReportCardQuery = (
  { __typename: 'RootQueryType' }
  & { reportCard: Maybe<(
    { __typename: 'ReportCard' }
    & Pick<ReportCard, 'id' | 'itemDate' | 'scores' | 'comments' | 'commentUserIds'>
    & { reportCardType: Maybe<(
      { __typename: 'ReportCardType' }
      & Pick<ReportCardType, 'id' | 'name'>
    )>, user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )> }
);

export type EditReportCardQuestionQueryVariables = {
  id: Scalars['ID']
};


export type EditReportCardQuestionQuery = (
  { __typename: 'RootQueryType' }
  & { reportCardQuestion: Maybe<(
    { __typename: 'ReportCardQuestion' }
    & Pick<ReportCardQuestion, 'id' | 'title' | 'description' | 'maxScore'>
  )> }
);

export type ReportCardTypeQueryVariables = {
  id: Scalars['ID']
};


export type ReportCardTypeQuery = (
  { __typename: 'RootQueryType' }
  & { reportCardType: Maybe<(
    { __typename: 'ReportCardType' }
    & Pick<ReportCardType, 'id' | 'name' | 'category' | 'active'>
  )> }
);

export type MoveReportCardQuestionMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveReportCardQuestionMutation = (
  { __typename: 'RootMutationType' }
  & { moveReportCardQuestion: Maybe<Array<Maybe<(
    { __typename: 'ReportCardQuestion' }
    & Pick<ReportCardQuestion, 'id' | 'rank'>
  )>>> }
);

export type SaveReportCardMutationVariables = {
  input: ReportCardInput
};


export type SaveReportCardMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportCard: Maybe<(
    { __typename: 'ReportCard' }
    & Pick<ReportCard, 'id' | 'score' | 'itemDate' | 'possibleScore'>
    & { reportCardType: Maybe<(
      { __typename: 'ReportCardType' }
      & Pick<ReportCardType, 'id' | 'name'>
    )>, user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )> }
);

export type SaveReportCardQuestionMutationVariables = {
  input: ReportCardQuestionInput
};


export type SaveReportCardQuestionMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportCardQuestion: Maybe<(
    { __typename: 'ReportCardQuestion' }
    & Pick<ReportCardQuestion, 'id' | 'title' | 'description' | 'maxScore' | 'rank'>
  )> }
);

export type SaveReportCardTypeMutationVariables = {
  input: ReportCardTypeInput
};


export type SaveReportCardTypeMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportCardType: Maybe<(
    { __typename: 'ReportCardType' }
    & Pick<ReportCardType, 'id' | 'name' | 'category' | 'active'>
  )> }
);

export type ReportCardTypesQueryVariables = {};


export type ReportCardTypesQuery = (
  { __typename: 'RootQueryType' }
  & { reportCardTypes: Array<(
    { __typename: 'ReportCardType' }
    & Pick<ReportCardType, 'id' | 'name' | 'category' | 'active'>
    & { reportCardQuestions: Array<{ __typename: 'ReportCardQuestion' }
      & ReportCardQuestionFieldsFragment
    > }
  )> }
);

export type ReportCardQuestionFieldsFragment = (
  { __typename: 'ReportCardQuestion' }
  & Pick<ReportCardQuestion, 'id' | 'title' | 'description' | 'maxScore' | 'rank'>
);

export type RetainersQueryVariables = {};


export type RetainersQuery = (
  { __typename: 'RootQueryType' }
  & { retainers: Array<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'depositDate' | 'amount'>
    & { payments: Array<(
      { __typename: 'Payment' }
      & Pick<Payment, 'id' | 'amount'>
    )>, project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'status' | 'totalDue'>
    ) }
  )> }
);

export type DeleteRetainerMutationVariables = {
  id: Scalars['ID']
};


export type DeleteRetainerMutation = (
  { __typename: 'RootMutationType' }
  & { deleteRetainer: Maybe<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id'>
  )> }
);

export type RetainerQueryVariables = {
  id: Scalars['ID']
};


export type RetainerQuery = (
  { __typename: 'RootQueryType' }
  & { retainer: Maybe<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'amount' | 'checkDate' | 'checkNumber' | 'payor' | 'referenceNumber' | 'synced'>
    & { deposit: (
      { __typename: 'Deposit' }
      & Pick<Deposit, 'id'>
    ) }
  )> }
);

export type SaveRetainerMutationVariables = {
  input: RetainerInput
};


export type SaveRetainerMutation = (
  { __typename: 'RootMutationType' }
  & { saveRetainer: Maybe<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'amount' | 'checkDate' | 'checkNumber' | 'referenceNumber' | 'payor' | 'synced'>
    & { payments: Array<(
      { __typename: 'Payment' }
      & Pick<Payment, 'id' | 'amount'>
    )> }
  )> }
);

export type SalesStagesQueryVariables = {};


export type SalesStagesQuery = (
  { __typename: 'RootQueryType' }
  & { salesStages: Array<(
    { __typename: 'SalesStage' }
    & Pick<SalesStage, 'id' | 'description' | 'probability'>
  )> }
);

export type SurveysQueryVariables = {
  completed?: Maybe<Scalars['Boolean']>
};


export type SurveysQuery = (
  { __typename: 'RootQueryType' }
  & { surveys: Array<(
    { __typename: 'Survey' }
    & Pick<Survey, 'id' | 'completed' | 'updatedAt' | 'averageRating' | 'hashKey'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ), membership: (
      { __typename: 'Membership' }
      & Pick<Membership, 'id'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
      ) }
    ) }
  )> }
);

export type CreateSurveysMutationVariables = {
  projectId: Scalars['ID'],
  membershipIds: Array<Maybe<Scalars['ID']>>
};


export type CreateSurveysMutation = (
  { __typename: 'RootMutationType' }
  & { createSurveys: Maybe<Array<Maybe<(
    { __typename: 'Survey' }
    & Pick<Survey, 'id'>
  )>>> }
);

export type SurveyDataQueryVariables = {
  projectId: Scalars['ID']
};


export type SurveyDataQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact' | 'role' | 'notes'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs' | 'email'>
        & { tags: Array<{ __typename: 'Tag' }
          & TagFieldsFragment
        > }
      ), survey: Maybe<(
        { __typename: 'Survey' }
        & Pick<Survey, 'id' | 'completed' | 'hashKey' | 'createdAt'>
      )> }
    )> }
  ) }
);

export type SurveyQueryVariables = {
  id: Scalars['ID']
};


export type SurveyQuery = (
  { __typename: 'RootQueryType' }
  & { survey: (
    { __typename: 'Survey' }
    & Pick<Survey, 'id' | 'updatedAt' | 'averageRating'>
    & { surveyQuestions: Array<(
      { __typename: 'SurveyQuestion' }
      & Pick<SurveyQuestion, 'id' | 'numeric' | 'answer' | 'question'>
    )>, project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ), membership: (
      { __typename: 'Membership' }
      & Pick<Membership, 'id'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'displayAs'>
        )> }
      ) }
    ) }
  ) }
);

export type TenTouchBatchQueryVariables = {
  id: Scalars['ID']
};


export type TenTouchBatchQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouchBatch: Maybe<(
    { __typename: 'TenTouchBatch' }
    & Pick<TenTouchBatch, 'id' | 'campaignField'>
    & { campaign: (
      { __typename: 'Campaign' }
      & Pick<Campaign, 'id' | 'name'>
    ) }
  )> }
);

export type TenTouchItemsQueryVariables = {
  includeId?: Maybe<Scalars['ID']>,
  active?: Maybe<Scalars['Boolean']>
};


export type TenTouchItemsQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouchTemplates: Array<{ __typename: 'TenTouchTemplate' }
    & TenTouchTemplateFieldsFragment
  >, tenTouchItems: Array<{ __typename: 'TenTouchItem' }
    & TenTouchItemFieldsFragment
  > }
);

export type TenTouchItemFieldsFragment = (
  { __typename: 'TenTouchItem' }
  & Pick<TenTouchItem, 'id' | 'name' | 'touchTypes' | 'category' | 'emailSubject' | 'emailBody' | 'active'>
  & { document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'displayName'>
    & { attachedFiles: Array<{ __typename: 'AttachedFile' }
      & AttachedFileFragmentFragment
    > }
  )> }
);

export type TenTouchItemQueryVariables = {
  id: Scalars['ID']
};


export type TenTouchItemQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouchItem: Maybe<(
    { __typename: 'TenTouchItem' }
    & Pick<TenTouchItem, 'id' | 'category' | 'touchTypes' | 'name' | 'emailSubject' | 'active' | 'emailBody'>
    & { document: Maybe<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    > }
  )> }
);

export type SaveTenTouchItemMutationVariables = {
  input: TenTouchItemInput
};


export type SaveTenTouchItemMutation = (
  { __typename: 'RootMutationType' }
  & { saveTenTouchItem: Maybe<(
    { __typename: 'TenTouchItem' }
    & Pick<TenTouchItem, 'id'>
  )> }
);

export type TenTouchTemplateFieldsFragment = (
  { __typename: 'TenTouchTemplate' }
  & Pick<TenTouchTemplate, 'id' | 'name' | 'notes'>
  & { tenTouchTasks: Array<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  > }
);

export type TenTouchTemplatesQueryVariables = {};


export type TenTouchTemplatesQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouchTemplates: Array<{ __typename: 'TenTouchTemplate' }
    & TenTouchTemplateFieldsFragment
  > }
);

export type TenTouchesQueryVariables = {
  tenTouchBatchId?: Maybe<Scalars['ID']>
};


export type TenTouchesQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouches: Array<(
    { __typename: 'TenTouch' }
    & Pick<TenTouch, 'id' | 'createdAt' | 'status' | 'completedOn'>
    & { tenTouchTasks: Array<(
      { __typename: 'TenTouchTask' }
      & Pick<TenTouchTask, 'id' | 'completed'>
    )>, contact: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    ) }
  )> }
);

export type EditTenTouchQueryVariables = {
  id: Scalars['ID']
};


export type EditTenTouchQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouch: Maybe<{ __typename: 'TenTouch' }
    & TenTouchFragmentFragment
  > }
);

export type EditTenTouchTemplateQueryVariables = {
  id: Scalars['ID']
};


export type EditTenTouchTemplateQuery = (
  { __typename: 'RootQueryType' }
  & { tenTouchTemplate: { __typename: 'TenTouchTemplate' }
    & EditTenTouchTemplateFieldsFragment
   }
);

export type EditTenTouchTemplateFieldsFragment = (
  { __typename: 'TenTouchTemplate' }
  & Pick<TenTouchTemplate, 'id' | 'name' | 'notes'>
  & { tenTouchTasks: Array<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  > }
);

export type SaveTenTouchTaskMutationVariables = {
  input: TenTouchTaskInput
};


export type SaveTenTouchTaskMutation = (
  { __typename: 'RootMutationType' }
  & { saveTenTouchTask: Maybe<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  > }
);

export type SaveTenTouchTemplateMutationVariables = {
  input: TenTouchTemplateInput
};


export type SaveTenTouchTemplateMutation = (
  { __typename: 'RootMutationType' }
  & { saveTenTouchTemplate: Maybe<(
    { __typename: 'TenTouchTemplate' }
    & Pick<TenTouchTemplate, 'id' | 'name' | 'notes'>
  )> }
);

export type SendTenTouchTaskMutationVariables = {
  id: Scalars['ID']
};


export type SendTenTouchTaskMutation = (
  { __typename: 'RootMutationType' }
  & { sendTenTouchTask: Maybe<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  > }
);

export type TenTouchFragmentFragment = (
  { __typename: 'TenTouch' }
  & Pick<TenTouch, 'id' | 'createdAt' | 'completed' | 'completedOn' | 'status' | 'title' | 'campaignField'>
  & { campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )>, tenTouchTasks: Array<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  >, contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  ) }
);

export type TenTouchTaskFragmentFragment = (
  { __typename: 'TenTouchTask' }
  & Pick<TenTouchTask, 'id' | 'number' | 'completed' | 'itemDate' | 'days' | 'notes' | 'touchType' | 'subject' | 'body' | 'overrideEmail' | 'manualEmail'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'signature'>
  )>, tenTouchItem: Maybe<(
    { __typename: 'TenTouchItem' }
    & Pick<TenTouchItem, 'id' | 'category' | 'name' | 'emailBody' | 'emailSubject' | 'active'>
    & { document: Maybe<(
      { __typename: 'Document' }
      & Pick<Document, 'id' | 'displayName'>
      & { attachedFiles: Array<{ __typename: 'AttachedFile' }
        & AttachedFileFragmentFragment
      > }
    )> }
  )>, tenTouch: Maybe<(
    { __typename: 'TenTouch' }
    & Pick<TenTouch, 'id'>
    & { contact: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs' | 'greetAs'>
    ) }
  )> }
);

export type AffiliationTypesQueryVariables = {};


export type AffiliationTypesQuery = (
  { __typename: 'RootQueryType' }
  & { affiliationTypes: Array<{ __typename: 'AffiliationType' }
    & AffiliationTypeFieldsFragment
  > }
);

export type AffiliationTypeFieldsFragment = (
  { __typename: 'AffiliationType' }
  & Pick<AffiliationType, 'id' | 'url' | 'name' | 'valueType'>
);

export type DeleteAffiliationTypeMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAffiliationTypeMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAffiliationType: Maybe<(
    { __typename: 'AffiliationType' }
    & Pick<AffiliationType, 'id'>
  )> }
);

export type AffiliationTypeQueryVariables = {
  id: Scalars['ID']
};


export type AffiliationTypeQuery = (
  { __typename: 'RootQueryType' }
  & { affiliationType: Maybe<(
    { __typename: 'AffiliationType' }
    & Pick<AffiliationType, 'id' | 'url' | 'name' | 'valueType'>
  )> }
);

export type SaveAffiliationTypeMutationVariables = {
  input: AffiliationTypeInput
};


export type SaveAffiliationTypeMutation = (
  { __typename: 'RootMutationType' }
  & { saveAffiliationType: Maybe<(
    { __typename: 'AffiliationType' }
    & Pick<AffiliationType, 'id' | 'url' | 'valueType' | 'name'>
  )> }
);

export type DeleteAgreementMutationVariables = {
  id: Scalars['ID']
};


export type DeleteAgreementMutation = (
  { __typename: 'RootMutationType' }
  & { deleteAgreement: Maybe<(
    { __typename: 'Agreement' }
    & Pick<Agreement, 'id'>
  )> }
);

export type EditAgreementQueryVariables = {
  id: Scalars['ID']
};


export type EditAgreementQuery = (
  { __typename: 'RootQueryType' }
  & { agreement: Maybe<(
    { __typename: 'Agreement' }
    & Pick<Agreement, 'id' | 'content' | 'title'>
  )> }
);

export type AgreementPickerQueryVariables = {};


export type AgreementPickerQuery = (
  { __typename: 'RootQueryType' }
  & { agreements: Array<(
    { __typename: 'Agreement' }
    & Pick<Agreement, 'id' | 'title'>
  )> }
);

export type SaveAgreementMutationVariables = {
  input: AgreementInput
};


export type SaveAgreementMutation = (
  { __typename: 'RootMutationType' }
  & { saveAgreement: Maybe<(
    { __typename: 'Agreement' }
    & Pick<Agreement, 'id' | 'content' | 'title'>
  )> }
);

export type BillingRateQueryVariables = {
  id: Scalars['ID']
};


export type BillingRateQuery = (
  { __typename: 'RootQueryType' }
  & { billingRate: Maybe<(
    { __typename: 'BillingRate' }
    & Pick<BillingRate, 'id' | 'rate'>
    & { billingPosition: (
      { __typename: 'BillingPosition' }
      & Pick<BillingPosition, 'id'>
    ), feeSchedule: (
      { __typename: 'FeeSchedule' }
      & Pick<FeeSchedule, 'id'>
    ) }
  )> }
);

export type SaveBillingRateMutationVariables = {
  input: BillingRateInput
};


export type SaveBillingRateMutation = (
  { __typename: 'RootMutationType' }
  & { saveBillingRate: Maybe<(
    { __typename: 'BillingRate' }
    & Pick<BillingRate, 'id' | 'rate'>
  )> }
);

export type DeleteCalendarMutationVariables = {
  id: Scalars['ID']
};


export type DeleteCalendarMutation = (
  { __typename: 'RootMutationType' }
  & { deleteCalendar: Maybe<(
    { __typename: 'Calendar' }
    & Pick<Calendar, 'id'>
  )> }
);

export type EditCalendarQueryVariables = {
  id: Scalars['ID']
};


export type EditCalendarQuery = (
  { __typename: 'RootQueryType' }
  & { calendar: Maybe<(
    { __typename: 'Calendar' }
    & Pick<Calendar, 'id' | 'itemDate' | 'endDate' | 'description' | 'allDay' | 'cancelled'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )>, project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    )> }
  )> }
);

export type CalendarsQueryVariables = {
  startTime: Scalars['Int'],
  endTime: Scalars['Int'],
  user?: Maybe<Scalars['String']>,
  office?: Maybe<Scalars['String']>,
  project?: Maybe<Scalars['String']>,
  projectUser?: Maybe<Scalars['String']>
};


export type CalendarsQuery = (
  { __typename: 'RootQueryType' }
  & { calendars: Array<(
    { __typename: 'Calendar' }
    & Pick<Calendar, 'id' | 'description' | 'itemDate' | 'endDate' | 'allDay'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number'>
    )> }
  )> }
);

export type SaveCalendarMutationVariables = {
  input: CalendarInput
};


export type SaveCalendarMutation = (
  { __typename: 'RootMutationType' }
  & { saveCalendar: Maybe<(
    { __typename: 'Calendar' }
    & Pick<Calendar, 'id'>
  )> }
);

export type ShiftsQueryVariables = {
  date?: Maybe<Scalars['String']>,
  startTime: Scalars['Int'],
  endTime: Scalars['Int']
};


export type ShiftsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'future' | 'employeeType' | 'displayAs' | 'department' | 'schedule'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )>, calendars: Array<(
    { __typename: 'Calendar' }
    & Pick<Calendar, 'id' | 'itemDate' | 'endDate' | 'allDay' | 'description'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )>, project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number'>
    )> }
  )> }
);

export type AddCampaignsContactMutationVariables = {
  campaignId: Scalars['ID'],
  contactId: Scalars['ID']
};


export type AddCampaignsContactMutation = (
  { __typename: 'RootMutationType' }
  & { addCampaignsContact: Maybe<{ __typename: 'CampaignsContact' }
    & CampaignsContactRowFragmentFragment
  > }
);

export type CampaignsContactRowFragmentFragment = (
  { __typename: 'CampaignsContact' }
  & Pick<CampaignsContact, 'id' | 'fields' | 'currentClient' | 'pastClient' | 'newOpportunity' | 'existingOpportunity' | 'eventAttendee'>
  & { contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'email' | 'sortAs' | 'lastName' | 'greetAs' | 'marketingStatus'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    )>, tags: Array<(
      { __typename: 'Tag' }
      & Pick<Tag, 'id' | 'category' | 'section'>
    )> }
  ) }
);

export type CopyCampaignContactsMutationVariables = {
  id: Scalars['ID'],
  sourceId: Scalars['ID']
};


export type CopyCampaignContactsMutation = (
  { __typename: 'RootMutationType' }
  & { copyCampaignContacts: (
    { __typename: 'CopyCampaignContactsResult' }
    & Pick<CopyCampaignContactsResult, 'addedCount' | 'totalCount'>
  ) }
);

export type DeleteCampaignsContactMutationVariables = {
  id: Scalars['ID']
};


export type DeleteCampaignsContactMutation = (
  { __typename: 'RootMutationType' }
  & { deleteCampaignsContact: Maybe<(
    { __typename: 'CampaignsContact' }
    & Pick<CampaignsContact, 'id'>
  )> }
);

export type EditCampaignQueryVariables = {
  id: Scalars['ID']
};


export type EditCampaignQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'status' | 'closeActivities' | 'closeDate' | 'description' | 'fields' | 'percentCompleted' | 'includeIndustry' | 'includeUnsubscribed' | 'includeAttendance' | 'includeSegments' | 'name' | 'script' | 'targetDate' | 'userId'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  ) }
);

export type ShowCampaignFrameQueryVariables = {
  id: Scalars['ID']
};


export type ShowCampaignFrameQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name' | 'fields'>
  ) }
);

export type FullMetricsQueryVariables = {
  campaignId: Scalars['ID']
};


export type FullMetricsQuery = (
  { __typename: 'RootQueryType' }
  & { metrics: Array<{ __typename: 'Metric' }
    & FullMetricsFieldsFragment
  >, campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  ) }
);

export type FullMetricsFieldsFragment = (
  { __typename: 'Metric' }
  & Pick<Metric, 'id' | 'captureDate'>
  & { campaignData: (
    { __typename: 'CampaignMetrics' }
    & { information: Maybe<Array<Maybe<(
      { __typename: 'MetricValue' }
      & Pick<MetricValue, 'description' | 'value'>
    )>>>, activity: Maybe<Array<Maybe<(
      { __typename: 'MetricValue' }
      & Pick<MetricValue, 'description' | 'value'>
    )>>>, outcome: Maybe<Array<Maybe<(
      { __typename: 'MetricValue' }
      & Pick<MetricValue, 'description' | 'value'>
    )>>> }
  ) }
);

export type CampaignsQueryVariables = {};


export type CampaignsQuery = (
  { __typename: 'RootQueryType' }
  & { campaigns: Array<{ __typename: 'Campaign' }
    & CampaignFieldsFragment
  > }
);

export type CampaignFieldsFragment = (
  { __typename: 'Campaign' }
  & Pick<Campaign, 'id' | 'name' | 'status' | 'campaignsContactsCount' | 'createdAt' | 'closeDate' | 'targetDate'>
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  ) }
);

export type CampaignNotesQueryVariables = {
  id: Scalars['ID']
};


export type CampaignNotesQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
    & { notes: Array<{ __typename: 'Note' }
      & NoteShowFragmentFragment
    > }
  ) }
);

export type CampaignPickerQueryVariables = {
  filter?: Maybe<Scalars['String']>,
  includeId?: Maybe<Scalars['ID']>
};


export type CampaignPickerQuery = (
  { __typename: 'RootQueryType' }
  & { campaigns: Array<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )> }
);

export type SaveCampaignMutationVariables = {
  input: CampaignInput
};


export type SaveCampaignMutation = (
  { __typename: 'RootMutationType' }
  & { saveCampaign: Maybe<{ __typename: 'Campaign' }
    & ShowCampaignFragmentFragment
  > }
);

export type ShowCampaignQueryVariables = {
  id: Scalars['ID']
};


export type ShowCampaignQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: { __typename: 'Campaign' }
    & ShowCampaignFragmentFragment
   }
);

export type ShowCampaignFragmentFragment = (
  { __typename: 'Campaign' }
  & Pick<Campaign, 'id' | 'name' | 'fields' | 'status' | 'closeActivities' | 'script' | 'description' | 'targetDate' | 'closeDate' | 'includeIndustry' | 'includeUnsubscribed' | 'includeAttendance' | 'includeSegments'>
  & { mailings: Array<(
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id' | 'campaignField' | 'excludeCampaignField' | 'contactsMailingsCount' | 'sentAt' | 'subject' | 'sender'>
  )>, projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'salesStageId' | 'guesstimate'>
  )>, tenTouchBatches: Array<(
    { __typename: 'TenTouchBatch' }
    & Pick<TenTouchBatch, 'id' | 'campaignField' | 'createdAt'>
    & { tenTouches: Array<(
      { __typename: 'TenTouch' }
      & Pick<TenTouch, 'id'>
    )> }
  )>, company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )> }
);

export type ShowCampaignContactsQueryVariables = {
  id: Scalars['ID']
};


export type ShowCampaignContactsQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id'>
    & { campaignsContacts: Maybe<Array<Maybe<{ __typename: 'CampaignsContact' }
      & CampaignsContactRowFragmentFragment
    >>> }
  ) }
);

export type SyncToMailchimpMutationVariables = {
  id: Scalars['ID']
};


export type SyncToMailchimpMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'syncCampaignToMailchimp'>
);

export type CampaignTimesheetsQueryVariables = {
  id: Scalars['ID']
};


export type CampaignTimesheetsQuery = (
  { __typename: 'RootQueryType' }
  & { campaign: (
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
    & { timesheets: Array<(
      { __typename: 'Timesheet' }
      & Pick<Timesheet, 'id' | 'itemDate' | 'hours' | 'billedPosition' | 'description'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      ) }
    )> }
  ) }
);

export type ToggleCampaignContactFieldMutationVariables = {
  id: Scalars['ID'],
  field: Scalars['String'],
  value: Scalars['Boolean']
};


export type ToggleCampaignContactFieldMutation = (
  { __typename: 'RootMutationType' }
  & { toggleCampaignContactField: Maybe<(
    { __typename: 'CampaignsContact' }
    & Pick<CampaignsContact, 'id' | 'fields'>
  )> }
);

export type ChecklistFragmentFragment = (
  { __typename: 'Checklist' }
  & Pick<Checklist, 'id' | 'itemsCompleted' | 'itemCount' | 'complete' | 'completedAt' | 'category'>
  & { checklistItems: Array<(
    { __typename: 'ChecklistItem' }
    & Pick<ChecklistItem, 'id' | 'complete' | 'when' | 'who' | 'notes' | 'title' | 'position' | 'section'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )> }
);

export type DeleteChecklistMutationVariables = {
  id: Scalars['ID']
};


export type DeleteChecklistMutation = (
  { __typename: 'RootMutationType' }
  & { deleteChecklist: Maybe<(
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id'>
  )> }
);

export type DeleteChecklistItemMutationVariables = {
  id: Scalars['ID']
};


export type DeleteChecklistItemMutation = (
  { __typename: 'RootMutationType' }
  & { deleteChecklistItem: Maybe<(
    { __typename: 'ChecklistItem' }
    & Pick<ChecklistItem, 'id'>
  )> }
);

export type EditChecklistQueryVariables = {
  id: Scalars['ID']
};


export type EditChecklistQuery = (
  { __typename: 'RootQueryType' }
  & { checklist: (
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id' | 'category' | 'roles'>
  ) }
);

export type ChecklistItemQueryVariables = {
  id: Scalars['ID']
};


export type ChecklistItemQuery = (
  { __typename: 'RootQueryType' }
  & { checklistItem: Maybe<(
    { __typename: 'ChecklistItem' }
    & Pick<ChecklistItem, 'id' | 'section' | 'who' | 'when' | 'notes' | 'title'>
    & { checklist: Maybe<(
      { __typename: 'Checklist' }
      & Pick<Checklist, 'id'>
    )> }
  )> }
);

export type ChecklistQueryVariables = {
  id: Scalars['ID']
};


export type ChecklistQuery = (
  { __typename: 'RootQueryType' }
  & { checklist: (
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id' | 'category'>
    & { checklistItems: Array<(
      { __typename: 'ChecklistItem' }
      & Pick<ChecklistItem, 'id' | 'when' | 'who' | 'notes' | 'title' | 'section' | 'position'>
    )> }
  ) }
);

export type SaveChecklistMutationVariables = {
  input: ChecklistInput
};


export type SaveChecklistMutation = (
  { __typename: 'RootMutationType' }
  & { saveChecklist: Maybe<(
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id' | 'category'>
  )> }
);

export type SaveChecklistItemMutationVariables = {
  input: ChecklistItemInput
};


export type SaveChecklistItemMutation = (
  { __typename: 'RootMutationType' }
  & { saveChecklistItem: Maybe<(
    { __typename: 'ChecklistItem' }
    & Pick<ChecklistItem, 'id' | 'complete' | 'title' | 'position' | 'section'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, checklist: Maybe<(
      { __typename: 'Checklist' }
      & Pick<Checklist, 'id' | 'itemsCompleted' | 'completedAt' | 'complete'>
    )> }
  )> }
);

export type SortChecklistItemMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type SortChecklistItemMutation = (
  { __typename: 'RootMutationType' }
  & { sortChecklistItem: Maybe<Array<Maybe<(
    { __typename: 'ChecklistItem' }
    & Pick<ChecklistItem, 'id' | 'when' | 'who' | 'notes' | 'title' | 'section' | 'position'>
  )>>> }
);

export type ChecklistTemplatesQueryVariables = {};


export type ChecklistTemplatesQuery = (
  { __typename: 'RootQueryType' }
  & { checklists: Maybe<Array<Maybe<(
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id' | 'category' | 'roles'>
    & { checklistItems: Array<(
      { __typename: 'ChecklistItem' }
      & Pick<ChecklistItem, 'id' | 'when' | 'who' | 'notes' | 'title' | 'section' | 'position'>
    )> }
  )>>> }
);

export type CommunitiesQueryVariables = {};


export type CommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { communities: Array<(
    { __typename: 'Community' }
    & Pick<Community, 'id' | 'name' | 'city' | 'state'>
  )> }
);

export type EditCommunityQueryVariables = {
  id: Scalars['ID']
};


export type EditCommunityQuery = (
  { __typename: 'RootQueryType' }
  & { community: Maybe<(
    { __typename: 'Community' }
    & Pick<Community, 'id' | 'name' | 'description' | 'complete' | 'city' | 'state'>
  )> }
);

export type SaveCommunityMutationVariables = {
  input: CommunityInput
};


export type SaveCommunityMutation = (
  { __typename: 'RootMutationType' }
  & { saveCommunity: Maybe<(
    { __typename: 'Community' }
    & Pick<Community, 'id' | 'name' | 'city' | 'state' | 'description' | 'complete'>
  )> }
);

export type CommunityQueryVariables = {
  id: Scalars['ID']
};


export type CommunityQuery = (
  { __typename: 'RootQueryType' }
  & { community: Maybe<(
    { __typename: 'Community' }
    & Pick<Community, 'id' | 'name' | 'description' | 'city' | 'state' | 'complete'>
    & { physicalAddresses: Array<{ __typename: 'PhysicalAddress' }
      & PhysicalAddressFragmentFragment
    >, notes: Array<(
      { __typename: 'Note' }
      & Pick<Note, 'id'>
    )
      & NoteShowFragmentFragment
    > }
  )> }
);

export type SaveContactImportMutationVariables = {
  input: ContactImportInput
};


export type SaveContactImportMutation = (
  { __typename: 'RootMutationType' }
  & { saveContactImport: Maybe<(
    { __typename: 'ContactImport' }
    & Pick<ContactImport, 'id'>
  )> }
);

export type ContactImportQueryVariables = {
  id: Scalars['ID']
};


export type ContactImportQuery = (
  { __typename: 'RootQueryType' }
  & { contactImport: (
    { __typename: 'ContactImport' }
    & Pick<ContactImport, 'id' | 'name' | 'attachmentUrl'>
    & { importedContacts: Array<(
      { __typename: 'ImportedContact' }
      & Pick<ImportedContact, 'id' | 'action'>
    )>, campaign: Maybe<(
      { __typename: 'Campaign' }
      & Pick<Campaign, 'id' | 'name'>
    )> }
  ) }
);

export type AddContactsToGroupMutationVariables = {
  contactId?: Maybe<Scalars['ID']>,
  filter?: Maybe<ContactSearchFilter>,
  campaignId?: Maybe<Scalars['ID']>,
  campaignFields?: Maybe<Scalars['String']>
};


export type AddContactsToGroupMutation = (
  { __typename: 'RootMutationType' }
  & { addContactsToGroup: Maybe<(
    { __typename: 'AddContactsToGroupResults' }
    & Pick<AddContactsToGroupResults, 'totalCount' | 'addedCount'>
  )> }
);

export type ContactAddressesQueryVariables = {
  filter?: Maybe<Scalars['String']>
};


export type ContactAddressesQuery = (
  { __typename: 'RootQueryType' }
  & { physicalAddresses: Maybe<Array<Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'premise' | 'number' | 'street' | 'city' | 'unit' | 'unitType' | 'state' | 'zip' | 'country' | 'legacyStreet' | 'legacyCity' | 'legacyState' | 'legacyZip' | 'googleFormatted'>
  )>>> }
);

export type BatchTagMutationVariables = {
  input: BatchTagInput
};


export type BatchTagMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'batchTag'>
);

export type ContactCardQueryVariables = {
  id: Scalars['ID']
};


export type ContactCardQuery = (
  { __typename: 'RootQueryType' }
  & { contact: { __typename: 'Contact' }
    & ContactCardFragmentFragment
   }
);

export type CompaniesQueryVariables = {
  search?: Maybe<Scalars['String']>
};


export type CompaniesQuery = (
  { __typename: 'RootQueryType' }
  & { companies: Array<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )> }
);

export type CompanyQueryVariables = {
  id: Scalars['ID']
};


export type CompanyQuery = (
  { __typename: 'RootQueryType' }
  & { contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  ) }
);

export type CompanyContactFragmentFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'isActive' | 'sortAs' | 'jobTitle' | 'email'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, residences: Array<(
    { __typename: 'Residence' }
    & Pick<Residence, 'id'>
    & { physicalAddress: Maybe<(
      { __typename: 'PhysicalAddress' }
      & Pick<PhysicalAddress, 'id' | 'street' | 'city' | 'state' | 'zip'>
    )>, residence: Maybe<(
      { __typename: 'Residence' }
      & Pick<Residence, 'id'>
    )> }
  )>, relationships: Array<(
    { __typename: 'Relationship' }
    & Pick<Relationship, 'id' | 'notes' | 'key' | 'active' | 'endDate' | 'role' | 'strategicTargetRole'>
    & { parent: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id'>
    ) }
  )> }
);

export type ConfirmSeparateContactsMutationVariables = {
  contactId: Scalars['ID'],
  otherId: Scalars['ID']
};


export type ConfirmSeparateContactsMutation = (
  { __typename: 'RootMutationType' }
  & { confirmSeparateContacts: Maybe<Array<Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id'>
  )>>> }
);

export type ContactCampaignsFragmentFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id'>
  & { campaigns: Array<{ __typename: 'Campaign' }
    & ContactCampaignFieldsFragment
  >, campaignsAsCompany: Array<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name' | 'status'>
  )> }
);

export type ContactCampaignFieldsFragment = (
  { __typename: 'Campaign' }
  & Pick<Campaign, 'id' | 'name' | 'status'>
);

export type ContactCardFragmentFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'displayAs' | 'workPhone' | 'extension' | 'directPhone' | 'mobile' | 'email' | 'additionalEmails' | 'avatarUrl' | 'avatarThumbUrl' | 'clientAccess'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, residences: Array<(
    { __typename: 'Residence' }
    & Pick<Residence, 'id'>
  )
    & ResidenceFragmentFragment
  > }
);

export type ContactImportsQueryVariables = {};


export type ContactImportsQuery = (
  { __typename: 'RootQueryType' }
  & { contactImports: Array<(
    { __typename: 'ContactImport' }
    & Pick<ContactImport, 'id' | 'name' | 'importedAt' | 'countMatched' | 'countAdded'>
  )> }
);

export type DuplicateContactsQueryVariables = {
  contactImportId?: Maybe<Scalars['ID']>,
  mode?: Maybe<Scalars['String']>
};


export type DuplicateContactsQuery = (
  { __typename: 'RootQueryType' }
  & { duplicateContacts: Array<{ __typename: 'DuplicateContactSet' }
    & DuplicateContactFieldsFragment
  > }
);

export type DuplicateContactFieldsFragment = (
  { __typename: 'DuplicateContactSet' }
  & { contacts: Array<{ __typename: 'Contact' }
    & DuplicateContactsContactFieldsFragment
  > }
);

export type DuplicateContactsContactFieldsFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'sortAs' | 'mode' | 'email' | 'workPhone' | 'createdAt'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )>, residences: Array<{ __typename: 'Residence' }
    & ResidenceFragmentFragment
  > }
);

export type EditContactQueryVariables = {
  id: Scalars['ID']
};


export type EditContactQuery = (
  { __typename: 'RootQueryType' }
  & { contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'mode' | 'strategicTargetCategories' | 'displayAs' | 'firstName' | 'lastName' | 'name' | 'suffix' | 'goesBy' | 'workPhone' | 'extension' | 'directPhone' | 'mobile' | 'jobTitle' | 'marketingStatus' | 'email' | 'additionalEmails' | 'webPage' | 'linkedIn' | 'body' | 'birthDay' | 'birthMonth' | 'clientAccessWholeOffice' | 'namesOnInvoices'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )>, residences: Array<{ __typename: 'Residence' }
      & ResidenceFragmentFragment
    >, affiliations: Array<(
      { __typename: 'Affiliation' }
      & Pick<Affiliation, 'id' | 'value'>
      & { affiliationType: Maybe<(
        { __typename: 'AffiliationType' }
        & Pick<AffiliationType, 'id' | 'valueType'>
      )> }
    )> }
  ) }
);

export type EditContactPhysicalAddressQueryVariables = {
  id: Scalars['ID']
};


export type EditContactPhysicalAddressQuery = (
  { __typename: 'RootQueryType' }
  & { physicalAddress: Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'street' | 'city' | 'unit' | 'unitType' | 'state' | 'number' | 'premise' | 'country' | 'zip' | 'legacyStreet' | 'legacyCity' | 'legacyState' | 'legacyZip' | 'googleFormatted' | 'googleData'>
    & { residences: Array<(
      { __typename: 'Residence' }
      & Pick<Residence, 'id'>
      & { contact: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs' | 'mode' | 'name'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type FullContactSearchQueryVariables = {
  filter: ContactSearchFilter
};


export type FullContactSearchQuery = (
  { __typename: 'RootQueryType' }
  & { contactSearch: { __typename: 'ContactResults' }
    & FullContactSearchFieldsFragment
  , tags: Array<{ __typename: 'Tag' }
    & TagFieldsFragment
  > }
);

export type FullContactSearchFieldsFragment = (
  { __typename: 'ContactResults' }
  & Pick<ContactResults, 'totalCount' | 'filteredContactCount' | 'filteredCompanyCount' | 'filteredContactCompaniesCount' | 'clientCount' | 'pastClientCount' | 'currentClientCount' | 'excludingClientsCount' | 'prospectCount' | 'whaleCount' | 'filteredProspectCount' | 'filteredWhaleCount' | 'emailCount' | 'clientAccessCount' | 'title'>
  & { contacts: Array<{ __typename: 'Contact' }
    & FullContactSearchContactFieldsFragment
  > }
);

export type FullContactSearchContactFieldsFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'isActive' | 'lastContactedOn' | 'sortAs' | 'displayAs' | 'email' | 'extension' | 'mobile' | 'workPhone' | 'marketingStatus' | 'mode' | 'avatarThumbUrl'>
  & { lastContactedBy: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  )>, company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, residences: Array<{ __typename: 'Residence' }
    & ResidenceFragmentFragment
  > }
);

export type MarkContactInactiveMutationVariables = {
  id: Scalars['ID'],
  userId: Scalars['ID'],
  reason: Scalars['String']
};


export type MarkContactInactiveMutation = (
  { __typename: 'RootMutationType' }
  & { markContactInactive: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id'>
  )> }
);

export type MarkContactOutdatedMutationVariables = {
  id: Scalars['ID'],
  userId: Scalars['ID']
};


export type MarkContactOutdatedMutation = (
  { __typename: 'RootMutationType' }
  & { markContactOutdated: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id'>
  )> }
);

export type MergeContactsMutationVariables = {
  id: Scalars['ID'],
  mergeId: Scalars['ID'],
  residenceIds?: Maybe<Array<Scalars['ID']>>,
  fieldsToCopy?: Maybe<Array<Scalars['String']>>,
  fieldsToMerge?: Maybe<Array<Scalars['String']>>,
  userId: Scalars['ID']
};


export type MergeContactsMutation = (
  { __typename: 'RootMutationType' }
  & { mergeContacts: { __typename: 'Contact' }
    & MergeContactsContactFieldsFragment
   }
);

export type MergeContactsContactFieldsFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'sortAs' | 'email' | 'workPhone' | 'createdAt'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )>, residences: Array<{ __typename: 'Residence' }
    & ResidenceFragmentFragment
  > }
);

export type MergeFieldsQueryVariables = {
  ids: Array<Scalars['ID']>
};


export type MergeFieldsQuery = (
  { __typename: 'RootQueryType' }
  & { contacts: Array<{ __typename: 'Contact' }
    & MergeFieldsContactFieldsFragment
  > }
);

export type MergeFieldsContactFieldsFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'mode' | 'name' | 'firstName' | 'lastName' | 'suffix' | 'goesBy' | 'marketingStatus' | 'jobTitle' | 'avatarThumbUrl' | 'workPhone' | 'extension' | 'directPhone' | 'mobile' | 'email' | 'additionalEmails' | 'webPage' | 'linkedIn' | 'body' | 'createdAt'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )>, projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  )>, campaigns: Array<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id'>
  )>, notes: Array<(
    { __typename: 'Note' }
    & Pick<Note, 'id'>
  )>, residences: Array<{ __typename: 'Residence' }
    & ResidenceFragmentFragment
  >, contacts: Array<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id'>
  )> }
);

export type ContactNotesFragmentFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id'>
  & { notes: Array<{ __typename: 'Note' }
    & NoteShowFragmentFragment
  > }
);

export type PhysicalAddressFragmentFragment = (
  { __typename: 'PhysicalAddress' }
  & Pick<PhysicalAddress, 'id' | 'premise' | 'number' | 'street' | 'unit' | 'unitType' | 'city' | 'state' | 'zip' | 'country' | 'latitude' | 'longitude'>
  & { community: Maybe<(
    { __typename: 'Community' }
    & Pick<Community, 'id' | 'name'>
  )> }
);

export type RequestDownloadQueryVariables = {
  mode: Scalars['String'],
  filter: ContactSearchFilter
};


export type RequestDownloadQuery = (
  { __typename: 'RootQueryType' }
  & Pick<RootQueryType, 'downloadContacts'>
);

export type ResidenceFragmentFragment = (
  { __typename: 'Residence' }
  & Pick<Residence, 'id' | 'primary' | 'category' | 'endDate'>
  & { physicalAddress: Maybe<{ __typename: 'PhysicalAddress' }
    & PhysicalAddressFragmentFragment
  >, residence: Maybe<(
    { __typename: 'Residence' }
    & Pick<Residence, 'id'>
    & { physicalAddress: Maybe<{ __typename: 'PhysicalAddress' }
      & PhysicalAddressFragmentFragment
    > }
  )> }
);

export type SaveContactMutationVariables = {
  input: ContactInput
};


export type SaveContactMutation = (
  { __typename: 'RootMutationType' }
  & { saveContact: Maybe<{ __typename: 'Contact' }
    & ContactShowFragmentFragment
  > }
);

export type SaveContactPhysicalAddressMutationVariables = {
  input: PhysicalAddressInput
};


export type SaveContactPhysicalAddressMutation = (
  { __typename: 'RootMutationType' }
  & { savePhysicalAddress: Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'premise' | 'number' | 'street' | 'unit' | 'unitType' | 'city' | 'country' | 'state' | 'zip' | 'googleFormatted'>
  )> }
);

export type SaveTenTouchMutationVariables = {
  input: TenTouchInput
};


export type SaveTenTouchMutation = (
  { __typename: 'RootMutationType' }
  & { saveTenTouch: Maybe<Array<Maybe<{ __typename: 'TenTouch' }
    & TenTouchFragmentFragment
  >>> }
);

export type ContactSearchQueryVariables = {
  filter: ContactSearchFilter,
  paginate?: Maybe<Scalars['Boolean']>
};


export type ContactSearchQuery = (
  { __typename: 'RootQueryType' }
  & { contactSearch: (
    { __typename: 'ContactResults' }
    & { contacts: Array<{ __typename: 'Contact' }
      & ContactSearchContactFieldsFragment
    > }
  ) }
);

export type ContactSearchContactFieldsFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'sortAs' | 'displayAs' | 'mode' | 'name' | 'isActive' | 'strategicTargetCategories' | 'avatarThumbUrl' | 'email' | 'workPhone' | 'directPhone' | 'mobile'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, residences: Array<{ __typename: 'Residence' }
    & ResidenceFragmentFragment
  > }
);

export type ShowContactQueryVariables = {
  id: Scalars['ID']
};


export type ShowContactQuery = (
  { __typename: 'RootQueryType' }
  & { contact: { __typename: 'Contact' }
    & ShowContactFieldsFragment
   }
);

export type ShowContactFieldsFragment = (
  { __typename: 'Contact' }
  & { contacts: Array<{ __typename: 'Contact' }
    & CompanyContactFragmentFragment
  >, formerContacts: Array<{ __typename: 'Contact' }
    & CompanyContactFragmentFragment
  >, relationshipsAsParent: Array<(
    { __typename: 'Relationship' }
    & Pick<Relationship, 'id' | 'role' | 'strategicTargetRole' | 'key' | 'endDate' | 'active'>
    & { contact: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'sortAs' | 'jobTitle' | 'isActive' | 'email'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      )> }
    ) }
  )>, importedContacts: Array<(
    { __typename: 'ImportedContact' }
    & Pick<ImportedContact, 'id' | 'action'>
    & { contactImport: (
      { __typename: 'ContactImport' }
      & Pick<ContactImport, 'id' | 'name' | 'importedAt'>
    ) }
  )>, coworkers: Array<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs'>
  )>, tenTouches: Array<{ __typename: 'TenTouch' }
    & TenTouchFragmentFragment
  >, referralProjects: Array<{ __typename: 'Project' }
    & ShowContactProjectFieldsFragment
  >, projects: Array<{ __typename: 'Project' }
    & ShowContactProjectFieldsFragment
  >, strategicTargetProjects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'status' | 'trade' | 'represent' | 'guesstimate'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id' | 'probability' | 'description'>
    ), opportunityOwner: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )> }
  )>, officeProjects: Array<{ __typename: 'Project' }
    & ShowContactProjectFieldsFragment
  >, surveys: Array<(
    { __typename: 'Survey' }
    & Pick<Survey, 'id' | 'completed' | 'updatedAt'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    ), surveyQuestions: Array<(
      { __typename: 'SurveyQuestion' }
      & Pick<SurveyQuestion, 'id' | 'answer' | 'numeric'>
    )> }
  )>, seminarAttendees: Array<(
    { __typename: 'SeminarAttendee' }
    & Pick<SeminarAttendee, 'id' | 'attended'>
    & { seminar: (
      { __typename: 'Seminar' }
      & Pick<Seminar, 'id' | 'title' | 'eventDate'>
    ) }
  )>, taggings: Array<(
    { __typename: 'Tagging' }
    & Pick<Tagging, 'id' | 'createdAt'>
    & { tag: { __typename: 'Tag' }
      & TagFieldsFragment
     }
  )>, affiliations: Array<(
    { __typename: 'Affiliation' }
    & Pick<Affiliation, 'id' | 'value'>
    & { affiliationType: Maybe<(
      { __typename: 'AffiliationType' }
      & Pick<AffiliationType, 'id' | 'valueType' | 'url' | 'name'>
    )> }
  )>, attachments: Array<{ __typename: 'Attachment' }
    & AttachmentFragmentFragment
  > }
)
  & ContactShowFragmentFragment
  & ContactCardFragmentFragment
  & ContactCampaignsFragmentFragment
  & ContactNotesFragmentFragment
;

export type ShowContactProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'name' | 'status' | 'trade' | 'represent' | 'guesstimate'>
  & { salesStage: (
    { __typename: 'SalesStage' }
    & Pick<SalesStage, 'id' | 'probability' | 'description'>
  ), opportunityOwner: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  )> }
);

export type ContactShowFragmentFragment = (
  { __typename: 'Contact' }
  & Pick<Contact, 'id' | 'mode' | 'strategicTargetCategories' | 'name' | 'goesBy' | 'greetAs' | 'jobTitle' | 'displayAs' | 'marketingStatus' | 'avatarUrl' | 'avatarThumbUrl' | 'clientAccess' | 'isActive' | 'deletedOn' | 'deletedReason' | 'createdAt' | 'body' | 'webPage' | 'linkedIn' | 'birthday' | 'downloadedMec'>
  & { company: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, relationships: Array<(
    { __typename: 'Relationship' }
    & Pick<Relationship, 'id' | 'notes' | 'role' | 'active' | 'endDate' | 'key' | 'strategicTargetRole'>
    & { parent: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs' | 'mode' | 'name'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    ) }
  )>, deletedByUser: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  )>, creator: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  )> }
);

export type StrategicTargetCompaniesQueryVariables = {
  filter: ContactSearchFilter,
  paginate?: Maybe<Scalars['Boolean']>
};


export type StrategicTargetCompaniesQuery = (
  { __typename: 'RootQueryType' }
  & { contactSearch: (
    { __typename: 'ContactResults' }
    & { contacts: Array<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name' | 'isActive' | 'strategicTargetCategories'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )>, tags: Array<{ __typename: 'Tag' }
        & TagFieldsFragment
      > }
    )> }
  ) }
);

export type CreditMemoQueryVariables = {
  id: Scalars['ID']
};


export type CreditMemoQuery = (
  { __typename: 'RootQueryType' }
  & { creditMemo: Maybe<(
    { __typename: 'CreditMemo' }
    & Pick<CreditMemo, 'id' | 'description' | 'amount' | 'itemDate'>
    & { appliedPayments: Array<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
      & { invoice: Maybe<(
        { __typename: 'Invoice' }
        & Pick<Invoice, 'id'>
      )> }
    )> }
  )> }
);

export type SaveCreditMemoMutationVariables = {
  input: CreditMemoInput
};


export type SaveCreditMemoMutation = (
  { __typename: 'RootMutationType' }
  & { saveCreditMemo: Maybe<(
    { __typename: 'CreditMemo' }
    & Pick<CreditMemo, 'id'>
  )> }
);

export type DeleteDepositMutationVariables = {
  id: Scalars['ID']
};


export type DeleteDepositMutation = (
  { __typename: 'RootMutationType' }
  & { deleteDeposit: Maybe<(
    { __typename: 'Deposit' }
    & Pick<Deposit, 'id'>
  )> }
);

export type DepositFieldsFragment = (
  { __typename: 'Deposit' }
  & Pick<Deposit, 'id' | 'date' | 'status' | 'synced' | 'account' | 'ach' | 'amount'>
  & { payments: Array<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'amount' | 'checkDate' | 'depositDate' | 'checkNumber' | 'payor'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'totalDue' | 'status'>
    ), retainer: Maybe<(
      { __typename: 'Retainer' }
      & Pick<Retainer, 'id'>
    )> }
  )>, retainers: Array<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'amount' | 'checkDate' | 'depositDate' | 'payor' | 'checkNumber'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'totalDue' | 'status'>
    ) }
  )> }
);

export type DepositQueryVariables = {
  id: Scalars['ID']
};


export type DepositQuery = (
  { __typename: 'RootQueryType' }
  & { deposit: Maybe<(
    { __typename: 'Deposit' }
    & Pick<Deposit, 'id' | 'date' | 'status' | 'account' | 'ach' | 'amount'>
  )> }
);

export type DepositsQueryVariables = {
  month: Scalars['String'],
  startDate: Scalars['String'],
  endDate: Scalars['String']
};


export type DepositsQuery = (
  { __typename: 'RootQueryType' }
  & { deposits: Array<{ __typename: 'Deposit' }
    & DepositFieldsFragment
  >, payments: Array<(
    { __typename: 'Payment' }
    & Pick<Payment, 'id' | 'amount'>
  )> }
);

export type DepositPickerQueryVariables = {
  includeId?: Maybe<Scalars['ID']>
};


export type DepositPickerQuery = (
  { __typename: 'RootQueryType' }
  & { deposits: Array<{ __typename: 'Deposit' }
    & DepositFieldsFragment
  > }
);

export type RecentDepositsQueryVariables = {};


export type RecentDepositsQuery = (
  { __typename: 'RootQueryType' }
  & { deposits: Array<{ __typename: 'Deposit' }
    & DepositFieldsFragment
  > }
);

export type SaveDepositMutationVariables = {
  input: DepositInput
};


export type SaveDepositMutation = (
  { __typename: 'RootMutationType' }
  & { saveDeposit: Maybe<{ __typename: 'Deposit' }
    & DepositFieldsFragment
  > }
);

export type EmployeeAnnualHoursQueryVariables = {
  userLogin: Scalars['String'],
  year: Scalars['Int']
};


export type EmployeeAnnualHoursQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { annualHours: Array<(
      { __typename: 'AnnualHourStats' }
      & Pick<AnnualHourStats, 'date' | 'available' | 'worked' | 'goal' | 'billedTimesheets' | 'billedInvoices' | 'retained' | 'testimony' | 'expert' | 'nonExpert' | 'holidays' | 'pto' | 'sick' | 'training' | 'overhead'>
    )> }
  ) }
);

export type ApproveMilestoneMutationVariables = {
  id: Scalars['ID'],
  managerId: Scalars['ID']
};


export type ApproveMilestoneMutation = (
  { __typename: 'RootMutationType' }
  & { approveMilestone: Maybe<(
    { __typename: 'Milestone' }
    & Pick<Milestone, 'id' | 'completed' | 'approved'>
    & { payPeriod: Maybe<(
      { __typename: 'PayPeriod' }
      & Pick<PayPeriod, 'id' | 'checkDate'>
    )> }
  )> }
);

export type EmployeeChecklistsQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeChecklistsQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { checklists: Array<{ __typename: 'Checklist' }
      & ChecklistFragmentFragment
    > }
  ) }
);

export type DeleteEmployeeMutationVariables = {
  id: Scalars['ID']
};


export type DeleteEmployeeMutation = (
  { __typename: 'RootMutationType' }
  & { deleteEmployee: Maybe<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
  )> }
);

export type DeleteGoalMutationVariables = {
  id: Scalars['ID']
};


export type DeleteGoalMutation = (
  { __typename: 'RootMutationType' }
  & { deleteBillableGoal: Maybe<(
    { __typename: 'BillableGoal' }
    & Pick<BillableGoal, 'id'>
  )> }
);

export type DeleteMilestoneMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMilestoneMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMilestone: Maybe<(
    { __typename: 'Milestone' }
    & Pick<Milestone, 'id'>
  )> }
);

export type DeleteReductionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReductionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteBillableGoalReduction: Maybe<(
    { __typename: 'BillableGoalReduction' }
    & Pick<BillableGoalReduction, 'id'>
  )> }
);

export type DeleteReviewMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReviewMutation = (
  { __typename: 'RootMutationType' }
  & { deleteEmployeeReview: Maybe<(
    { __typename: 'EmployeeReview' }
    & Pick<EmployeeReview, 'id'>
  )> }
);

export type DeleteSalaryMutationVariables = {
  id: Scalars['ID']
};


export type DeleteSalaryMutation = (
  { __typename: 'RootMutationType' }
  & { deleteSalary: Maybe<(
    { __typename: 'Salary' }
    & Pick<Salary, 'id'>
  )> }
);

export type EditEmployeeQueryVariables = {
  id: Scalars['ID']
};


export type EditEmployeeQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName' | 'future' | 'schedule' | 'description' | 'startDate' | 'endDate' | 'department' | 'standardHours' | 'employmentStatus' | 'employeeType'>
    & { office: (
      { __typename: 'Office' }
      & Pick<Office, 'id'>
    ), manager: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )>, billingPosition: (
      { __typename: 'BillingPosition' }
      & Pick<BillingPosition, 'id'>
    ), user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type EditGoalQueryVariables = {
  id: Scalars['ID']
};


export type EditGoalQuery = (
  { __typename: 'RootQueryType' }
  & { billableGoal: Maybe<(
    { __typename: 'BillableGoal' }
    & Pick<BillableGoal, 'id' | 'effectiveDate' | 'fixed' | 'goal'>
  )> }
);

export type EditMilestoneQueryVariables = {
  id: Scalars['ID']
};


export type EditMilestoneQuery = (
  { __typename: 'RootQueryType' }
  & { milestone: Maybe<(
    { __typename: 'Milestone' }
    & Pick<Milestone, 'id' | 'description' | 'itemDate' | 'amount' | 'datePaid' | 'completed' | 'approved'>
  )> }
);

export type EditReductionQueryVariables = {
  id: Scalars['ID']
};


export type EditReductionQuery = (
  { __typename: 'RootQueryType' }
  & { billableGoalReduction: Maybe<(
    { __typename: 'BillableGoalReduction' }
    & Pick<BillableGoalReduction, 'id' | 'itemDate' | 'amount' | 'description'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    )> }
  )> }
);

export type EditReviewQueryVariables = {
  id: Scalars['ID']
};


export type EditReviewQuery = (
  { __typename: 'RootQueryType' }
  & { employeeReview: Maybe<(
    { __typename: 'EmployeeReview' }
    & Pick<EmployeeReview, 'id' | 'completed' | 'reviewDate'>
    & { reviewer: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type EditSalaryQueryVariables = {
  id: Scalars['ID']
};


export type EditSalaryQuery = (
  { __typename: 'RootQueryType' }
  & { salary: Maybe<(
    { __typename: 'Salary' }
    & Pick<Salary, 'id' | 'effectiveDate' | 'hourlyRates' | 'hourlyRate' | 'annualBase' | 'annualIncentive' | 'retroactiveDate' | 'performancePaySummary'>
    & { ptoPlan: Maybe<(
      { __typename: 'PtoPlan' }
      & Pick<PtoPlan, 'id'>
    )> }
  )> }
);

export type EmployeeGoalsQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeGoalsQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { billableGoals: Array<(
      { __typename: 'BillableGoal' }
      & Pick<BillableGoal, 'id' | 'effectiveDate' | 'goal' | 'percentage' | 'fixed'>
    )>, billableGoalReductions: Array<(
      { __typename: 'BillableGoalReduction' }
      & Pick<BillableGoalReduction, 'id' | 'itemDate' | 'amount' | 'description'>
      & { project: Maybe<(
        { __typename: 'Project' }
        & Pick<Project, 'id' | 'number' | 'name'>
      )>, manager: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      )> }
    )> }
  ) }
);

export type EmployeesQueryVariables = {
  status?: Maybe<Scalars['String']>,
  managerId?: Maybe<Scalars['ID']>
};


export type EmployeesQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs' | 'sortAs' | 'future' | 'firstName' | 'lastName' | 'department' | 'startDate' | 'employeeType' | 'employmentStatus'>
    & { billingPosition: (
      { __typename: 'BillingPosition' }
      & Pick<BillingPosition, 'id' | 'description'>
    ), manager: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )>, user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, salaries: Array<(
      { __typename: 'Salary' }
      & Pick<Salary, 'id' | 'effectiveDate' | 'annualBase' | 'annualIncentive' | 'hourlyRates'>
    )>, checklists: Array<{ __typename: 'Checklist' }
      & ChecklistFragmentFragment
    > }
  )> }
);

export type EmployeeMonthlyPaymentsQueryVariables = {
  month: Scalars['String']
};


export type EmployeeMonthlyPaymentsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs' | 'department' | 'employeeType'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
      & { timesheets: Maybe<Array<Maybe<(
        { __typename: 'Timesheet' }
        & Pick<Timesheet, 'id'>
      )>>>, invoicelines: Maybe<Array<Maybe<(
        { __typename: 'Invoiceline' }
        & Pick<Invoiceline, 'id'>
      )>>> }
    )>, monthlyPayments: Array<(
      { __typename: 'MonthlyPayment' }
      & Pick<MonthlyPayment, 'id' | 'category' | 'amount' | 'date' | 'paidOn' | 'updatedAt'>
    )> }
  )> }
);

export type PtoPlansQueryVariables = {};


export type PtoPlansQuery = (
  { __typename: 'RootQueryType' }
  & { ptoPlans: Array<(
    { __typename: 'PtoPlan' }
    & Pick<PtoPlan, 'id' | 'name' | 'tierOne' | 'tierTwo' | 'tierThree'>
  )> }
);

export type PumBillingsQueryVariables = {
  after: Scalars['String'],
  before: Scalars['String']
};


export type PumBillingsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<{ __typename: 'Employee' }
    & PumBillingsEmployeeFieldsFragment
  >, invoices: Array<{ __typename: 'Invoice' }
    & PumBillingsInvoiceFieldsFragment
  > }
);

export type PumBillingsEmployeeFieldsFragment = (
  { __typename: 'Employee' }
  & Pick<Employee, 'id' | 'displayAs' | 'department' | 'firstName' | 'lastName'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )> }
);

export type PumBillingsInvoiceFieldsFragment = (
  { __typename: 'Invoice' }
  & Pick<Invoice, 'id' | 'status' | 'invoiceDate' | 'invoiceTotal' | 'nonBillableTotal' | 'noChargeTotal'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'name' | 'number'>
    & { pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )>, pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type ProjectAssignmentsQueryVariables = {
  filter: Scalars['String']
};


export type ProjectAssignmentsQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<{ __typename: 'Employee' }
    & ProjectAssignmentsEmployeeFieldsFragment
  >, projects: Array<{ __typename: 'Project' }
    & ProjectAssignmentsProjectFieldsFragment
  > }
);

export type ProjectAssignmentsEmployeeFieldsFragment = (
  { __typename: 'Employee' }
  & Pick<Employee, 'id' | 'displayAs' | 'department' | 'firstName' | 'lastName'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )> }
);

export type ProjectAssignmentsProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { pc: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )>, pm: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )>, technicalLead: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )>, projectUsers: Array<(
    { __typename: 'ProjectUser' }
    & Pick<ProjectUser, 'id' | 'role'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id'>
    ) }
  )> }
);

export type EmployeeReviewsQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeReviewsQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { employeeReviews: Array<(
      { __typename: 'EmployeeReview' }
      & Pick<EmployeeReview, 'id' | 'reviewDate' | 'completed'>
      & { reviewer: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      )> }
    )> }
  ) }
);

export type EmployeeSalariesQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeSalariesQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { salaries: Array<(
      { __typename: 'Salary' }
      & Pick<Salary, 'id' | 'effectiveDate' | 'hourlyRates' | 'hourlyRate' | 'annualBase' | 'annualIncentive'>
      & { ptoPlan: Maybe<(
        { __typename: 'PtoPlan' }
        & Pick<PtoPlan, 'id' | 'name'>
      )> }
    )>, milestones: Array<(
      { __typename: 'Milestone' }
      & Pick<Milestone, 'id' | 'description' | 'itemDate' | 'amount' | 'datePaid' | 'completed' | 'approved'>
      & { payPeriod: Maybe<(
        { __typename: 'PayPeriod' }
        & Pick<PayPeriod, 'id' | 'checkDate'>
      )> }
    )> }
  ) }
);

export type SaveEmployeeMutationVariables = {
  input: EmployeeInput
};


export type SaveEmployeeMutation = (
  { __typename: 'RootMutationType' }
  & { saveEmployee: Maybe<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'displayAs' | 'lastName' | 'startDate'>
    & { manager: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )>, office: (
      { __typename: 'Office' }
      & Pick<Office, 'id' | 'location'>
    ), billableGoals: Array<(
      { __typename: 'BillableGoal' }
      & Pick<BillableGoal, 'id' | 'effectiveDate'>
    )>, salaries: Array<(
      { __typename: 'Salary' }
      & Pick<Salary, 'id' | 'effectiveDate'>
    )>, milestones: Array<(
      { __typename: 'Milestone' }
      & Pick<Milestone, 'id' | 'itemDate'>
    )> }
  )> }
);

export type SaveBillableGoalMutationVariables = {
  input: BillableGoalInput
};


export type SaveBillableGoalMutation = (
  { __typename: 'RootMutationType' }
  & { saveBillableGoal: Maybe<(
    { __typename: 'BillableGoal' }
    & Pick<BillableGoal, 'id'>
  )> }
);

export type SaveMilestoneMutationVariables = {
  input: MilestoneInput
};


export type SaveMilestoneMutation = (
  { __typename: 'RootMutationType' }
  & { saveMilestone: Maybe<(
    { __typename: 'Milestone' }
    & Pick<Milestone, 'id'>
  )> }
);

export type SaveBillableGoalReductionMutationVariables = {
  input: BillableGoalReductionInput
};


export type SaveBillableGoalReductionMutation = (
  { __typename: 'RootMutationType' }
  & { saveBillableGoalReduction: Maybe<(
    { __typename: 'BillableGoalReduction' }
    & Pick<BillableGoalReduction, 'id'>
  )> }
);

export type SaveEmployeeReviewMutationVariables = {
  input: EmployeeReviewInput
};


export type SaveEmployeeReviewMutation = (
  { __typename: 'RootMutationType' }
  & { saveEmployeeReview: Maybe<(
    { __typename: 'EmployeeReview' }
    & Pick<EmployeeReview, 'id'>
  )> }
);

export type SaveSalaryMutationVariables = {
  input: SalaryInput
};


export type SaveSalaryMutation = (
  { __typename: 'RootMutationType' }
  & { saveSalary: Maybe<(
    { __typename: 'Salary' }
    & Pick<Salary, 'id'>
  )> }
);

export type EmployeeQueryVariables = {
  id: Scalars['ID']
};


export type EmployeeQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'displayAs' | 'lastName' | 'startDate'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )>, manager: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )>, office: (
      { __typename: 'Office' }
      & Pick<Office, 'id' | 'location'>
    ), notes: Array<{ __typename: 'Note' }
      & NoteShowFragmentFragment
    >, checklists: Array<{ __typename: 'Checklist' }
      & ChecklistFragmentFragment
    > }
  ) }
);

export type GetEmployeeQueryVariables = {
  userLogin: Scalars['String']
};


export type GetEmployeeQuery = (
  { __typename: 'RootQueryType' }
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
    & { salaries: Array<(
      { __typename: 'Salary' }
      & Pick<Salary, 'id' | 'effectiveDate' | 'hourlyRates'>
    )> }
  ) }
);

export type FeatureQueryVariables = {
  id: Scalars['ID']
};


export type FeatureQuery = (
  { __typename: 'RootQueryType' }
  & { feature: (
    { __typename: 'Feature' }
    & Pick<Feature, 'id'>
  )
    & ShowFeatureFragmentFragment
   }
);

export type FeaturesListQueryVariables = {};


export type FeaturesListQuery = (
  { __typename: 'RootQueryType' }
  & { features: Array<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'status' | 'priority' | 'category' | 'featureType' | 'scale' | 'hours' | 'completedOn' | 'title' | 'createdAt'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    ) }
  )> }
);

export type FeaturePickerQueryVariables = {};


export type FeaturePickerQuery = (
  { __typename: 'RootQueryType' }
  & { features: Array<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'category' | 'title'>
  )> }
);

export type SaveFeatureMutationVariables = {
  input: FeatureInput
};


export type SaveFeatureMutation = (
  { __typename: 'RootMutationType' }
  & { saveFeature: Maybe<{ __typename: 'Feature' }
    & ShowFeatureFragmentFragment
  > }
);

export type ShowFeatureFragmentFragment = (
  { __typename: 'Feature' }
  & Pick<Feature, 'id' | 'title' | 'featureType' | 'status' | 'scale' | 'priority' | 'hours' | 'description' | 'category' | 'closeNote' | 'attachmentUrl' | 'createdAt' | 'completedOn'>
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ), feature: Maybe<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'title' | 'category'>
  )>, features: Array<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'title' | 'category' | 'status'>
  )>, attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )>, notes: Array<{ __typename: 'Note' }
    & NoteShowFragmentFragment
  > }
);

export type EditFeeScheduleQueryVariables = {
  id: Scalars['ID']
};


export type EditFeeScheduleQuery = (
  { __typename: 'RootQueryType' }
  & { feeSchedule: Maybe<(
    { __typename: 'FeeSchedule' }
    & Pick<FeeSchedule, 'id' | 'name' | 'effectiveDate'>
  )> }
);

export type FeeSchedulesQueryVariables = {};


export type FeeSchedulesQuery = (
  { __typename: 'RootQueryType' }
  & { feeSchedules: Array<(
    { __typename: 'FeeSchedule' }
    & Pick<FeeSchedule, 'id' | 'name' | 'effectiveDate' | 'attachmentUrl'>
  )> }
);

export type FeeScheduleQueryVariables = {
  id: Scalars['ID']
};


export type FeeScheduleQuery = (
  { __typename: 'RootQueryType' }
  & { feeSchedule: Maybe<(
    { __typename: 'FeeSchedule' }
    & Pick<FeeSchedule, 'id' | 'name' | 'effectiveDate'>
    & { billingRates: Array<(
      { __typename: 'BillingRate' }
      & Pick<BillingRate, 'id' | 'rate'>
      & { billingPosition: (
        { __typename: 'BillingPosition' }
        & Pick<BillingPosition, 'id'>
      ) }
    )> }
  )>, billingPositions: Array<(
    { __typename: 'BillingPosition' }
    & Pick<BillingPosition, 'id' | 'description'>
  )> }
);

export type SaveFeeScheduleMutationVariables = {
  input: FeeScheduleInput
};


export type SaveFeeScheduleMutation = (
  { __typename: 'RootMutationType' }
  & { saveFeeSchedule: Maybe<(
    { __typename: 'FeeSchedule' }
    & Pick<FeeSchedule, 'id'>
  )> }
);

export type DeleteInterviewMutationVariables = {
  id: Scalars['ID']
};


export type DeleteInterviewMutation = (
  { __typename: 'RootMutationType' }
  & { deleteInterview: Maybe<(
    { __typename: 'Interview' }
    & Pick<Interview, 'id'>
  )> }
);

export type EditInterviewQueryVariables = {
  id: Scalars['ID']
};


export type EditInterviewQuery = (
  { __typename: 'RootQueryType' }
  & { interview: Maybe<(
    { __typename: 'Interview' }
    & Pick<Interview, 'id' | 'date' | 'attendees' | 'description' | 'body' | 'bodyJson' | 'legacy' | 'meetingType' | 'template'>
    & { documentReferences: Maybe<Array<Maybe<{ __typename: 'DocumentReference' }
      & DocumentReferenceFragmentFragment
    >>> }
  )> }
);

export type InterviewFragmentFragment = (
  { __typename: 'Interview' }
  & Pick<Interview, 'id' | 'date' | 'attendees' | 'description' | 'template' | 'body' | 'bodyJson' | 'legacy' | 'meetingType'>
  & { tasks: Maybe<Array<Maybe<(
    { __typename: 'Task' }
    & Pick<Task, 'id' | 'completed'>
  )>>> }
);

export type InterviewsQueryVariables = {
  number: Scalars['String']
};


export type InterviewsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'projectType'>
    & { interviews: Array<{ __typename: 'Interview' }
      & InterviewFragmentFragment
    > }
  ) }
);

export type SaveInterviewMutationVariables = {
  input: InterviewInput
};


export type SaveInterviewMutation = (
  { __typename: 'RootMutationType' }
  & { saveInterview: Maybe<{ __typename: 'Interview' }
    & InterviewFragmentFragment
  > }
);

export type InterviewTemplatesQueryVariables = {};


export type InterviewTemplatesQuery = (
  { __typename: 'RootQueryType' }
  & { interviews: Maybe<Array<Maybe<{ __typename: 'Interview' }
    & InterviewFragmentFragment
  >>> }
);

export type CardFragmentFragment = (
  { __typename: 'KanbanCard' }
  & Pick<KanbanCard, 'id' | 'column' | 'title' | 'notes' | 'dueDate' | 'dateCompleted' | 'hours' | 'blocked' | 'blockedReason' | 'rank' | 'leadTime' | 'cycleTime'>
  & { deliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description'>
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType'>
    & { pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'color'>
    )>, pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'color'>
    )> }
  )>, feature: Maybe<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'title'>
  )>, user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, tasks: Array<(
    { __typename: 'Task' }
    & Pick<Task, 'id' | 'description' | 'completed' | 'itemDate' | 'hours'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )> }
  )>, events: Array<(
    { __typename: 'KanbanCardEvents' }
    & Pick<KanbanCardEvents, 'time' | 'column'>
  )> }
);

export type DeleteKanbanCardMutationVariables = {
  id: Scalars['ID']
};


export type DeleteKanbanCardMutation = (
  { __typename: 'RootMutationType' }
  & { deleteKanbanCard: Maybe<(
    { __typename: 'KanbanCard' }
    & Pick<KanbanCard, 'id'>
  )> }
);

export type FeatureKanbanCardsQueryVariables = {
  id: Scalars['ID']
};


export type FeatureKanbanCardsQuery = (
  { __typename: 'RootQueryType' }
  & { feature: { __typename: 'Feature' }
    & KanbanCardsFeatureFragmentFragment
   }
);

export type KanbanCardsFeatureFragmentFragment = (
  { __typename: 'Feature' }
  & Pick<Feature, 'id'>
  & { kanbanCards: Array<{ __typename: 'KanbanCard' }
    & CardFragmentFragment
  > }
);

export type KanbanCardsFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { kanbanCards: Array<{ __typename: 'KanbanCard' }
    & CardFragmentFragment
  > }
);

export type KanbanCardsQueryVariables = {
  projectNumber?: Maybe<Scalars['String']>
};


export type KanbanCardsQuery = (
  { __typename: 'RootQueryType' }
  & { project: { __typename: 'Project' }
    & KanbanCardsFragmentFragment
   }
);

export type ProjectCardsQueryVariables = {};


export type ProjectCardsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<{ __typename: 'Project' }
    & ProjectCardsProjectFieldsFragment
  > }
);

export type ProjectCardsProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'name'>
  & { pm: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, pc: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, technicalLead: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, kanbanCards: Array<(
    { __typename: 'KanbanCard' }
    & Pick<KanbanCard, 'id' | 'dueDate' | 'column'>
  )> }
);

export type SaveKanbanCardMutationVariables = {
  input: KanbanCardInput
};


export type SaveKanbanCardMutation = (
  { __typename: 'RootMutationType' }
  & { saveKanbanCard: Maybe<{ __typename: 'KanbanCard' }
    & CardFragmentFragment
  > }
);

export type SortKanbanCardMutationVariables = {
  id: Scalars['ID'],
  position?: Maybe<Scalars['String']>,
  rank?: Maybe<Scalars['Int']>,
  column: Scalars['String']
};


export type SortKanbanCardMutation = (
  { __typename: 'RootMutationType' }
  & { sortKanbanCard: Maybe<Array<Maybe<(
    { __typename: 'KanbanCard' }
    & Pick<KanbanCard, 'id' | 'rank' | 'column' | 'dateCompleted'>
  )>>> }
);

export type AllKanbanCardsQueryVariables = {
  user?: Maybe<Scalars['String']>
};


export type AllKanbanCardsQuery = (
  { __typename: 'RootQueryType' }
  & { kanbanCards: Array<{ __typename: 'KanbanCard' }
    & CardFragmentFragment
  > }
);

export type KpisQueryVariables = {
  globalSet?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  global: Scalars['Boolean']
};


export type KpisQuery = (
  { __typename: 'RootQueryType' }
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ), kpiSet: { __typename: 'KpiSet' }
    & KpiSetFragmentFragment
  , kpis: Maybe<Array<Maybe<{ __typename: 'Kpi' }
    & KpiFragmentFragment
  >>> }
);

export type DeleteKpiSectionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteKpiSectionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteKpiSection: Maybe<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id'>
  )> }
);

export type DeleteKpiTypeMutationVariables = {
  id: Scalars['ID']
};


export type DeleteKpiTypeMutation = (
  { __typename: 'RootMutationType' }
  & { deleteKpiType: Maybe<(
    { __typename: 'KpiType' }
    & Pick<KpiType, 'id'>
  )> }
);

export type KpiFragmentFragment = (
  { __typename: 'Kpi' }
  & Pick<Kpi, 'id' | 'date' | 'value' | 'notApplicable'>
  & { kpiType: Maybe<(
    { __typename: 'KpiType' }
    & Pick<KpiType, 'id' | 'title' | 'mode' | 'description' | 'hideWhenEmpty' | 'editable' | 'shouldNotExceedGoal' | 'startYear' | 'endYear' | 'section' | 'valueType' | 'aggregation'>
    & { kpiSection: Maybe<(
      { __typename: 'KpiSection' }
      & Pick<KpiSection, 'id'>
    )> }
  )> }
);

export type KpiSetFragmentFragment = (
  { __typename: 'KpiSet' }
  & Pick<KpiSet, 'id' | 'name' | 'globalSet'>
  & { kpiSections: Array<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id' | 'rank' | 'name' | 'category' | 'who' | 'description'>
    & { kpiTypes: Maybe<Array<Maybe<(
      { __typename: 'KpiType' }
      & Pick<KpiType, 'id' | 'title' | 'rank' | 'description' | 'hideWhenEmpty' | 'mode' | 'editable' | 'shouldNotExceedGoal' | 'startYear' | 'endYear' | 'aggregation' | 'section' | 'valueType' | 'staffTypes'>
    )>>> }
  )> }
);

export type MoveKpiSectionMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveKpiSectionMutation = (
  { __typename: 'RootMutationType' }
  & { moveKpiSection: Maybe<Array<Maybe<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id' | 'name' | 'rank'>
  )>>> }
);

export type MoveKpiTypeMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveKpiTypeMutation = (
  { __typename: 'RootMutationType' }
  & { moveKpiType: Maybe<Array<Maybe<(
    { __typename: 'KpiType' }
    & Pick<KpiType, 'id' | 'rank'>
  )>>> }
);

export type SaveKpiMutationVariables = {
  input: KpiInput
};


export type SaveKpiMutation = (
  { __typename: 'RootMutationType' }
  & { saveKpi: Maybe<(
    { __typename: 'Kpi' }
    & Pick<Kpi, 'id'>
  )> }
);

export type SaveKpiSectionMutationVariables = {
  input: KpiSectionInput
};


export type SaveKpiSectionMutation = (
  { __typename: 'RootMutationType' }
  & { saveKpiSection: Maybe<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id' | 'name' | 'description' | 'who' | 'category' | 'rank' | 'pageBreak'>
  )> }
);

export type SaveKpiSetMutationVariables = {
  input: KpiSetInput
};


export type SaveKpiSetMutation = (
  { __typename: 'RootMutationType' }
  & { saveKpiSet: Maybe<(
    { __typename: 'KpiSet' }
    & Pick<KpiSet, 'id' | 'name' | 'globalSet'>
  )> }
);

export type SaveKpiTypeMutationVariables = {
  input: KpiTypeInput
};


export type SaveKpiTypeMutation = (
  { __typename: 'RootMutationType' }
  & { saveKpiType: Maybe<(
    { __typename: 'KpiType' }
    & Pick<KpiType, 'id' | 'mode' | 'title' | 'valueType' | 'shouldNotExceedGoal' | 'editable' | 'description' | 'startYear' | 'endYear' | 'hideWhenEmpty' | 'rank' | 'aggregation'>
  )> }
);

export type KpiSectionQueryVariables = {
  id: Scalars['ID']
};


export type KpiSectionQuery = (
  { __typename: 'RootQueryType' }
  & { kpiSection: Maybe<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id' | 'name' | 'category' | 'who' | 'description' | 'rank' | 'pageBreak'>
  )> }
);

export type KpiSetQueryVariables = {
  id: Scalars['ID']
};


export type KpiSetQuery = (
  { __typename: 'RootQueryType' }
  & { kpiSet: (
    { __typename: 'KpiSet' }
    & Pick<KpiSet, 'id' | 'name' | 'globalSet'>
    & { kpiSections: Array<(
      { __typename: 'KpiSection' }
      & Pick<KpiSection, 'id' | 'rank' | 'name' | 'who' | 'description'>
      & { kpiTypes: Maybe<Array<Maybe<(
        { __typename: 'KpiType' }
        & Pick<KpiType, 'id' | 'rank' | 'title' | 'valueType' | 'editable' | 'description' | 'hideWhenEmpty' | 'aggregation' | 'mode'>
      )>>> }
    )> }
  ) }
);

export type KpiSetsQueryVariables = {};


export type KpiSetsQuery = (
  { __typename: 'RootQueryType' }
  & { kpiSets: Array<{ __typename: 'KpiSet' }
    & KpiSetsFieldsFragment
  > }
);

export type KpiSetsFieldsFragment = (
  { __typename: 'KpiSet' }
  & Pick<KpiSet, 'id' | 'name' | 'globalSet'>
  & { kpiSections: Array<(
    { __typename: 'KpiSection' }
    & Pick<KpiSection, 'id' | 'rank' | 'name' | 'who' | 'description'>
    & { kpiTypes: Maybe<Array<Maybe<(
      { __typename: 'KpiType' }
      & Pick<KpiType, 'id' | 'rank' | 'title' | 'valueType' | 'editable' | 'description' | 'hideWhenEmpty' | 'aggregation' | 'mode'>
    )>>> }
  )> }
);

export type KpiTypeQueryVariables = {
  id: Scalars['ID']
};


export type KpiTypeQuery = (
  { __typename: 'RootQueryType' }
  & { kpiType: Maybe<(
    { __typename: 'KpiType' }
    & Pick<KpiType, 'id' | 'mode' | 'title' | 'valueType' | 'shouldNotExceedGoal' | 'editable' | 'startYear' | 'endYear' | 'description' | 'hideWhenEmpty' | 'aggregation' | 'rank'>
  )> }
);

export type DeleteListMutationVariables = {
  id: Scalars['ID']
};


export type DeleteListMutation = (
  { __typename: 'RootMutationType' }
  & { deleteList: Maybe<(
    { __typename: 'List' }
    & Pick<List, 'id'>
  )> }
);

export type DeleteListItemMutationVariables = {
  id: Scalars['ID']
};


export type DeleteListItemMutation = (
  { __typename: 'RootMutationType' }
  & { deleteListItem: Maybe<(
    { __typename: 'ListItem' }
    & Pick<ListItem, 'id'>
  )> }
);

export type EditListQueryVariables = {
  id: Scalars['ID']
};


export type EditListQuery = (
  { __typename: 'RootQueryType' }
  & { list: { __typename: 'List' }
    & EditListFragmentFragment
   }
);

export type EditListFragmentFragment = (
  { __typename: 'List' }
  & Pick<List, 'id' | 'name' | 'sortBy' | 'fields'>
);

export type EditListItemQueryVariables = {
  id: Scalars['ID']
};


export type EditListItemQuery = (
  { __typename: 'RootQueryType' }
  & { listItem: { __typename: 'ListItem' }
    & EditListItemFieldsFragment
   }
);

export type EditListItemFieldsFragment = (
  { __typename: 'ListItem' }
  & Pick<ListItem, 'id' | 'name' | 'fields'>
  & { item: Maybe<(
    { __typename: 'ListItem' }
    & Pick<ListItem, 'id'>
  )> }
);

export type MoveListItemMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveListItemMutation = (
  { __typename: 'RootMutationType' }
  & { moveListItem: Maybe<Array<Maybe<(
    { __typename: 'ListItem' }
    & Pick<ListItem, 'id' | 'rank'>
  )>>> }
);

export type ProjectListsQueryVariables = {
  number: Scalars['String']
};


export type ProjectListsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { lists: Array<(
      { __typename: 'List' }
      & Pick<List, 'id' | 'name'>
    )> }
  ) }
);

export type SaveListMutationVariables = {
  input: ListInput
};


export type SaveListMutation = (
  { __typename: 'RootMutationType' }
  & { saveList: Maybe<(
    { __typename: 'List' }
    & Pick<List, 'id' | 'name'>
  )> }
);

export type SaveListItemMutationVariables = {
  input: ListItemInput
};


export type SaveListItemMutation = (
  { __typename: 'RootMutationType' }
  & { saveListItem: Maybe<(
    { __typename: 'ListItem' }
    & Pick<ListItem, 'id' | 'name'>
  )> }
);

export type ShowListQueryVariables = {
  id: Scalars['ID']
};


export type ShowListQuery = (
  { __typename: 'RootQueryType' }
  & { list: { __typename: 'List' }
    & ShowListFieldsFragment
   }
);

export type ShowListFieldsFragment = (
  { __typename: 'List' }
  & Pick<List, 'id' | 'name' | 'sortBy' | 'fields'>
  & { items: Array<{ __typename: 'ListItem' }
    & ShowListItemFieldsFragment
  > }
);

export type ShowListItemFieldsFragment = (
  { __typename: 'ListItem' }
  & Pick<ListItem, 'id' | 'name' | 'rank' | 'fields'>
  & { item: Maybe<(
    { __typename: 'ListItem' }
    & Pick<ListItem, 'id'>
  )> }
);

export type DeleteMailingMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMailingMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMailing: Maybe<(
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id'>
  )> }
);

export type EditMailingQueryVariables = {
  id: Scalars['ID']
};


export type EditMailingQuery = (
  { __typename: 'RootQueryType' }
  & { mailing: (
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id' | 'body' | 'bypassFilters' | 'campaignField' | 'clientFilter' | 'company' | 'excludeCampaignField' | 'contactType' | 'replyTo' | 'sender' | 'status' | 'subject' | 'suppressUnsubscribeLink' | 'updateCampaignField'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
    )>, campaign: Maybe<(
      { __typename: 'Campaign' }
      & Pick<Campaign, 'id'>
    )>, taggings: Array<(
      { __typename: 'Tagging' }
      & Pick<Tagging, 'id'>
    )> }
  ) }
);

export type MailingFieldsFragment = (
  { __typename: 'Mailing' }
  & Pick<Mailing, 'id' | 'subject' | 'sender' | 'sentAt' | 'contactsMailingsCount' | 'attachmentUrl'>
);

export type MailingsQueryVariables = {};


export type MailingsQuery = (
  { __typename: 'RootQueryType' }
  & { mailings: Array<{ __typename: 'Mailing' }
    & MailingFieldsFragment
  > }
);

export type PreviewContactsQueryVariables = {
  id: Scalars['ID']
};


export type PreviewContactsQuery = (
  { __typename: 'RootQueryType' }
  & { mailing: (
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id' | 'subject'>
    & { previewContacts: Array<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'greetAs' | 'displayAs'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    )> }
  ) }
);

export type SaveMailingMutationVariables = {
  input: MailingInput
};


export type SaveMailingMutation = (
  { __typename: 'RootMutationType' }
  & { saveMailing: Maybe<(
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id'>
  )> }
);

export type SendMailingMutationVariables = {
  id: Scalars['ID']
};


export type SendMailingMutation = (
  { __typename: 'RootMutationType' }
  & { sendMailing: Maybe<(
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id' | 'status'>
  )> }
);

export type MailingQueryVariables = {
  id: Scalars['ID']
};


export type MailingQuery = (
  { __typename: 'RootQueryType' }
  & { mailing: { __typename: 'Mailing' }
    & ShowMailingFieldsFragment
   }
);

export type ShowMailingFieldsFragment = (
  { __typename: 'Mailing' }
  & Pick<Mailing, 'id' | 'subject' | 'body' | 'company' | 'status' | 'replyTo' | 'sender' | 'sentAt' | 'contactsMailingsCount' | 'attachmentUrl' | 'campaignField' | 'excludeCampaignField'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )>, campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )>, taggings: Array<(
    { __typename: 'Tagging' }
    & Pick<Tagging, 'id' | 'scope'>
    & { tag: (
      { __typename: 'Tag' }
      & Pick<Tag, 'id' | 'category'>
    ) }
  )>, checklists: Array<{ __typename: 'Checklist' }
    & ChecklistFragmentFragment
  > }
);

export type SendMailingTestEmailMutationVariables = {
  id: Scalars['ID'],
  email: Scalars['String']
};


export type SendMailingTestEmailMutation = (
  { __typename: 'RootMutationType' }
  & { sendMailingTestEmail: Maybe<(
    { __typename: 'Mailing' }
    & Pick<Mailing, 'id'>
  )> }
);

export type DeleteMembershipMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMembershipMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMembership: Maybe<(
    { __typename: 'Membership' }
    & Pick<Membership, 'id'>
  )> }
);

export type MembershipFragmentFragment = (
  { __typename: 'Membership' }
  & Pick<Membership, 'id' | 'role' | 'invoicing' | 'invoicePercentage' | 'primaryContact' | 'namesOnInvoices' | 'fileNumber' | 'invoiceRecipient' | 'notes' | 'blockClientAccess'>
  & { contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs' | 'workPhone' | 'directPhone' | 'mobile' | 'extension' | 'email' | 'avatarUrl' | 'avatarThumbUrl' | 'clientAccess'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    )>, residences: Array<{ __typename: 'Residence' }
      & ResidenceFragmentFragment
    > }
  ), project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  )> }
);

export type ProjectMembershipsQueryVariables = {
  id: Scalars['ID']
};


export type ProjectMembershipsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      ) }
    )> }
  ) }
);

export type SaveMembershipMutationVariables = {
  input: MembershipInput
};


export type SaveMembershipMutation = (
  { __typename: 'RootMutationType' }
  & { saveMembership: Maybe<{ __typename: 'Membership' }
    & MembershipFragmentFragment
  > }
);

export type DeleteMessageMutationVariables = {
  id: Scalars['ID']
};


export type DeleteMessageMutation = (
  { __typename: 'RootMutationType' }
  & { deleteMessage: Maybe<(
    { __typename: 'Message' }
    & Pick<Message, 'id'>
  )> }
);

export type MessageFieldsFragment = (
  { __typename: 'Message' }
  & Pick<Message, 'id' | 'sentAt' | 'body' | 'html' | 'from' | 'to' | 'cc' | 'bcc' | 'subject'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  )>, documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )
    & DocumentFragmentFragment
  >, attachments: Array<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'note' | 'attachmentUrl'>
    & { attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )> }
);

export type ProjectMessagesQueryVariables = {
  id: Scalars['ID']
};


export type ProjectMessagesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { messages: Array<{ __typename: 'Message' }
      & MessageFieldsFragment
    > }
  ) }
);

export type SaveMessageMutationVariables = {
  input: MessageInput
};


export type SaveMessageMutation = (
  { __typename: 'RootMutationType' }
  & { saveMessage: Maybe<{ __typename: 'Message' }
    & MessageFieldsFragment
  > }
);

export type EditorTemplatesQueryVariables = {
  projectId?: Maybe<Scalars['ID']>,
  scope: Scalars['String']
};


export type EditorTemplatesQuery = (
  { __typename: 'RootQueryType' }
  & { editorTemplates: Array<(
    { __typename: 'EditorTemplate' }
    & Pick<EditorTemplate, 'id' | 'name' | 'content'>
  )> }
);

export type MonthlyPaymentQueryVariables = {
  id: Scalars['ID']
};


export type MonthlyPaymentQuery = (
  { __typename: 'RootQueryType' }
  & { monthlyPayment: Maybe<(
    { __typename: 'MonthlyPayment' }
    & Pick<MonthlyPayment, 'id' | 'date' | 'amount' | 'category' | 'paidOn' | 'updatedAt'>
  )> }
);

export type SaveMonthlyPaymentMutationVariables = {
  input: MonthlyPaymentInput
};


export type SaveMonthlyPaymentMutation = (
  { __typename: 'RootMutationType' }
  & { saveMonthlyPayment: Maybe<(
    { __typename: 'MonthlyPayment' }
    & Pick<MonthlyPayment, 'id' | 'date' | 'amount' | 'category' | 'paidOn' | 'updatedAt'>
  )> }
);

export type NotesQueryVariables = {
  login?: Maybe<Scalars['String']>,
  month: Scalars['String']
};


export type NotesQuery = (
  { __typename: 'RootQueryType' }
  & { notes: Maybe<Array<Maybe<(
    { __typename: 'Note' }
    & Pick<Note, 'id' | 'contactType' | 'itemDate' | 'itemType'>
    & { contact: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs'>
      & { company: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'name'>
      )> }
    )>, project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'salesStageId'>
    )>, campaign: Maybe<(
      { __typename: 'Campaign' }
      & Pick<Campaign, 'id' | 'name'>
    )>, feature: Maybe<(
      { __typename: 'Feature' }
      & Pick<Feature, 'id' | 'title'>
    )>, employee: Maybe<(
      { __typename: 'Employee' }
      & Pick<Employee, 'id'>
    )>, device: Maybe<(
      { __typename: 'Device' }
      & Pick<Device, 'id'>
    )> }
  )>>> }
);

export type DeleteNoteMutationVariables = {
  id: Scalars['ID']
};


export type DeleteNoteMutation = (
  { __typename: 'RootMutationType' }
  & { deleteNote: Maybe<(
    { __typename: 'Note' }
    & Pick<Note, 'id'>
  )> }
);

export type NoteQueryVariables = {
  id: Scalars['ID']
};


export type NoteQuery = (
  { __typename: 'RootQueryType' }
  & { note: (
    { __typename: 'Note' }
    & Pick<Note, 'id'>
    & { tasks: Maybe<Array<Maybe<{ __typename: 'Task' }
      & TaskFragmentFragment
    >>> }
  )
    & NoteShowFragmentFragment
   }
);

export type SaveNoteMutationVariables = {
  input: NoteInput
};


export type SaveNoteMutation = (
  { __typename: 'RootMutationType' }
  & { saveNote: Maybe<{ __typename: 'Note' }
    & NoteShowFragmentFragment
  > }
);

export type NoteShowFragmentFragment = (
  { __typename: 'Note' }
  & Pick<Note, 'id' | 'itemDate' | 'updatedAt' | 'description' | 'contactType' | 'itemType' | 'key' | 'source' | 'hidden' | 'attachmentUrl' | 'attachmentThumbUrl' | 'notifyPm' | 'projectId'>
  & { notifiedUsers: Maybe<Array<Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )>>>, user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )>, attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )>, contact: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id'>
  )>, feature: Maybe<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id'>
  )>, employee: Maybe<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id'>
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'salesStageId'>
  )>, topic: Maybe<(
    { __typename: 'Topic' }
    & Pick<Topic, 'id'>
  )>, tasks: Maybe<Array<Maybe<{ __typename: 'Task' }
    & TaskFragmentFragment
  >>> }
);

export type PayPeriodQueryVariables = {
  id: Scalars['ID']
};


export type PayPeriodQuery = (
  { __typename: 'RootQueryType' }
  & { payPeriod: Maybe<(
    { __typename: 'PayPeriod' }
    & Pick<PayPeriod, 'id' | 'checkDate' | 'endDate' | 'processed' | 'startDate'>
    & { payPeriodLines: Array<{ __typename: 'PayPeriodLine' }
      & PayPeriodLineFieldsFragment
    > }
  )> }
);

export type PayPeriodLineFieldsFragment = (
  { __typename: 'PayPeriodLine' }
  & Pick<PayPeriodLine, 'pay' | 'milestones' | 'incentive' | 'regularHours' | 'otHours'>
  & { employee: (
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'firstName' | 'lastName'>
  ), salary: (
    { __typename: 'Salary' }
    & Pick<Salary, 'id' | 'hourlyRate'>
  ) }
);

export type SubmitPayPeriodMutationVariables = {};


export type SubmitPayPeriodMutation = (
  { __typename: 'RootMutationType' }
  & { submitPayPeriod: Maybe<(
    { __typename: 'PayPeriod' }
    & Pick<PayPeriod, 'id' | 'processed'>
    & { payPeriodLines: Array<(
      { __typename: 'PayPeriodLine' }
      & Pick<PayPeriodLine, 'pay' | 'milestones' | 'incentive' | 'regularHours' | 'otHours'>
      & { employee: (
        { __typename: 'Employee' }
        & Pick<Employee, 'id' | 'firstName' | 'lastName'>
      ), salary: (
        { __typename: 'Salary' }
        & Pick<Salary, 'id' | 'hourlyRate'>
      ) }
    )> }
  )> }
);

export type PhotosetQueryVariables = {
  id: Scalars['ID'],
  project: Scalars['String']
};


export type PhotosetQuery = (
  { __typename: 'RootQueryType' }
  & { photoset: { __typename: 'Photoset' }
    & PhotosetFieldsFragment
   }
);

export type PhotosetFieldsFragment = (
  { __typename: 'Photoset' }
  & Pick<Photoset, 'id' | 'photosCount' | 'pfcs' | 'party' | 'description' | 'day' | 'inspectionDate'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )> }
);

export type BatchUpdatePhotosMutationVariables = {
  input: BatchPhotoInput
};


export type BatchUpdatePhotosMutation = (
  { __typename: 'RootMutationType' }
  & { batchUpdatePhotos: Maybe<Array<Maybe<{ __typename: 'Photo' }
    & PhotoListFragmentFragment
  >>> }
);

export type ClientAccessPhotoFiltersQueryVariables = {
  number: Scalars['String']
};


export type ClientAccessPhotoFiltersQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'issueSort'>
    & { addresses: Array<(
      { __typename: 'Address' }
      & Pick<Address, 'id' | 'name' | 'addressId'>
    )>, locations: Array<(
      { __typename: 'Location' }
      & Pick<Location, 'id' | 'name' | 'locationId'>
    )>, elements: Array<(
      { __typename: 'Element' }
      & Pick<Element, 'id' | 'number' | 'name'>
    )>, players: Array<(
      { __typename: 'Player' }
      & Pick<Player, 'id' | 'displayName'>
    )>, issues: Array<(
      { __typename: 'Issue' }
      & Pick<Issue, 'id' | 'number' | 'description' | 'issueId'>
      & { elements: Maybe<Array<Maybe<(
        { __typename: 'Element' }
        & Pick<Element, 'id' | 'number' | 'name'>
      )>>> }
    )>, photosets: Array<(
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'inspectionDate' | 'endDate' | 'startDate' | 'pfcs' | 'party' | 'description' | 'photosCount' | 'complete' | 'day'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      )> }
    )> }
  ) }
);

export type ClientAccessPhotosQueryVariables = {
  projectId: Scalars['ID'],
  photosetId?: Maybe<Scalars['ID']>,
  addressId?: Maybe<Scalars['ID']>,
  locationId?: Maybe<Scalars['ID']>,
  elementId?: Maybe<Scalars['ID']>,
  issueId?: Maybe<Scalars['ID']>,
  playerId?: Maybe<Scalars['ID']>,
  keyPhotos?: Maybe<Scalars['Boolean']>
};


export type ClientAccessPhotosQuery = (
  { __typename: 'RootQueryType' }
  & { photos: Array<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id' | 'fieldNote' | 'smallImage' | 'fullImage' | 'imageNumber'>
    & { photoset: (
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'party' | 'description' | 'day' | 'pfcs' | 'inspectionDate' | 'startDate'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )> }
    ), addresses: Array<(
      { __typename: 'Address' }
      & Pick<Address, 'id' | 'name'>
    )>, locations: Array<(
      { __typename: 'Location' }
      & Pick<Location, 'id' | 'name'>
    )> }
  )> }
);

export type CompletePhotosetMutationVariables = {
  id: Scalars['ID']
};


export type CompletePhotosetMutation = (
  { __typename: 'RootMutationType' }
  & { completePhotoset: Maybe<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'complete'>
  )> }
);

export type CopyPreviousPhotoMutationVariables = {
  id: Scalars['ID'],
  sourceId: Scalars['ID']
};


export type CopyPreviousPhotoMutation = (
  { __typename: 'RootMutationType' }
  & { copyPreviousPhoto: Maybe<{ __typename: 'Photo' }
    & EditPhotoFragmentFragment
  > }
);

export type DeletePhotosetMutationVariables = {
  id: Scalars['ID']
};


export type DeletePhotosetMutation = (
  { __typename: 'RootMutationType' }
  & { deletePhotoset: Maybe<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id'>
  )> }
);

export type DownloadPhotosMutationVariables = {
  input: DownloadPhotosInput
};


export type DownloadPhotosMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'downloadPhotos'>
);

export type EditPhotoQueryVariables = {
  id: Scalars['ID']
};


export type EditPhotoQuery = (
  { __typename: 'RootQueryType' }
  & { photo: { __typename: 'Photo' }
    & EditPhotoFragmentFragment
   }
);

export type EditPhotoFragmentFragment = (
  { __typename: 'Photo' }
  & Pick<Photo, 'id' | 'imageNumber' | 'smallImage' | 'fieldNote' | 'revisedAnnotation' | 'keyPhoto' | 'keyPhotoDescription' | 'updatedAt'>
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'mainPhotoType' | 'mainPhotoId'>
  ), photoset: (
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'pfcs' | 'party' | 'photosCount' | 'day'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  ), photoLinks: Array<(
    { __typename: 'PhotoLink' }
    & Pick<PhotoLink, 'id' | 'addressId' | 'locationId' | 'elementId' | 'issueId' | 'playerId' | 'testLocationId' | 'key'>
  )>, previousPhoto: Maybe<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id'>
  )>, nextPhoto: Maybe<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id'>
  )> }
);

export type EditPhotosetQueryVariables = {
  id: Scalars['ID']
};


export type EditPhotosetQuery = (
  { __typename: 'RootQueryType' }
  & { photoset: (
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'pfcs' | 'party' | 'description' | 'day' | 'inspectionDate' | 'complete' | 'source'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, dispatch: Maybe<(
      { __typename: 'Dispatch' }
      & Pick<Dispatch, 'id'>
    )> }
  ) }
);

export type EditPhotosetSummaryQueryVariables = {
  id: Scalars['ID']
};


export type EditPhotosetSummaryQuery = (
  { __typename: 'RootQueryType' }
  & { photoset: (
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'summary'>
  ) }
);

export type MainPhotoPhotoQueryVariables = {
  id: Scalars['ID']
};


export type MainPhotoPhotoQuery = (
  { __typename: 'RootQueryType' }
  & { image: (
    { __typename: 'Photo' }
    & Pick<Photo, 'id' | 'smallImage' | 'fullImage'>
  ) }
);

export type PhotoListFragmentFragment = (
  { __typename: 'Photo' }
  & Pick<Photo, 'id' | 'keyPhoto' | 'fieldNote' | 'revisedAnnotation' | 'imageNumber' | 'smallImage' | 'thumbImage' | 'fullImage'>
  & { photoset: (
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'pfcs' | 'party' | 'day' | 'inspectionDate'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  ), photoLinks: Array<(
    { __typename: 'PhotoLink' }
    & Pick<PhotoLink, 'id' | 'key'>
    & { address: Maybe<(
      { __typename: 'Address' }
      & Pick<Address, 'id' | 'displayName'>
    )>, location: Maybe<(
      { __typename: 'Location' }
      & Pick<Location, 'id' | 'displayName'>
    )>, element: Maybe<(
      { __typename: 'Element' }
      & Pick<Element, 'id' | 'displayName'>
    )>, issue: Maybe<(
      { __typename: 'Issue' }
      & Pick<Issue, 'id' | 'number' | 'description'>
    )>, player: Maybe<(
      { __typename: 'Player' }
      & Pick<Player, 'id' | 'displayName'>
    )>, testLocation: Maybe<(
      { __typename: 'TestLocation' }
      & Pick<TestLocation, 'id' | 'displayName'>
    )> }
  )> }
);

export type PhotosetsQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type PhotosetsQuery = (
  { __typename: 'RootQueryType' }
  & { photosets: Array<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'inspectionDate' | 'day' | 'party' | 'pfcs' | 'description' | 'keyPhotoCount'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )> }
);

export type ProjectPhotosetsQueryVariables = {
  number: Scalars['String']
};


export type ProjectPhotosetsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'inspectionSummary'>
    & { photosets: Array<(
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'pfcs' | 'party' | 'description' | 'day' | 'inspectionDate' | 'complete' | 'summary' | 'photosCount'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      )>, reports: Array<(
        { __typename: 'Report' }
        & Pick<Report, 'id' | 'legacy' | 'status' | 'reportType'>
      )>, legacyReports: Array<(
        { __typename: 'Report' }
        & Pick<Report, 'id' | 'legacy' | 'status' | 'reportType'>
      )>, nextPhotoToAnnotate: Maybe<(
        { __typename: 'Photo' }
        & Pick<Photo, 'id' | 'imageNumber'>
      )>, dispatch: Maybe<{ __typename: 'Dispatch' }
        & DispatchFragmentFragment
      > }
    )>, dispatches: Array<{ __typename: 'Dispatch' }
      & DispatchFragmentFragment
    >, reports: Array<(
      { __typename: 'Report' }
      & Pick<Report, 'id' | 'legacy' | 'status' | 'reportType'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'fullname'>
      ), reportPhotoGroups: Array<(
        { __typename: 'ReportPhotoGroup' }
        & Pick<ReportPhotoGroup, 'id'>
        & { photoset: Maybe<(
          { __typename: 'Photoset' }
          & Pick<Photoset, 'id'>
        )> }
      )>, reportSources: Array<(
        { __typename: 'ReportSource' }
        & Pick<ReportSource, 'id'>
        & { photoset: Maybe<(
          { __typename: 'Photoset' }
          & Pick<Photoset, 'id'>
        )> }
      )> }
    )> }
  ) }
);

export type RotatePhotoMutationVariables = {
  id: Scalars['ID']
};


export type RotatePhotoMutation = (
  { __typename: 'RootMutationType' }
  & { rotatePhoto: Maybe<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id' | 'smallImage' | 'fullImage' | 'updatedAt'>
  )> }
);

export type SavePhotoMutationVariables = {
  input: PhotoInput
};


export type SavePhotoMutation = (
  { __typename: 'RootMutationType' }
  & { savePhoto: Maybe<{ __typename: 'Photo' }
    & EditPhotoFragmentFragment
  > }
);

export type SavePhotosetMutationVariables = {
  input: PhotosetInput
};


export type SavePhotosetMutation = (
  { __typename: 'RootMutationType' }
  & { savePhotoset: Maybe<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'summary'>
  )> }
);

export type PhotoSearchQueryVariables = {
  filters: PhotoSearchFilters
};


export type PhotoSearchQuery = (
  { __typename: 'RootQueryType' }
  & { photoSearch: (
    { __typename: 'PhotoResult' }
    & Pick<PhotoResult, 'count' | 'filteredCount'>
    & { photos: Array<{ __typename: 'Photo' }
      & PhotoListFragmentFragment
    > }
  ) }
);

export type ThumbnailPreviewQueryVariables = {
  parentType: Scalars['String'],
  parentId: Scalars['ID']
};


export type ThumbnailPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { photos: Array<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id' | 'imageNumber' | 'thumbImage'>
    & { addresses: Array<(
      { __typename: 'Address' }
      & Pick<Address, 'id'>
    )>, locations: Array<(
      { __typename: 'Location' }
      & Pick<Location, 'id'>
    )>, photoset: (
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'day' | 'pfcs' | 'party'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )> }
    ) }
  )> }
);

export type ToggleKeyPhotoMutationVariables = {
  input: PhotoLinkInput
};


export type ToggleKeyPhotoMutation = (
  { __typename: 'RootMutationType' }
  & { savePhotoLink: Maybe<(
    { __typename: 'PhotoLink' }
    & Pick<PhotoLink, 'id' | 'key'>
  )> }
);

export type PhotoViewerQueryVariables = {
  projectId: Scalars['ID'],
  parentType: Scalars['String'],
  parentId: Scalars['ID']
};


export type PhotoViewerQuery = (
  { __typename: 'RootQueryType' }
  & { photos: Array<(
    { __typename: 'Photo' }
    & Pick<Photo, 'id' | 'imageNumber' | 'smallImage' | 'finalAnnotation' | 'keyPhotoDescription' | 'date'>
    & { photoset: (
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'inspectionDate' | 'pfcs' | 'day' | 'party'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )> }
    ), photoLinks: Array<(
      { __typename: 'PhotoLink' }
      & Pick<PhotoLink, 'id' | 'key'>
      & { issue: Maybe<(
        { __typename: 'Issue' }
        & Pick<Issue, 'id' | 'displayName'>
      )>, address: Maybe<(
        { __typename: 'Address' }
        & Pick<Address, 'id' | 'displayName'>
      )>, location: Maybe<(
        { __typename: 'Location' }
        & Pick<Location, 'id' | 'displayName'>
      )>, element: Maybe<(
        { __typename: 'Element' }
        & Pick<Element, 'id' | 'displayName'>
      )>, player: Maybe<(
        { __typename: 'Player' }
        & Pick<Player, 'id' | 'displayName'>
      )>, testLocation: Maybe<(
        { __typename: 'TestLocation' }
        & Pick<TestLocation, 'id' | 'displayName'>
      )> }
    )> }
  )> }
);

export type EditPhysicalAddressQueryVariables = {
  id: Scalars['ID']
};


export type EditPhysicalAddressQuery = (
  { __typename: 'RootQueryType' }
  & { physicalAddress: Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'unit' | 'unitType'>
    & { community: Maybe<(
      { __typename: 'Community' }
      & Pick<Community, 'id'>
    )> }
  )> }
);

export type SavePhysicalAddressMutationVariables = {
  input: PhysicalAddressInput
};


export type SavePhysicalAddressMutation = (
  { __typename: 'RootMutationType' }
  & { savePhysicalAddress: Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'unit' | 'unitType'>
    & { community: Maybe<(
      { __typename: 'Community' }
      & Pick<Community, 'id' | 'name'>
    )> }
  )> }
);

export type PhysicalAddressQueryVariables = {
  id: Scalars['ID']
};


export type PhysicalAddressQuery = (
  { __typename: 'RootQueryType' }
  & { physicalAddress: Maybe<(
    { __typename: 'PhysicalAddress' }
    & Pick<PhysicalAddress, 'id' | 'premise' | 'street' | 'number' | 'unit' | 'unitType' | 'city' | 'state' | 'zip' | 'county' | 'country' | 'latitude' | 'longitude' | 'northeastLatitude' | 'northeastLongitude' | 'southwestLatitude' | 'southwestLongitude'>
    & { residences: Array<(
      { __typename: 'Residence' }
      & Pick<Residence, 'id'>
      & { contact: Maybe<(
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      )> }
    )>, community: Maybe<(
      { __typename: 'Community' }
      & Pick<Community, 'id' | 'name'>
    )>, notes: Array<(
      { __typename: 'Note' }
      & Pick<Note, 'id'>
    )
      & NoteShowFragmentFragment
    > }
  )> }
);

export type CompareProjectPlanQueryVariables = {
  number: Scalars['String']
};


export type CompareProjectPlanQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id' | 'uncategorizedInvoiced' | 'uncategorizedPending' | 'uncategorizedNc' | 'expensesInvoiced' | 'expensesPending'>
      & { milestoneparents: Array<(
        { __typename: 'Milestoneparent' }
        & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
      )>, deliverables: Array<{ __typename: 'Deliverable' }
        & CompareProjectPlanDeliverableFieldsFragment
      > }
    ) }
  ) }
);

export type CompareProjectPlanDeliverableFieldsFragment = (
  { __typename: 'Deliverable' }
  & Pick<Deliverable, 'totalInvoiced' | 'totalPending' | 'totalNc'>
  & { milestoneparent: (
    { __typename: 'Milestoneparent' }
    & Pick<Milestoneparent, 'id'>
  ) }
)
  & DeliverableFragmentFragment
;

export type DeletePlanStatusMutationVariables = {
  id: Scalars['ID']
};


export type DeletePlanStatusMutation = (
  { __typename: 'RootMutationType' }
  & { deletePlanStatus: Maybe<(
    { __typename: 'PlanStatus' }
    & Pick<PlanStatus, 'id'>
  )> }
);

export type EditDeliverableMenuItemQueryVariables = {
  id: Scalars['ID']
};


export type EditDeliverableMenuItemQuery = (
  { __typename: 'RootQueryType' }
  & { deliverableMenuItem: Maybe<(
    { __typename: 'DeliverableMenuItem' }
    & Pick<DeliverableMenuItem, 'id'>
    & { sku: (
      { __typename: 'Sku' }
      & Pick<Sku, 'id'>
    ) }
  )> }
);

export type EditPlanSectionQueryVariables = {
  id: Scalars['ID']
};


export type EditPlanSectionQuery = (
  { __typename: 'RootQueryType' }
  & { planSection: Maybe<(
    { __typename: 'PlanSection' }
    & Pick<PlanSection, 'id' | 'name'>
  )> }
);

export type EditPlanStatusQueryVariables = {
  id: Scalars['ID']
};


export type EditPlanStatusQuery = (
  { __typename: 'RootQueryType' }
  & { planStatus: Maybe<(
    { __typename: 'PlanStatus' }
    & Pick<PlanStatus, 'id' | 'status' | 'date' | 'notes' | 'amount'>
  )> }
);

export type EditPlanTypeQueryVariables = {
  id: Scalars['ID']
};


export type EditPlanTypeQuery = (
  { __typename: 'RootQueryType' }
  & { planType: (
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
  ) }
);

export type MethodFragmentFragment = (
  { __typename: 'Plan' }
  & { planType: (
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
    & { planSections: Array<(
      { __typename: 'PlanSection' }
      & Pick<PlanSection, 'id' | 'name' | 'position'>
    )> }
  ) }
);

export type ObjectiveFragmentFragment = (
  { __typename: 'Plan' }
  & Pick<Plan, 'objective'>
);

export type PlanStatusFieldsFragment = (
  { __typename: 'PlanStatus' }
  & Pick<PlanStatus, 'id' | 'status' | 'date' | 'notes' | 'amount' | 'attachment'>
);

export type PlanStatusesQueryVariables = {
  number: Scalars['String']
};


export type PlanStatusesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id'>
      & { costs: Array<(
        { __typename: 'DeliverableCost' }
        & Pick<DeliverableCost, 'id' | 'amount'>
      )>, planStatuses: Array<{ __typename: 'PlanStatus' }
        & PlanStatusFieldsFragment
      > }
    ) }
  ) }
);

export type PlanSummaryFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'totalDue' | 'planUpdatedOn'>
  & { plan: (
    { __typename: 'Plan' }
    & Pick<Plan, 'id' | 'billedTotal' | 'amount' | 'pendingTotal'>
    & { milestoneparents: Array<(
      { __typename: 'Milestoneparent' }
      & Pick<Milestoneparent, 'id' | 'rank' | 'title'>
      & { deliverables: Array<(
        { __typename: 'Deliverable' }
        & Pick<Deliverable, 'id' | 'completed' | 'tsTotal' | 'ilTotal' | 'budget'>
      )> }
    )>, deliverables: Array<(
      { __typename: 'Deliverable' }
      & Pick<Deliverable, 'id'>
    )> }
  ) }
);

export type PlanTypeQueryVariables = {
  id: Scalars['ID']
};


export type PlanTypeQuery = (
  { __typename: 'RootQueryType' }
  & { planType: (
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
    & { planSections: Array<(
      { __typename: 'PlanSection' }
      & Pick<PlanSection, 'id' | 'name' | 'position'>
      & { deliverableMenuItems: Array<(
        { __typename: 'DeliverableMenuItem' }
        & Pick<DeliverableMenuItem, 'id' | 'position'>
        & { sku: (
          { __typename: 'Sku' }
          & Pick<Sku, 'id' | 'name' | 'description'>
        ) }
      )> }
    )> }
  ) }
);

export type PlanTypesQueryVariables = {};


export type PlanTypesQuery = (
  { __typename: 'RootQueryType' }
  & { planTypes: Array<(
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
    & { planSections: Array<(
      { __typename: 'PlanSection' }
      & Pick<PlanSection, 'id' | 'position' | 'name'>
      & { deliverableMenuItems: Array<(
        { __typename: 'DeliverableMenuItem' }
        & Pick<DeliverableMenuItem, 'id' | 'position'>
        & { sku: (
          { __typename: 'Sku' }
          & Pick<Sku, 'id' | 'name' | 'description'>
        ) }
      )> }
    )> }
  )> }
);

export type PlanTypesPickerQueryVariables = {};


export type PlanTypesPickerQuery = (
  { __typename: 'RootQueryType' }
  & { planTypes: Array<(
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
  )> }
);

export type SaveDeliverableMenuItemMutationVariables = {
  input: DeliverableMenuItemInput
};


export type SaveDeliverableMenuItemMutation = (
  { __typename: 'RootMutationType' }
  & { saveDeliverableMenuItem: Maybe<(
    { __typename: 'DeliverableMenuItem' }
    & Pick<DeliverableMenuItem, 'id'>
  )> }
);

export type SavePlanDateMutationVariables = {
  input: ProjectInput
};


export type SavePlanDateMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'planUpdatedOn'>
  )> }
);

export type SavePlanSectionMutationVariables = {
  input: PlanSectionInput
};


export type SavePlanSectionMutation = (
  { __typename: 'RootMutationType' }
  & { savePlanSection: Maybe<(
    { __typename: 'PlanSection' }
    & Pick<PlanSection, 'id' | 'name'>
  )> }
);

export type SavePlanStatusMutationVariables = {
  input: PlanStatusInput
};


export type SavePlanStatusMutation = (
  { __typename: 'RootMutationType' }
  & { savePlanStatus: Maybe<(
    { __typename: 'PlanStatus' }
    & Pick<PlanStatus, 'id' | 'status' | 'date' | 'notes' | 'amount' | 'attachment'>
  )> }
);

export type SavePlanTypeMutationVariables = {
  input: PlanTypeInput
};


export type SavePlanTypeMutation = (
  { __typename: 'RootMutationType' }
  & { savePlanType: Maybe<(
    { __typename: 'PlanType' }
    & Pick<PlanType, 'id' | 'name'>
  )> }
);

export type ProjectPlanQueryVariables = {
  number: Scalars['String']
};


export type ProjectPlanQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'billingSummary'>
    & { plan: { __typename: 'Plan' }
      & ProjectPlanFieldsFragment
     }
  ) }
);

export type ProjectPlanFieldsFragment = (
  { __typename: 'Plan' }
  & Pick<Plan, 'id'>
  & { milestoneparents: Array<{ __typename: 'Milestoneparent' }
    & MilestoneparentFieldsFragment
  >, deliverables: Array<{ __typename: 'Deliverable' }
    & DeliverableFragmentFragment
  > }
)
  & ObjectiveFragmentFragment
  & MethodFragmentFragment
;

export type MilestoneparentFieldsFragment = (
  { __typename: 'Milestoneparent' }
  & Pick<Milestoneparent, 'id' | 'title' | 'rank'>
  & { deliverables: Array<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'ilTotal' | 'tsTotal'>
  )
    & DeliverableFragmentFragment
  > }
);

export type UpdatePlanObjectiveMutationVariables = {
  id: Scalars['ID'],
  input: PlanInput
};


export type UpdatePlanObjectiveMutation = (
  { __typename: 'RootMutationType' }
  & { updatePlan: Maybe<(
    { __typename: 'Plan' }
    & Pick<Plan, 'id'>
  )
    & ObjectiveFragmentFragment
  > }
);

export type UpdatePlanPlanTypeMutationVariables = {
  id: Scalars['ID'],
  input: PlanInput
};


export type UpdatePlanPlanTypeMutation = (
  { __typename: 'RootMutationType' }
  & { updatePlan: Maybe<(
    { __typename: 'Plan' }
    & Pick<Plan, 'id'>
  )
    & MethodFragmentFragment
  > }
);

export type AssociatedProjectsQueryVariables = {
  id: Scalars['ID']
};


export type AssociatedProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { childOpportunities: Array<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )> }
  ) }
);

export type BasicAnalysisQueryVariables = {
  number: Scalars['String']
};


export type BasicAnalysisQuery = (
  { __typename: 'RootQueryType' }
  & { project: { __typename: 'Project' }
    & BasicAnalysisProjectFieldsFragment
   }
);

export type BasicAnalysisProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'name' | 'oneMinuteSummary' | 'technicalSummary' | 'issueSort' | 'l1Timeline' | 'inspectionSummary'>
  & { photosets: Array<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'pfcs' | 'photosCount' | 'summary' | 'inspectionDate'>
  )>, timelines: Array<(
    { __typename: 'Timeline' }
    & Pick<Timeline, 'id' | 'itemDate' | 'title' | 'description' | 'keyEvent'>
  )>, infoImages: Array<(
    { __typename: 'InfoImage' }
    & Pick<InfoImage, 'id' | 'category' | 'description' | 'position' | 'attachmentUrl'>
  )>, playerGroups: Array<(
    { __typename: 'PlayerGroup' }
    & Pick<PlayerGroup, 'id' | 'name' | 'position'>
  )>, players: Array<(
    { __typename: 'Player' }
    & Pick<Player, 'id' | 'role' | 'company' | 'name' | 'key'>
    & { playerGroup: Maybe<(
      { __typename: 'PlayerGroup' }
      & Pick<PlayerGroup, 'id'>
    )> }
  )>, issues: Array<{ __typename: 'Issue' }
    & IssueFragmentFragment
  >, documents: Array<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'key' | 'mode' | 'section' | 'description' | 'author' | 'date' | 'receivedDate'>
  )> }
)
  & PlanSummaryFragmentFragment
;

export type ChecklistsFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { checklists: Array<{ __typename: 'Checklist' }
    & ChecklistFragmentFragment
  > }
);

export type ClientAccessProjectQueryVariables = {
  number: Scalars['String']
};


export type ClientAccessProjectQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'represent' | 'trade' | 'address' | 'shareOneMinuteSummary' | 'oneMinuteSummary'>
    & { addresses: Array<(
      { __typename: 'Address' }
      & Pick<Address, 'id' | 'name' | 'pfcsPhotoCount' | 'otherPhotoCount'>
      & { address: Maybe<(
        { __typename: 'Address' }
        & Pick<Address, 'id'>
      )> }
    )> }
  ) }
);

export type ClosedProjectsQueryVariables = {
  month: Scalars['String']
};


export type ClosedProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { closedProjects: Array<{ __typename: 'Project' }
    & ClosedProjectFieldsFragment
  > }
);

export type ClosedProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'name' | 'mdDate' | 'mdHoldNotes' | 'guesstimate' | 'closedOn' | 'totalInvoices'>
  & { memberships: Array<(
    { __typename: 'Membership' }
    & Pick<Membership, 'id' | 'primaryContact'>
    & { contact: (
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs'>
    ), survey: Maybe<(
      { __typename: 'Survey' }
      & Pick<Survey, 'id' | 'completed'>
    )> }
  )>, closedBy: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, office: (
    { __typename: 'Office' }
    & Pick<Office, 'id' | 'location'>
  ), plan: (
    { __typename: 'Plan' }
    & Pick<Plan, 'id'>
    & { costs: Array<(
      { __typename: 'DeliverableCost' }
      & Pick<DeliverableCost, 'id' | 'amount'>
    )> }
  ), pm: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, pc: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, technicalLead: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, projectUsers: Array<(
    { __typename: 'ProjectUser' }
    & Pick<ProjectUser, 'id' | 'role'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    ) }
  )> }
);

export type ConflictProjectsQueryVariables = {
  query: Scalars['String']
};


export type ConflictProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'represent' | 'address' | 'salesStageId'>
  )> }
);

export type ProjectCountsQueryVariables = {
  user?: Maybe<Scalars['String']>
};


export type ProjectCountsQuery = (
  { __typename: 'RootQueryType' }
  & { projectCounts: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'name' | 'count'>
  )> }
);

export type ProjectDashQueryVariables = {
  number: Scalars['String']
};


export type ProjectDashQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  )
    & ProjectFormFragmentFragment
    & TeamFieldsFragment
    & MembershipsFragmentFragment
    & ReportCardsFragmentFragment
    & SalesProjectionsFragmentFragment
    & PlanSummaryFragmentFragment
    & KanbanCardsFragmentFragment
    & ChecklistsFragmentFragment
   }
);

export type EditCollectionsSummaryQueryVariables = {
  number: Scalars['String']
};


export type EditCollectionsSummaryQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'arSummary'>
  ) }
);

export type EditCustomFieldsQueryVariables = {
  number: Scalars['String']
};


export type EditCustomFieldsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'addressFields' | 'locationFields' | 'elementFields' | 'issueFields' | 'timelineFields'>
  ) }
);

export type EditProjectInspectionSummaryQueryVariables = {
  number: Scalars['String']
};


export type EditProjectInspectionSummaryQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'inspectionSummary'>
  ) }
);

export type EditProjectL1TimelineQueryVariables = {
  id: Scalars['ID']
};


export type EditProjectL1TimelineQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'l1Timeline'>
  ) }
);

export type EditProjectTeamQueryVariables = {
  id: Scalars['ID']
};


export type EditProjectTeamQuery = (
  { __typename: 'RootQueryType' }
  & { project: { __typename: 'Project' }
    & TeamFieldsFragment
   }
);

export type First10ThingsQueryVariables = {
  user: Scalars['String'],
  allUsers: Scalars['Boolean']
};


export type First10ThingsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'status'>
    & { checklists: Array<(
      { __typename: 'Checklist' }
      & Pick<Checklist, 'id' | 'category' | 'complete' | 'itemsCompleted' | 'itemCount'>
    )> }
  )
    & TeamFieldsFragment
  >, user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ) }
);

export type ProjectFrameQueryVariables = {
  number: Scalars['String']
};


export type ProjectFrameQuery = (
  { __typename: 'RootQueryType' }
  & { project: { __typename: 'Project' }
    & ProjectFrameFragmentFragment
   }
);

export type ProjectFrameFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'name' | 'represent' | 'trade' | 'address' | 'secured' | 'shareOneMinuteSummary' | 'oneMinuteSummary' | 'shareL1Timeline' | 'shareL2Timeline' | 'projectType' | 'addressesCount' | 'locationsCount' | 'elementsCount' | 'issuesCount' | 'issueSort' | 'playersCount' | 'testLocationsCount' | 'dispatchesCount' | 'interviewsCount' | 'l1Timeline' | 'addressFields' | 'locationFields' | 'elementFields' | 'timelineFields' | 'issueFields' | 'issueAnalysisMode' | 'elementAnalysisMode' | 'locationAnalysisMode'>
  & { pc: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, pm: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, technicalLead: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, projectUsers: Array<(
    { __typename: 'ProjectUser' }
    & Pick<ProjectUser, 'id'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    ) }
  )>, lists: Array<(
    { __typename: 'List' }
    & Pick<List, 'id' | 'name'>
  )>, timelines: Array<(
    { __typename: 'Timeline' }
    & Pick<Timeline, 'id'>
  )>, photosets: Array<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id'>
  )> }
);

export type GuesstimatesQueryVariables = {
  date: Scalars['Date']
};


export type GuesstimatesQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'trade' | 'represent' | 'mdDate' | 'guesstimate' | 'totalInvoices'>
  )> }
);

export type InspectionsQueryVariables = {
  user: Scalars['String'],
  filter: Scalars['String']
};


export type InspectionsQuery = (
  { __typename: 'RootQueryType' }
  & { photosets: Array<(
    { __typename: 'Photoset' }
    & Pick<Photoset, 'id' | 'inspectionDate' | 'pfcs' | 'complete' | 'summary' | 'party' | 'photosCount'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )>, project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'status'>
      & { pm: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )>, pc: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )> }
    ), dispatch: Maybe<(
      { __typename: 'Dispatch' }
      & Pick<Dispatch, 'id'>
      & { checklists: Array<(
        { __typename: 'Checklist' }
        & Pick<Checklist, 'id' | 'itemsCompleted' | 'itemCount' | 'complete' | 'category'>
      )> }
    )> }
  )> }
);

export type InvoiceDashQueryVariables = {
  number: Scalars['String']
};


export type InvoiceDashQuery = (
  { __typename: 'RootQueryType' }
  & { project: { __typename: 'Project' }
    & InvoiceDashProjectFieldsFragment
   }
);

export type InvoiceDashProjectFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'number' | 'billingSummary' | 'arSummary' | 'name' | 'represent' | 'trade' | 'status' | 'projectType' | 'oneMinuteSummary'>
  & { taggings: Array<(
    { __typename: 'Tagging' }
    & Pick<Tagging, 'id' | 'createdAt'>
    & { tag: { __typename: 'Tag' }
      & TagFieldsFragment
     }
  )>, invoices: Array<(
    { __typename: 'Invoice' }
    & Pick<Invoice, 'id' | 'isAdjustment' | 'status' | 'attachmentUrl' | 'invoiceDate' | 'invoiceTotal' | 'paymentTotal' | 'emailedAt' | 'mailedAt'>
    & { appliedPayments: Maybe<Array<Maybe<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
      & { creditMemo: Maybe<(
        { __typename: 'CreditMemo' }
        & Pick<CreditMemo, 'id' | 'description' | 'itemDate'>
      )>, payment: Maybe<(
        { __typename: 'Payment' }
        & Pick<Payment, 'id' | 'description' | 'amount' | 'checkDate' | 'payor' | 'claimNumber' | 'checkNumber' | 'attachmentUrl'>
        & { retainer: Maybe<(
          { __typename: 'Retainer' }
          & Pick<Retainer, 'id' | 'checkDate' | 'checkNumber' | 'referenceNumber' | 'payor'>
        )> }
      )>, refund: Maybe<(
        { __typename: 'Refund' }
        & Pick<Refund, 'id' | 'itemDate' | 'payer' | 'paymentMethod'>
      )> }
    )>>> }
  )>, refunds: Array<(
    { __typename: 'Refund' }
    & Pick<Refund, 'id' | 'amount' | 'payer' | 'itemDate'>
    & { appliedPayments: Array<(
      { __typename: 'AppliedPayment' }
      & Pick<AppliedPayment, 'id' | 'amount'>
    )> }
  )>, timesheets: Array<(
    { __typename: 'Timesheet' }
    & Pick<Timesheet, 'id'>
  )>, notes: Array<{ __typename: 'Note' }
    & NoteShowFragmentFragment
  >, retainers: Array<(
    { __typename: 'Retainer' }
    & Pick<Retainer, 'id' | 'amount' | 'checkDate' | 'checkNumber' | 'payor'>
    & { payments: Array<(
      { __typename: 'Payment' }
      & Pick<Payment, 'id' | 'amount'>
    )> }
  )> }
)
  & TeamFieldsFragment
  & MembershipsFragmentFragment
  & ReportCardsFragmentFragment
;

export type ProjectListQueryVariables = {
  filter: Scalars['String'],
  user?: Maybe<Scalars['String']>,
  search?: Maybe<Scalars['String']>
};


export type ProjectListQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'trade' | 'projectType' | 'totalDue' | 'status' | 'secured' | 'represent'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id'>
    ), memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
      ) }
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type LockProjectMutationVariables = {
  input: ProjectInput
};


export type LockProjectMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'secured'>
  )> }
);

export type MembershipsFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { memberships: Array<(
    { __typename: 'Membership' }
    & Pick<Membership, 'id'>
  )
    & MembershipFragmentFragment
  > }
);

export type NewProjectsQueryVariables = {
  month: Scalars['String']
};


export type NewProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType' | 'represent' | 'startDate' | 'rate' | 'guesstimate' | 'state' | 'sourceOf'>
    & { office: (
      { __typename: 'Office' }
      & Pick<Office, 'id' | 'location'>
    ), referralContact: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'displayAs'>
    )>, memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { projects: Array<(
          { __typename: 'Project' }
          & Pick<Project, 'id' | 'salesStageId' | 'startDate'>
        )> }
      ) }
    )>, plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id' | 'amount'>
    ), sourceUser: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    )> }
  )> }
);

export type ProjectNotesQueryVariables = {
  number: Scalars['String']
};


export type ProjectNotesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'name' | 'number' | 'salesStageId'>
    & { notes: Array<{ __typename: 'Note' }
      & NoteShowFragmentFragment
    >, interviews: Array<(
      { __typename: 'Interview' }
      & Pick<Interview, 'id' | 'date' | 'meetingType' | 'description'>
    )> }
  ) }
);

export type OpportunitiesQueryVariables = {
  filter: Scalars['String'],
  opportunityUser?: Maybe<Scalars['String']>
};


export type OpportunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'trade' | 'projectType' | 'totalDue' | 'status' | 'secured' | 'represent' | 'guesstimate' | 'opportunityStartDate' | 'opportunityCloseDate'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id' | 'probability' | 'description'>
    ), opportunityOwner: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, salesProjections: Array<(
      { __typename: 'SalesProjection' }
      & Pick<SalesProjection, 'id' | 'createdAt' | 'updatedAt'>
      & { salesStage: Maybe<(
        { __typename: 'SalesStage' }
        & Pick<SalesStage, 'id'>
      )> }
    )>, tasks: Array<(
      { __typename: 'Task' }
      & Pick<Task, 'id' | 'completed' | 'itemDate'>
    )>, memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      ) }
    )>, notes: Array<(
      { __typename: 'Note' }
      & Pick<Note, 'id' | 'itemDate'>
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type OpportunityForecastQueryVariables = {
  startDate: Scalars['Date']
};


export type OpportunityForecastQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'guesstimate' | 'startDate'>
    & { opportunityOwner: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, tasks: Array<(
      { __typename: 'Task' }
      & Pick<Task, 'id' | 'completed' | 'itemDate'>
    )> }
  )>, opportunities: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'trade' | 'projectType' | 'totalDue' | 'status' | 'secured' | 'represent' | 'guesstimate' | 'opportunityStartDate' | 'opportunityCloseDate' | 'startDate'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id' | 'probability' | 'description'>
    ), opportunityOwner: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, salesProjections: Array<(
      { __typename: 'SalesProjection' }
      & Pick<SalesProjection, 'id' | 'createdAt' | 'updatedAt'>
      & { salesStage: Maybe<(
        { __typename: 'SalesStage' }
        & Pick<SalesStage, 'id'>
      )> }
    )>, tasks: Array<(
      { __typename: 'Task' }
      & Pick<Task, 'id' | 'completed' | 'itemDate'>
    )>, memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
        & { company: Maybe<(
          { __typename: 'Contact' }
          & Pick<Contact, 'id' | 'name'>
        )> }
      ) }
    )>, notes: Array<(
      { __typename: 'Note' }
      & Pick<Note, 'id' | 'itemDate'>
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type PpMsQueryVariables = {};


export type PpMsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
    & { interviews: Array<(
      { __typename: 'Interview' }
      & Pick<Interview, 'id' | 'meetingType' | 'date'>
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type PumQueryVariables = {
  user: Scalars['String']
};


export type PumQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'status' | 'planUpdatedOn' | 'totalDue' | 'technicalSummaryUpdatedAt'>
    & { salesStage: (
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id'>
    ), pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, technicalLead: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, projectUsers: Array<(
      { __typename: 'ProjectUser' }
      & Pick<ProjectUser, 'id' | 'role'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      ) }
    )>, plan: (
      { __typename: 'Plan' }
      & Pick<Plan, 'id' | 'amount' | 'pendingTotal' | 'billedTotal'>
    ) }
  )> }
);

export type PaymentSupportQueryVariables = {
  number: Scalars['String']
};


export type PaymentSupportQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number'>
    & { invoices: Array<(
      { __typename: 'Invoice' }
      & Pick<Invoice, 'id' | 'isAdjustment' | 'status' | 'invoiceDate' | 'invoiceTotal' | 'paymentTotal'>
      & { appliedPayments: Maybe<Array<Maybe<(
        { __typename: 'AppliedPayment' }
        & Pick<AppliedPayment, 'id' | 'amount'>
        & { payment: Maybe<(
          { __typename: 'Payment' }
          & Pick<Payment, 'id' | 'payor' | 'claimNumber'>
        )> }
      )>>> }
    )> }
  ), paymentAutocomplete: Maybe<(
    { __typename: 'PaymentAutocomplete' }
    & Pick<PaymentAutocomplete, 'payor' | 'claimNumber' | 'adjuster' | 'policyNumber' | 'claimant'>
  )> }
);

export type OpenProjectsQueryVariables = {
  filter?: Maybe<Scalars['String']>,
  includeId?: Maybe<Scalars['ID']>
};


export type OpenProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType'>
    & { projectUsers: Array<(
      { __typename: 'ProjectUser' }
      & Pick<ProjectUser, 'id' | 'userId' | 'role'>
    )> }
  )> }
);

export type ProjectFormFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id' | 'name' | 'number' | 'startDate' | 'mdDate' | 'deadBox' | 'projectType' | 'secured' | 'address' | 'state' | 'area' | 'represent' | 'trade' | 'projectDesc' | 'rate' | 'yearBuilt' | 'county' | 'fieldInspection' | 'otherExperts' | 'plans' | 'budget' | 'invoiceBillingPeriods' | 'prioritizeInvoices' | 'requireAttachmentsOnInvoices' | 'maximumBillingPositionId' | 'invoiceNote' | 'invoiceHideCosts' | 'invoiceHideHours' | 'invoiceLevels' | 'billingSummary' | 'mdHoldNotes' | 'coExperts' | 'technicalSummary' | 'technicalSummaryUpdatedAt' | 'oneMinuteSummary' | 'oneMinuteSummaryUpdatedAt' | 'status' | 'closedById' | 'closedOn' | 'entity' | 'entityNumber' | 'shareOnClientAccess' | 'shareOneMinuteSummary' | 'shareL1Timeline' | 'shareL2Timeline' | 'clientAccessHideAr' | 'guesstimate' | 'sourceUserId' | 'sourceOf' | 'campaignId' | 'salesStageId' | 'parentOpportunityId' | 'opportunityOwnerId' | 'opportunityStartDate' | 'opportunityCloseDate' | 'totalDue' | 'totalInvoices' | 'unbilledTotal' | 'mainPhotoType' | 'mainPhotoId' | 'updatedAt'>
  & { technicalSummaryUpdater: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, oneMinuteSummaryUpdater: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, referralContact: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs' | 'mode'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  )>, strategicTargetCompany: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'name'>
  )>, office: (
    { __typename: 'Office' }
    & Pick<Office, 'id'>
  ) }
);

export type ReceivablesQueryVariables = {
  filter?: Maybe<ReceivablesFilter>,
  includeAging: Scalars['Boolean']
};


export type ReceivablesQuery = (
  { __typename: 'RootQueryType' }
  & { receivables: (
    { __typename: 'Receivables' }
    & Pick<Receivables, 'title'>
    & { projects: Array<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name' | 'totalDue' | 'totalInvoices' | 'totalPayments' | 'totalRefunds'>
      & { tasks: Array<(
        { __typename: 'Task' }
        & Pick<Task, 'id' | 'category' | 'completed'>
      )>, invoices: Array<(
        { __typename: 'Invoice' }
        & Pick<Invoice, 'id' | 'status' | 'sentAt' | 'invoiceDate' | 'invoiceTotal' | 'paymentTotal'>
      )>, tags: Array<{ __typename: 'Tag' }
        & TagFieldsFragment
      >, aging: Maybe<(
        { __typename: 'ProjectAging' }
        & Pick<ProjectAging, 'agingA' | 'agingB' | 'agingC' | 'agingD' | 'agingE' | 'agingF'>
      )> }
    )> }
  ) }
);

export type RecentlyBilledProjectsQueryVariables = {
  user: Scalars['String']
};


export type RecentlyBilledProjectsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'trade' | 'projectType' | 'totalDue' | 'status' | 'represent' | 'recentHours'>
    & { memberships: Array<(
      { __typename: 'Membership' }
      & Pick<Membership, 'id' | 'primaryContact'>
      & { contact: (
        { __typename: 'Contact' }
        & Pick<Contact, 'id' | 'displayAs'>
      ) }
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type ProjectAuditsQueryVariables = {};


export type ProjectAuditsQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
    & { reportCards: Array<(
      { __typename: 'ReportCard' }
      & Pick<ReportCard, 'id' | 'itemDate'>
      & { reportCardType: Maybe<(
        { __typename: 'ReportCardType' }
        & Pick<ReportCardType, 'id' | 'name' | 'category'>
      )> }
    )> }
  )
    & TeamFieldsFragment
  > }
);

export type ReportCardsFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { reportCards: Array<(
    { __typename: 'ReportCard' }
    & Pick<ReportCard, 'id' | 'score' | 'itemDate' | 'possibleScore'>
    & { reportCardType: Maybe<(
      { __typename: 'ReportCardType' }
      & Pick<ReportCardType, 'id' | 'name'>
    )>, user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login'>
    )> }
  )> }
);

export type SalesProjectionsFragmentFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { salesProjections: Array<(
    { __typename: 'SalesProjection' }
    & Pick<SalesProjection, 'id' | 'itemDate' | 'amount' | 'closeDate'>
    & { salesStage: Maybe<(
      { __typename: 'SalesStage' }
      & Pick<SalesStage, 'id' | 'probability' | 'description'>
    )> }
  )> }
);

export type SaveProjectMutationVariables = {
  input: ProjectInput
};


export type SaveProjectMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<{ __typename: 'Project' }
    & ProjectFormFragmentFragment
    & SalesProjectionsFragmentFragment
  > }
);

export type SaveCollectionsSummaryMutationVariables = {
  input: ProjectInput
};


export type SaveCollectionsSummaryMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'arSummary'>
  )> }
);

export type SaveCustomFieldsMutationVariables = {
  input: ProjectInput
};


export type SaveCustomFieldsMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'addressFields' | 'locationFields' | 'elementFields' | 'issueFields' | 'timelineFields'>
  )> }
);

export type SaveProjectInspectionSummaryMutationVariables = {
  input: ProjectInput
};


export type SaveProjectInspectionSummaryMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'inspectionSummary'>
  )> }
);

export type SaveProjectIssueSortMutationVariables = {
  input: ProjectInput
};


export type SaveProjectIssueSortMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'issueSort'>
  )> }
);

export type SaveProjectL1TimelineMutationVariables = {
  input: ProjectInput
};


export type SaveProjectL1TimelineMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'l1Timeline'>
  )> }
);

export type SetMainPhotoMutationVariables = {
  input: ProjectInput
};


export type SetMainPhotoMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'mainPhotoType' | 'mainPhotoId'>
  )> }
);

export type TeamFieldsFragment = (
  { __typename: 'Project' }
  & Pick<Project, 'id'>
  & { pc: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'email' | 'fullname' | 'color'>
  )>, pm: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'email' | 'fullname' | 'color'>
  )>, technicalLead: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'email' | 'fullname'>
  )>, projectUsers: Array<(
    { __typename: 'ProjectUser' }
    & Pick<ProjectUser, 'id' | 'role'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'email' | 'fullname'>
    ) }
  )> }
);

export type UntouchedQueryVariables = {};


export type UntouchedQuery = (
  { __typename: 'RootQueryType' }
  & { projects: Array<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'status'>
  )
    & TeamFieldsFragment
  > }
);

export type UpdateAnalysisModeMutationVariables = {
  input: ProjectInput
};


export type UpdateAnalysisModeMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'elementAnalysisMode' | 'issueAnalysisMode' | 'locationAnalysisMode'>
  )> }
);

export type UpdateTeamMutationVariables = {
  input: ProjectInput
};


export type UpdateTeamMutation = (
  { __typename: 'RootMutationType' }
  & { saveProject: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id'>
  )
    & TeamFieldsFragment
  > }
);

export type EditRelationshipQueryVariables = {
  id: Scalars['ID']
};


export type EditRelationshipQuery = (
  { __typename: 'RootQueryType' }
  & { relationship: Maybe<(
    { __typename: 'Relationship' }
    & Pick<Relationship, 'id' | 'strategicTargetRole' | 'role' | 'notes' | 'key' | 'active'>
  )> }
);

export type SaveRelationshipMutationVariables = {
  input: RelationshipInput
};


export type SaveRelationshipMutation = (
  { __typename: 'RootMutationType' }
  & { saveRelationship: Maybe<(
    { __typename: 'Relationship' }
    & Pick<Relationship, 'id' | 'key' | 'strategicTargetRole' | 'active' | 'notes' | 'endDate'>
  )> }
);

export type AddReportSectionElementsMutationVariables = {
  reportSectionId: Scalars['ID'],
  elementIds: Array<Maybe<Scalars['ID']>>
};


export type AddReportSectionElementsMutation = (
  { __typename: 'RootMutationType' }
  & { addReportSectionElements: Array<(
    { __typename: 'ReportSectionElement' }
    & Pick<ReportSectionElement, 'id'>
    & { element: { __typename: 'Element' }
      & ElementListFragmentFragment
     }
  )> }
);

export type AddReportSectionIssuesMutationVariables = {
  reportSectionId: Scalars['ID'],
  issueIds: Array<Maybe<Scalars['ID']>>
};


export type AddReportSectionIssuesMutation = (
  { __typename: 'RootMutationType' }
  & { addReportSectionIssues: Array<{ __typename: 'ReportSectionIssue' }
    & ReportSectionIssueFieldsFragment
  > }
);

export type AddReportSectionLocationsMutationVariables = {
  reportSectionId: Scalars['ID'],
  locationIds: Array<Maybe<Scalars['ID']>>
};


export type AddReportSectionLocationsMutation = (
  { __typename: 'RootMutationType' }
  & { addReportSectionLocations: Array<(
    { __typename: 'ReportSectionLocation' }
    & Pick<ReportSectionLocation, 'id'>
    & { location: { __typename: 'Location' }
      & LocationRowFragmentFragment
     }
  )> }
);

export type ReportsQueryVariables = {
  user?: Maybe<Scalars['String']>,
  billable?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  projectStatus?: Maybe<Scalars['String']>,
  global: Scalars['Boolean']
};


export type ReportsQuery = (
  { __typename: 'RootQueryType' }
  & { reports: Maybe<Array<Maybe<(
    { __typename: 'Report' }
    & Pick<Report, 'id' | 'status' | 'reportType' | 'title' | 'updatedAt' | 'publishedOn'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    ), project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )
      & TeamFieldsFragment
     }
  )>>>, pumReports: Maybe<Array<Maybe<(
    { __typename: 'Report' }
    & Pick<Report, 'id' | 'status' | 'reportType' | 'title' | 'updatedAt' | 'publishedOn'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id' | 'fullname'>
    ), project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )
      & TeamFieldsFragment
     }
  )>>>, user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ) }
);

export type CopyReportMutationVariables = {
  id: Scalars['ID']
};


export type CopyReportMutation = (
  { __typename: 'RootMutationType' }
  & { copyReport: Maybe<{ __typename: 'Report' }
    & ReportRowFragmentFragment
  > }
);

export type CreateReportMutationVariables = {
  input: CreateReportInput
};


export type CreateReportMutation = (
  { __typename: 'RootMutationType' }
  & { createReport: Maybe<(
    { __typename: 'Report' }
    & Pick<Report, 'id'>
  )> }
);

export type DeleteReportMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReport: Maybe<(
    { __typename: 'Report' }
    & Pick<Report, 'id'>
  )> }
);

export type DeleteReportDocumentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportDocumentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportDocument: Maybe<(
    { __typename: 'ReportDocument' }
    & Pick<ReportDocument, 'id'>
  )> }
);

export type DeleteReportPhotoGroupMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportPhotoGroupMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportPhotoGroup: Maybe<(
    { __typename: 'ReportPhotoGroup' }
    & Pick<ReportPhotoGroup, 'id'>
  )> }
);

export type DeleteReportSectionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportSectionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportSection: Maybe<(
    { __typename: 'ReportSection' }
    & Pick<ReportSection, 'id'>
  )> }
);

export type DeleteReportSectionElementMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportSectionElementMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportSectionElement: Maybe<(
    { __typename: 'ReportSectionElement' }
    & Pick<ReportSectionElement, 'id'>
  )> }
);

export type DeleteReportSectionIssueMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportSectionIssueMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportSectionIssue: Maybe<(
    { __typename: 'ReportSectionIssue' }
    & Pick<ReportSectionIssue, 'id'>
  )> }
);

export type DeleteReportSectionLocationMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportSectionLocationMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportSectionLocation: Maybe<(
    { __typename: 'ReportSectionLocation' }
    & Pick<ReportSectionLocation, 'id'>
  )> }
);

export type DeleteReportTypeSectionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteReportTypeSectionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteReportTypeSection: Maybe<(
    { __typename: 'ReportTypeSection' }
    & Pick<ReportTypeSection, 'id'>
    & { reportType: Maybe<(
      { __typename: 'ReportType' }
      & Pick<ReportType, 'id'>
    )> }
  )> }
);

export type EditReportQueryVariables = {
  id: Scalars['ID']
};


export type EditReportQuery = (
  { __typename: 'RootQueryType' }
  & { report: { __typename: 'Report' }
    & EditReportFragmentFragment
   }
);

export type EditReportFragmentFragment = (
  { __typename: 'Report' }
  & Pick<Report, 'id' | 'status' | 'updatedAt' | 'headerTitle' | 'title' | 'publishedOn' | 'includePageNumbers' | 'autoGenerateToc' | 'staticRecipient' | 'reportType' | 'omitCover' | 'membershipId' | 'includeToc' | 'customToc' | 'intro' | 'note' | 'includeNote' | 'noteInFooter' | 'userId' | 'retainer' | 'clientName' | 'feeSchedule' | 'internalDescription'>
  & { agreement: Maybe<(
    { __typename: 'Agreement' }
    & Pick<Agreement, 'id'>
  )>, reportSections: Array<{ __typename: 'ReportSection' }
    & ReportSectionFragmentFragment
  > }
);

export type EditReportTypeQueryVariables = {
  id: Scalars['ID']
};


export type EditReportTypeQuery = (
  { __typename: 'RootQueryType' }
  & { reportType: (
    { __typename: 'ReportType' }
    & Pick<ReportType, 'id' | 'name' | 'overhead' | 'omitCover' | 'includeNote' | 'includeToc' | 'intro' | 'headerTitle' | 'regarding' | 'feeSchedule'>
    & { agreement: Maybe<(
      { __typename: 'Agreement' }
      & Pick<Agreement, 'id'>
    )>, sku: Maybe<(
      { __typename: 'Sku' }
      & Pick<Sku, 'id'>
    )> }
  ) }
);

export type ReportTypeSectionQueryVariables = {
  id: Scalars['ID']
};


export type ReportTypeSectionQuery = (
  { __typename: 'RootQueryType' }
  & { reportTypeSection: Maybe<(
    { __typename: 'ReportTypeSection' }
    & Pick<ReportTypeSection, 'id' | 'sectionType' | 'showHeading' | 'template' | 'title' | 'prefill' | 'includeAnalysisList'>
  )> }
);

export type ProjectReportsQueryVariables = {
  number: Scalars['String']
};


export type ProjectReportsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { reports: Array<{ __typename: 'Report' }
      & ReportRowFragmentFragment
    > }
  ) }
);

export type LegacyReportsQueryVariables = {};


export type LegacyReportsQuery = (
  { __typename: 'RootQueryType' }
  & { legacyReports: Maybe<Array<Maybe<(
    { __typename: 'Report' }
    & Pick<Report, 'id' | 'intro'>
    & { reportSections: Array<(
      { __typename: 'ReportSection' }
      & Pick<ReportSection, 'id' | 'bodyJson'>
    )> }
  )>>> }
);

export type MoveReportDocumentMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveReportDocumentMutation = (
  { __typename: 'RootMutationType' }
  & { moveReportDocument: Maybe<Array<Maybe<(
    { __typename: 'ReportDocument' }
    & Pick<ReportDocument, 'id' | 'rank'>
  )>>> }
);

export type MoveReportSectionMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveReportSectionMutation = (
  { __typename: 'RootMutationType' }
  & { moveReportSection: Maybe<Array<Maybe<(
    { __typename: 'ReportSection' }
    & Pick<ReportSection, 'id' | 'rank'>
  )>>> }
);

export type MoveReportTypeSectionMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type MoveReportTypeSectionMutation = (
  { __typename: 'RootMutationType' }
  & { moveReportTypeSection: Maybe<Array<Maybe<(
    { __typename: 'ReportTypeSection' }
    & Pick<ReportTypeSection, 'id' | 'rank'>
  )>>> }
);

export type ReportDocumentsQueryVariables = {
  reportSectionId: Scalars['ID']
};


export type ReportDocumentsQuery = (
  { __typename: 'RootQueryType' }
  & { reportSection: Maybe<(
    { __typename: 'ReportSection' }
    & Pick<ReportSection, 'id'>
    & { reportDocuments: Array<(
      { __typename: 'ReportDocument' }
      & Pick<ReportDocument, 'id' | 'rank'>
      & { document: (
        { __typename: 'Document' }
        & Pick<Document, 'id' | 'mode' | 'key' | 'header' | 'receivedDate' | 'pages' | 'author' | 'description' | 'section' | 'date' | 'publicDescription'>
        & { attachedFiles: Array<{ __typename: 'AttachedFile' }
          & AttachedFileFragmentFragment
        >, referenceDocument: Maybe<(
          { __typename: 'Document' }
          & Pick<Document, 'id' | 'mode' | 'key' | 'header' | 'receivedDate' | 'pages' | 'author' | 'description' | 'section' | 'date' | 'publicDescription'>
          & { attachedFiles: Array<{ __typename: 'AttachedFile' }
            & AttachedFileFragmentFragment
          > }
        )> }
      ) }
    )> }
  )> }
);

export type ReportImagesQueryVariables = {
  id: Scalars['ID']
};


export type ReportImagesQuery = (
  { __typename: 'RootQueryType' }
  & { reportSection: Maybe<(
    { __typename: 'ReportSection' }
    & Pick<ReportSection, 'id'>
    & { imageReferences: Array<{ __typename: 'ImageReference' }
      & ImageReferenceFragmentFragment
    > }
  )> }
);

export type ReportPhotoGroupsQueryVariables = {
  reportSectionId: Scalars['ID']
};


export type ReportPhotoGroupsQuery = (
  { __typename: 'RootQueryType' }
  & { reportSection: Maybe<(
    { __typename: 'ReportSection' }
    & Pick<ReportSection, 'id'>
    & { reportPhotoGroups: Array<(
      { __typename: 'ReportPhotoGroup' }
      & Pick<ReportPhotoGroup, 'id' | 'rank'>
      & { photoset: Maybe<(
        { __typename: 'Photoset' }
        & Pick<Photoset, 'id' | 'party' | 'inspectionDate' | 'pfcs' | 'day' | 'keyPhotoCount'>
        & { user: Maybe<(
          { __typename: 'User' }
          & Pick<User, 'id' | 'login'>
        )> }
      )>, address: Maybe<(
        { __typename: 'Address' }
        & Pick<Address, 'id' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )>, location: Maybe<(
        { __typename: 'Location' }
        & Pick<Location, 'id' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )>, element: Maybe<(
        { __typename: 'Element' }
        & Pick<Element, 'id' | 'number' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )>, issue: Maybe<(
        { __typename: 'Issue' }
        & Pick<Issue, 'id' | 'number' | 'description' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )>, player: Maybe<(
        { __typename: 'Player' }
        & Pick<Player, 'id' | 'company' | 'name' | 'role' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )>, testLocation: Maybe<(
        { __typename: 'TestLocation' }
        & Pick<TestLocation, 'id' | 'number' | 'description' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
      )> }
    )> }
  )> }
);

export type ReportRowFragmentFragment = (
  { __typename: 'Report' }
  & Pick<Report, 'id' | 'legacy' | 'reportType' | 'title' | 'headerTitle' | 'status' | 'publishedOn' | 'internalDescription' | 'updatedAt'>
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ) }
);

export type ReportSectionElementsQueryVariables = {
  reportSectionId: Scalars['ID']
};


export type ReportSectionElementsQuery = (
  { __typename: 'RootQueryType' }
  & { reportSectionElements: Array<(
    { __typename: 'ReportSectionElement' }
    & Pick<ReportSectionElement, 'id'>
    & { element: { __typename: 'Element' }
      & ElementListFragmentFragment
     }
  )> }
);

export type ReportSectionFragmentFragment = (
  { __typename: 'ReportSection' }
  & Pick<ReportSection, 'id' | 'bodyJson' | 'showHeading' | 'newPage' | 'sectionType' | 'photoSort' | 'includeAddressesOnPhotos' | 'includeAnalysisList' | 'issueSort' | 'analysisPhotos' | 'analysisSource' | 'analysisFields' | 'rank' | 'title' | 'includeAttachmentList' | 'customAttachmentList' | 'skipEmptyFields' | 'autoGenerateAttachmentList'>
  & { addresses: Array<(
    { __typename: 'Address' }
    & Pick<Address, 'id'>
  )>, locations: Array<(
    { __typename: 'Location' }
    & Pick<Location, 'id'>
  )> }
);

export type ReportSectionIssueFieldsFragment = (
  { __typename: 'ReportSectionIssue' }
  & Pick<ReportSectionIssue, 'id'>
  & { issue: (
    { __typename: 'Issue' }
    & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description'>
    & { issue: Maybe<(
      { __typename: 'Issue' }
      & Pick<Issue, 'id'>
    )>, elements: Maybe<Array<Maybe<(
      { __typename: 'Element' }
      & Pick<Element, 'id' | 'number' | 'name'>
    )>>>, issues: Maybe<Array<Maybe<(
      { __typename: 'Issue' }
      & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description'>
      & { issues: Maybe<Array<Maybe<(
        { __typename: 'Issue' }
        & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description'>
        & { issues: Maybe<Array<Maybe<(
          { __typename: 'Issue' }
          & Pick<Issue, 'id' | 'number' | 'alternateNumber' | 'description'>
        )>>> }
      )>>> }
    )>>> }
  ) }
);

export type ReportSectionIssuesQueryVariables = {
  reportSectionId: Scalars['ID']
};


export type ReportSectionIssuesQuery = (
  { __typename: 'RootQueryType' }
  & { reportSectionIssues: Array<{ __typename: 'ReportSectionIssue' }
    & ReportSectionIssueFieldsFragment
  > }
);

export type ReportSectionLocationsQueryVariables = {
  reportSectionId: Scalars['ID']
};


export type ReportSectionLocationsQuery = (
  { __typename: 'RootQueryType' }
  & { reportSectionLocations: Array<(
    { __typename: 'ReportSectionLocation' }
    & Pick<ReportSectionLocation, 'id'>
    & { location: { __typename: 'Location' }
      & LocationRowFragmentFragment
     }
  )> }
);

export type ReportTypeQueryVariables = {
  id: Scalars['ID']
};


export type ReportTypeQuery = (
  { __typename: 'RootQueryType' }
  & { reportType: (
    { __typename: 'ReportType' }
    & Pick<ReportType, 'id' | 'name' | 'rank' | 'overhead'>
    & { reportTypeSections: Array<(
      { __typename: 'ReportTypeSection' }
      & Pick<ReportTypeSection, 'id' | 'showHeading' | 'sectionType' | 'rank' | 'template' | 'title' | 'prefill'>
    )> }
  ) }
);

export type ReportTypesQueryVariables = {};


export type ReportTypesQuery = (
  { __typename: 'RootQueryType' }
  & { reportTypes: Array<(
    { __typename: 'ReportType' }
    & Pick<ReportType, 'id' | 'name' | 'rank' | 'overhead'>
    & { sku: Maybe<(
      { __typename: 'Sku' }
      & Pick<Sku, 'id' | 'name'>
    )>, reportTypeSections: Array<(
      { __typename: 'ReportTypeSection' }
      & Pick<ReportTypeSection, 'id' | 'showHeading' | 'sectionType' | 'rank' | 'template' | 'title' | 'prefill'>
    )> }
  )> }
);

export type ReportTypesForProjectQueryVariables = {
  number: Scalars['String']
};


export type ReportTypesForProjectQuery = (
  { __typename: 'RootQueryType' }
  & { reportTypes: Array<(
    { __typename: 'ReportType' }
    & Pick<ReportType, 'id' | 'name' | 'rank' | 'overhead'>
    & { sku: Maybe<{ __typename: 'Sku' }
      & SkuFragmentFragment
    >, reportTypeSections: Array<(
      { __typename: 'ReportTypeSection' }
      & Pick<ReportTypeSection, 'id' | 'showHeading' | 'sectionType' | 'rank' | 'template' | 'title' | 'prefill'>
    )> }
  )>, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'projectType'>
  ) }
);

export type SaveReportMutationVariables = {
  input: ReportInput
};


export type SaveReportMutation = (
  { __typename: 'RootMutationType' }
  & { saveReport: Maybe<{ __typename: 'Report' }
    & EditReportFragmentFragment
  > }
);

export type SaveReportDocumentsMutationVariables = {
  reportSectionId: Scalars['ID'],
  ids: Array<Scalars['ID']>
};


export type SaveReportDocumentsMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportDocuments: Maybe<Array<Maybe<(
    { __typename: 'ReportDocument' }
    & Pick<ReportDocument, 'id' | 'rank'>
    & { document: (
      { __typename: 'Document' }
      & Pick<Document, 'id' | 'header' | 'receivedDate' | 'pages' | 'author' | 'description' | 'section' | 'date' | 'publicDescription'>
      & { attachment: Maybe<(
        { __typename: 'ArcAttachment' }
        & Pick<ArcAttachment, 'fileName'>
      )> }
    ) }
  )>>> }
);

export type SaveReportPhotoGroupMutationVariables = {
  input: ReportPhotoGroupInput
};


export type SaveReportPhotoGroupMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportPhotoGroup: Maybe<(
    { __typename: 'ReportPhotoGroup' }
    & Pick<ReportPhotoGroup, 'id' | 'rank'>
    & { photoset: Maybe<(
      { __typename: 'Photoset' }
      & Pick<Photoset, 'id' | 'party' | 'inspectionDate' | 'pfcs' | 'day' | 'keyPhotoCount'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login'>
      )> }
    )>, address: Maybe<(
      { __typename: 'Address' }
      & Pick<Address, 'id' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )>, location: Maybe<(
      { __typename: 'Location' }
      & Pick<Location, 'id' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )>, element: Maybe<(
      { __typename: 'Element' }
      & Pick<Element, 'id' | 'number' | 'name' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )>, issue: Maybe<(
      { __typename: 'Issue' }
      & Pick<Issue, 'id' | 'number' | 'description' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )>, player: Maybe<(
      { __typename: 'Player' }
      & Pick<Player, 'id' | 'company' | 'name' | 'role' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )>, testLocation: Maybe<(
      { __typename: 'TestLocation' }
      & Pick<TestLocation, 'id' | 'number' | 'description' | 'pfcsKeyPhotoCount' | 'otherKeyPhotoCount'>
    )> }
  )> }
);

export type SaveReportSectionMutationVariables = {
  input: ReportSectionInput
};


export type SaveReportSectionMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportSection: Maybe<{ __typename: 'ReportSection' }
    & ReportSectionFragmentFragment
  > }
);

export type SaveReportTypeMutationVariables = {
  input: ReportTypeInput
};


export type SaveReportTypeMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportType: Maybe<(
    { __typename: 'ReportType' }
    & Pick<ReportType, 'id' | 'name' | 'rank' | 'overhead' | 'omitCover' | 'includeNote' | 'includeToc' | 'intro'>
  )> }
);

export type SaveReportTypeSectionMutationVariables = {
  input: ReportTypeSectionInput
};


export type SaveReportTypeSectionMutation = (
  { __typename: 'RootMutationType' }
  & { saveReportTypeSection: Maybe<(
    { __typename: 'ReportTypeSection' }
    & Pick<ReportTypeSection, 'id' | 'showHeading' | 'sectionType' | 'rank' | 'template' | 'title' | 'prefill' | 'includeAnalysisList'>
  )> }
);

export type DeleteResidenceMutationVariables = {
  id: Scalars['ID']
};


export type DeleteResidenceMutation = (
  { __typename: 'RootMutationType' }
  & { deleteResidence: Maybe<(
    { __typename: 'Residence' }
    & Pick<Residence, 'id'>
  )> }
);

export type AnnualChecklistsQueryVariables = {
  year: Scalars['Int']
};


export type AnnualChecklistsQuery = (
  { __typename: 'RootQueryType' }
  & { checklist: (
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id'>
    & { checklistItems: Array<(
      { __typename: 'ChecklistItem' }
      & Pick<ChecklistItem, 'id' | 'position' | 'section' | 'title' | 'notes' | 'who' | 'when'>
    )> }
  ), seminars: Array<{ __typename: 'Seminar' }
    & AnnualChecklistsSeminarFieldsFragment
  > }
);

export type AnnualChecklistsSeminarFieldsFragment = (
  { __typename: 'Seminar' }
  & Pick<Seminar, 'id' | 'eventDate' | 'title'>
  & { checklists: Array<(
    { __typename: 'Checklist' }
    & Pick<Checklist, 'id' | 'category'>
    & { checklistItems: Array<(
      { __typename: 'ChecklistItem' }
      & Pick<ChecklistItem, 'id' | 'title' | 'complete'>
      & { template: Maybe<(
        { __typename: 'ChecklistItem' }
        & Pick<ChecklistItem, 'id'>
      )> }
    )> }
  )> }
);

export type DeleteSeminarAttachmentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteSeminarAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteSeminarAttachment: Maybe<(
    { __typename: 'SeminarAttachment' }
    & Pick<SeminarAttachment, 'id'>
  )> }
);

export type DeleteSeminarAttendeeMutationVariables = {
  id: Scalars['ID']
};


export type DeleteSeminarAttendeeMutation = (
  { __typename: 'RootMutationType' }
  & { deleteSeminarAttendee: Maybe<(
    { __typename: 'SeminarAttendee' }
    & Pick<SeminarAttendee, 'id'>
  )> }
);

export type EditSeminarQueryVariables = {
  id: Scalars['ID']
};


export type EditSeminarQuery = (
  { __typename: 'RootQueryType' }
  & { seminar: { __typename: 'Seminar' }
    & SeminarFragmentFragment
   }
);

export type EditSeminarFollowupQueryVariables = {
  id: Scalars['ID']
};


export type EditSeminarFollowupQuery = (
  { __typename: 'RootQueryType' }
  & { seminar: (
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id' | 'bodyFollowup'>
  ) }
);

export type SeminarImportMutationVariables = {
  id: Scalars['ID'],
  token: Scalars['String']
};


export type SeminarImportMutation = (
  { __typename: 'RootMutationType' }
  & { seminarImport: Maybe<(
    { __typename: 'SeminarImportResults' }
    & Pick<SeminarImportResults, 'matchCount' | 'unmatched'>
  )> }
);

export type SeminarsQueryVariables = {
  contactId?: Maybe<Scalars['ID']>
};


export type SeminarsQuery = (
  { __typename: 'RootQueryType' }
  & { seminars: Array<(
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id' | 'title' | 'eventType' | 'videoUrl' | 'eventDate' | 'registrantCount' | 'attendeeCount'>
  )> }
);

export type SaveSeminarMutationVariables = {
  input: SeminarInput
};


export type SaveSeminarMutation = (
  { __typename: 'RootMutationType' }
  & { saveSeminar: Maybe<{ __typename: 'Seminar' }
    & SeminarFragmentFragment
  > }
);

export type SaveSeminarAttachmentMutationVariables = {
  input: SeminarAttachmentInput
};


export type SaveSeminarAttachmentMutation = (
  { __typename: 'RootMutationType' }
  & { saveSeminarAttachment: Maybe<(
    { __typename: 'SeminarAttachment' }
    & Pick<SeminarAttachment, 'id' | 'description' | 'role' | 'attachmentUrl'>
    & { attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )> }
);

export type SaveSeminarAttendeeMutationVariables = {
  input: SeminarAttendeeInput
};


export type SaveSeminarAttendeeMutation = (
  { __typename: 'RootMutationType' }
  & { saveSeminarAttendee: Maybe<{ __typename: 'SeminarAttendee' }
    & SeminarAttendeeFragmentFragment
  > }
);

export type SaveSeminarFollowupMutationVariables = {
  input: SeminarInput
};


export type SaveSeminarFollowupMutation = (
  { __typename: 'RootMutationType' }
  & { saveSeminar: Maybe<(
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id' | 'bodyFollowup'>
  )> }
);

export type SeminarAttendeeFragmentFragment = (
  { __typename: 'SeminarAttendee' }
  & Pick<SeminarAttendee, 'id' | 'registered' | 'attended' | 'key'>
  & { contact: (
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs' | 'sortAs' | 'email'>
    & { company: Maybe<(
      { __typename: 'Contact' }
      & Pick<Contact, 'id' | 'name'>
    )> }
  ) }
);

export type SeminarFragmentFragment = (
  { __typename: 'Seminar' }
  & Pick<Seminar, 'id' | 'title' | 'subject' | 'eventType' | 'eventDate' | 'eventTime' | 'eventLocation' | 'videoUrl' | 'fromName' | 'fromEmail' | 'followupStatus' | 'followupSentAt' | 'bodyConfirmation' | 'bodyReminder' | 'bodyFollowup' | 'goToWebinarKey' | 'campaignId'>
);

export type SendSeminarMutationVariables = {
  id: Scalars['ID']
};


export type SendSeminarMutation = (
  { __typename: 'RootMutationType' }
  & { sendSeminar: Maybe<(
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id' | 'followupStatus'>
  )> }
);

export type SeminarQueryVariables = {
  id: Scalars['ID']
};


export type SeminarQuery = (
  { __typename: 'RootQueryType' }
  & { seminar: { __typename: 'Seminar' }
    & SeminarFieldsFragment
   }
);

export type SeminarFieldsFragment = (
  { __typename: 'Seminar' }
  & { campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )>, checklists: Array<{ __typename: 'Checklist' }
    & ChecklistFragmentFragment
  >, seminarAttendees: Array<{ __typename: 'SeminarAttendee' }
    & SeminarAttendeeFragmentFragment
  >, seminarAttachments: Array<(
    { __typename: 'SeminarAttachment' }
    & Pick<SeminarAttachment, 'id' | 'description' | 'role' | 'attachmentUrl'>
    & { attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )> }
)
  & SeminarFragmentFragment
;

export type SeminarSyncMutationVariables = {
  id: Scalars['ID']
};


export type SeminarSyncMutation = (
  { __typename: 'RootMutationType' }
  & { seminarSync: Maybe<(
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id'>
  )> }
);

export type SendSeminarTestEmailMutationVariables = {
  id: Scalars['ID'],
  email: Scalars['String']
};


export type SendSeminarTestEmailMutation = (
  { __typename: 'RootMutationType' }
  & { sendSeminarTestEmail: Maybe<(
    { __typename: 'Seminar' }
    & Pick<Seminar, 'id'>
  )> }
);

export type DeleteSampleMutationVariables = {
  id: Scalars['ID']
};


export type DeleteSampleMutation = (
  { __typename: 'RootMutationType' }
  & { deleteSkuSample: Maybe<(
    { __typename: 'SkuSample' }
    & Pick<SkuSample, 'id'>
  )> }
);

export type SkuQueryVariables = {
  id: Scalars['ID']
};


export type SkuQuery = (
  { __typename: 'RootQueryType' }
  & { sku: (
    { __typename: 'Sku' }
    & Pick<Sku, 'id' | 'name' | 'description' | 'category' | 'trainingUrl'>
  ) }
);

export type EditSkuSampleQueryVariables = {
  id: Scalars['ID']
};


export type EditSkuSampleQuery = (
  { __typename: 'RootQueryType' }
  & { skuSample: Maybe<(
    { __typename: 'SkuSample' }
    & Pick<SkuSample, 'id' | 'url' | 'description'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id'>
    )> }
  )> }
);

export type SkUsQueryVariables = {};


export type SkUsQuery = (
  { __typename: 'RootQueryType' }
  & { skus: Array<(
    { __typename: 'Sku' }
    & Pick<Sku, 'id' | 'name' | 'description' | 'category'>
  )> }
);

export type SampleFragmentFragment = (
  { __typename: 'SkuSample' }
  & Pick<SkuSample, 'id' | 'attachmentUrl' | 'url' | 'description'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
  )> }
);

export type SaveSkuMutationVariables = {
  input: SkuInput
};


export type SaveSkuMutation = (
  { __typename: 'RootMutationType' }
  & { saveSku: Maybe<{ __typename: 'Sku' }
    & SkuFragmentFragment
  > }
);

export type SaveSkuSampleMutationVariables = {
  input: SkuSampleInput
};


export type SaveSkuSampleMutation = (
  { __typename: 'RootMutationType' }
  & { saveSkuSample: Maybe<{ __typename: 'SkuSample' }
    & SampleFragmentFragment
  > }
);

export type ShowSkuQueryVariables = {
  id: Scalars['ID']
};


export type ShowSkuQuery = (
  { __typename: 'RootQueryType' }
  & { sku: { __typename: 'Sku' }
    & SkuFragmentFragment
   }
);

export type SkuFragmentFragment = (
  { __typename: 'Sku' }
  & Pick<Sku, 'id' | 'name' | 'description' | 'category' | 'trainingUrl'>
  & { samples: Array<{ __typename: 'SkuSample' }
    & SampleFragmentFragment
  > }
);

export type ArTagsQueryVariables = {
  scope?: Maybe<Scalars['String']>
};


export type ArTagsQuery = (
  { __typename: 'RootQueryType' }
  & { tags: Array<(
    { __typename: 'Tag' }
    & Pick<Tag, 'projectCount'>
  )
    & TagFieldsFragment
  > }
);

export type CreateTaggingMutationVariables = {
  input: TaggingInput
};


export type CreateTaggingMutation = (
  { __typename: 'RootMutationType' }
  & { createTagging: Maybe<(
    { __typename: 'Tagging' }
    & Pick<Tagging, 'id' | 'createdAt'>
    & { tag: { __typename: 'Tag' }
      & TagFieldsFragment
     }
  )> }
);

export type DeleteTaggingMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTaggingMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTagging: Maybe<(
    { __typename: 'Tagging' }
    & Pick<Tagging, 'id'>
  )> }
);

export type TagQueryVariables = {
  id: Scalars['ID']
};


export type TagQuery = (
  { __typename: 'RootQueryType' }
  & { tag: Maybe<{ __typename: 'Tag' }
    & TagFieldsFragment
  > }
);

export type SaveTagMutationVariables = {
  input: TagInput
};


export type SaveTagMutation = (
  { __typename: 'RootMutationType' }
  & { saveTag: Maybe<{ __typename: 'Tag' }
    & TagFieldsFragment
  > }
);

export type TagFieldsFragment = (
  { __typename: 'Tag' }
  & Pick<Tag, 'id' | 'scope' | 'category' | 'section' | 'subsection'>
);

export type TagsQueryVariables = {
  scope?: Maybe<Scalars['String']>
};


export type TagsQuery = (
  { __typename: 'RootQueryType' }
  & { tags: Array<{ __typename: 'Tag' }
    & TagFieldsFragment
  > }
);

export type CompleteTaskMutationVariables = {
  input: TaskInput
};


export type CompleteTaskMutation = (
  { __typename: 'RootMutationType' }
  & { saveTask: Maybe<(
    { __typename: 'Task' }
    & Pick<Task, 'id' | 'completed'>
  )
    & UserTaskFragmentFragment
  > }
);

export type TaskCountsQueryVariables = {
  user?: Maybe<Scalars['String']>
};


export type TaskCountsQuery = (
  { __typename: 'RootQueryType' }
  & { taskCounts: Array<(
    { __typename: 'DynamicMetric' }
    & Pick<DynamicMetric, 'name' | 'count'>
  )> }
);

export type DeleteTaskMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTaskMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTask: Maybe<(
    { __typename: 'Task' }
    & Pick<Task, 'id'>
  )
    & UserTaskFragmentFragment
  > }
);

export type SaveTaskMutationVariables = {
  input: TaskInput
};


export type SaveTaskMutation = (
  { __typename: 'RootMutationType' }
  & { saveTask: Maybe<{ __typename: 'Task' }
    & TaskFragmentFragment
    & UserTaskFragmentFragment
  > }
);

export type TaskFragmentFragment = (
  { __typename: 'Task' }
  & Pick<Task, 'id' | 'description' | 'itemDate' | 'priority' | 'completed' | 'category' | 'hours' | 'userId' | 'deliverableId' | 'projectId' | 'tenTouchType' | 'tenTouchNote' | 'tenTouchSubject' | 'tenTouchEmail'>
  & { creator: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, deliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description'>
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
  )>, interview: Maybe<(
    { __typename: 'Interview' }
    & Pick<Interview, 'id'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )> }
  )>, contact: Maybe<(
    { __typename: 'Contact' }
    & Pick<Contact, 'id' | 'displayAs'>
  )>, employee: Maybe<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs'>
  )>, campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )>, feature: Maybe<(
    { __typename: 'Feature' }
    & Pick<Feature, 'id' | 'title' | 'featureType'>
  )>, kanbanCard: Maybe<(
    { __typename: 'KanbanCard' }
    & Pick<KanbanCard, 'id' | 'title'>
    & { deliverable: Maybe<(
      { __typename: 'Deliverable' }
      & Pick<Deliverable, 'id' | 'description'>
    )> }
  )>, device: Maybe<(
    { __typename: 'Device' }
    & Pick<Device, 'id'>
  )>, tenTouch: Maybe<(
    { __typename: 'TenTouch' }
    & Pick<TenTouch, 'id'>
  )>, tenTouchItem: Maybe<(
    { __typename: 'TenTouchItem' }
    & Pick<TenTouchItem, 'id' | 'category' | 'name' | 'emailSubject' | 'emailBody'>
  )> }
);

export type UserTaskFragmentFragment = (
  { __typename: 'Task' }
  & Pick<Task, 'id'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'pastDueTaskCount' | 'todayTaskCount'>
  )> }
);

export type TasksQueryVariables = {
  parentType: Scalars['String'],
  parentId: Scalars['ID'],
  scope?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  includeTenTouches: Scalars['Boolean']
};


export type TasksQuery = (
  { __typename: 'RootQueryType' }
  & { tasks: Array<{ __typename: 'Task' }
    & TaskFragmentFragment
  >, tenTouchTasks: Array<{ __typename: 'TenTouchTask' }
    & TenTouchTaskFragmentFragment
  > }
);

export type TemplatesQueryVariables = {};


export type TemplatesQuery = (
  { __typename: 'RootQueryType' }
  & { templates: Array<(
    { __typename: 'Template' }
    & Pick<Template, 'id' | 'name' | 'content' | 'scope' | 'category' | 'plainContent' | 'contentType'>
  )> }
);

export type TemplateQueryVariables = {
  id: Scalars['ID']
};


export type TemplateQuery = (
  { __typename: 'RootQueryType' }
  & { template: Maybe<(
    { __typename: 'Template' }
    & Pick<Template, 'id' | 'name' | 'content' | 'contentType' | 'category' | 'scope' | 'plainContent'>
  )> }
);

export type SaveTemplateMutationVariables = {
  input: TemplateInput
};


export type SaveTemplateMutation = (
  { __typename: 'RootMutationType' }
  & { saveTemplate: Maybe<(
    { __typename: 'Template' }
    & Pick<Template, 'id' | 'name' | 'content' | 'contentType' | 'category' | 'scope' | 'plainContent'>
  )> }
);

export type ProjectTestLocationsQueryVariables = {
  number: Scalars['String']
};


export type ProjectTestLocationsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number'>
    & { testLocations: Array<{ __typename: 'TestLocation' }
      & ShowTestLocationFragmentFragment
    > }
  ) }
);

export type BatchUpdateTestLocationsMutationVariables = {
  ids: Array<Scalars['ID']>,
  input: TestLocationInput,
  remove?: Maybe<Scalars['Boolean']>
};


export type BatchUpdateTestLocationsMutation = (
  { __typename: 'RootMutationType' }
  & { batchUpdateTestLocations: Maybe<Array<Maybe<{ __typename: 'TestLocation' }
    & ShowTestLocationFragmentFragment
  >>> }
);

export type DeleteTestLocationMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTestLocationMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTestLocation: Maybe<(
    { __typename: 'TestLocation' }
    & Pick<TestLocation, 'id'>
  )> }
);

export type EditTestLocationQueryVariables = {
  id: Scalars['ID']
};


export type EditTestLocationQuery = (
  { __typename: 'RootQueryType' }
  & { testLocation: Maybe<{ __typename: 'TestLocation' }
    & TestLocationFormFragmentFragment
  > }
);

export type TestLocationFormFragmentFragment = (
  { __typename: 'TestLocation' }
  & Pick<TestLocation, 'id' | 'description' | 'testedBy' | 'testedAt' | 'number' | 'attended' | 'alternateNumber' | 'analysis' | 'swi' | 'damage'>
  & { bpaLinks: Array<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  >, next: Maybe<(
    { __typename: 'TestLocation' }
    & Pick<TestLocation, 'id'>
  )>, prev: Maybe<(
    { __typename: 'TestLocation' }
    & Pick<TestLocation, 'id'>
  )> }
);

export type TestLocationsQueryVariables = {
  projectId?: Maybe<Scalars['ID']>
};


export type TestLocationsQuery = (
  { __typename: 'RootQueryType' }
  & { testLocations: Array<{ __typename: 'TestLocation' }
    & ShowTestLocationFragmentFragment
  > }
);

export type SaveTestLocationMutationVariables = {
  input: TestLocationInput
};


export type SaveTestLocationMutation = (
  { __typename: 'RootMutationType' }
  & { saveTestLocation: Maybe<{ __typename: 'TestLocation' }
    & TestLocationFormFragmentFragment
  > }
);

export type ShowTestLocationFragmentFragment = (
  { __typename: 'TestLocation' }
  & Pick<TestLocation, 'id' | 'description' | 'testedBy' | 'testedAt' | 'number' | 'attended' | 'alternateNumber' | 'analysis' | 'swi' | 'damage' | 'pfcsPhotoCount' | 'pfcsKeyPhotoCount' | 'otherPhotoCount' | 'otherKeyPhotoCount' | 'updatedAt'>
  & { elements: Array<(
    { __typename: 'Element' }
    & Pick<Element, 'id' | 'displayName'>
  )>, addresses: Array<(
    { __typename: 'Address' }
    & Pick<Address, 'id' | 'displayName'>
  )>, locations: Array<(
    { __typename: 'Location' }
    & Pick<Location, 'id' | 'displayName'>
  )>, issues: Array<(
    { __typename: 'Issue' }
    & Pick<Issue, 'id' | 'displayName'>
  )> }
);

export type TimelinesQueryVariables = {
  number: Scalars['String']
};


export type TimelinesQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'shareL1Timeline' | 'shareL2Timeline' | 'l1Timeline'>
    & { timelines: Array<{ __typename: 'Timeline' }
      & TimelineFieldsFragment
    > }
  ) }
);

export type TimelineFieldsFragment = (
  { __typename: 'Timeline' }
  & Pick<Timeline, 'id' | 'itemDate' | 'title' | 'description' | 'keyEvent' | 'customFields'>
  & { players: Array<(
    { __typename: 'Player' }
    & Pick<Player, 'id' | 'displayName'>
  )>, elements: Array<(
    { __typename: 'Element' }
    & Pick<Element, 'id' | 'displayName'>
  )>, document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id' | 'publicDescription' | 'displayName'>
    & { attachedFiles: Array<(
      { __typename: 'AttachedFile' }
      & Pick<AttachedFile, 'id' | 'primaryFile' | 'attachmentUrl'>
      & { attachment: Maybe<(
        { __typename: 'ArcAttachment' }
        & Pick<ArcAttachment, 'fileName'>
      )> }
    )> }
  )> }
);

export type DeleteTimelineMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTimelineMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTimeline: Maybe<(
    { __typename: 'Timeline' }
    & Pick<Timeline, 'id'>
  )> }
);

export type TimelineQueryVariables = {
  id: Scalars['ID']
};


export type TimelineQuery = (
  { __typename: 'RootQueryType' }
  & { timeline: Maybe<{ __typename: 'Timeline' }
    & TimelineFormFragmentFragment
  > }
);

export type TimelineFormFragmentFragment = (
  { __typename: 'Timeline' }
  & Pick<Timeline, 'id' | 'itemDate' | 'title' | 'description' | 'keyEvent' | 'customFields'>
  & { document: Maybe<(
    { __typename: 'Document' }
    & Pick<Document, 'id'>
  )>, interview: Maybe<(
    { __typename: 'Interview' }
    & Pick<Interview, 'id'>
  )>, bpaLinks: Array<{ __typename: 'BpaLink' }
    & BpaLinkFragmentFragment
  > }
);

export type SaveTimelineMutationVariables = {
  input: TimelineInput
};


export type SaveTimelineMutation = (
  { __typename: 'RootMutationType' }
  & { saveTimeline: Maybe<{ __typename: 'Timeline' }
    & TimelineFormFragmentFragment
  > }
);

export type ApproveExpensesMutationVariables = {
  ids: Array<Scalars['ID']>,
  employeeId: Scalars['ID'],
  month: Scalars['String']
};


export type ApproveExpensesMutation = (
  { __typename: 'RootMutationType' }
  & { approveExpenses: Maybe<(
    { __typename: 'MonthlyPayment' }
    & Pick<MonthlyPayment, 'id' | 'date' | 'category' | 'amount' | 'createdAt' | 'paidOn'>
    & { employee: Maybe<(
      { __typename: 'Employee' }
      & Pick<Employee, 'id'>
    )>, timesheets: Maybe<Array<Maybe<(
      { __typename: 'Timesheet' }
      & Pick<Timesheet, 'id' | 'expenseStatus' | 'description' | 'itemDate' | 'total' | 'attachmentUrl'>
      & { project: (
        { __typename: 'Project' }
        & Pick<Project, 'id' | 'number' | 'name'>
      ) }
    )>>> }
  )> }
);

export type CommonbillingentriesQueryVariables = {};


export type CommonbillingentriesQuery = (
  { __typename: 'RootQueryType' }
  & { templates: Array<(
    { __typename: 'Template' }
    & Pick<Template, 'id' | 'plainContent' | 'category'>
  )> }
);

export type CreateTimesheetMutationVariables = {
  input?: Maybe<TimesheetInput>
};


export type CreateTimesheetMutation = (
  { __typename: 'RootMutationType' }
  & { createTimesheet: Maybe<{ __typename: 'Timesheet' }
    & TimesheetPartsFragment
  > }
);

export type DeleteTimesheetMutationVariables = {
  id?: Maybe<Scalars['ID']>
};


export type DeleteTimesheetMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTimesheet: Maybe<(
    { __typename: 'Timesheet' }
    & Pick<Timesheet, 'id'>
  )> }
);

export type TimesheetQueryVariables = {
  id?: Maybe<Scalars['ID']>
};


export type TimesheetQuery = (
  { __typename: 'RootQueryType' }
  & { timesheet: { __typename: 'Timesheet' }
    & TimesheetEditFragmentFragment
   }
);

export type ExpensesQueryVariables = {
  month: Scalars['String']
};


export type ExpensesQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs'>
    & { user: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
      & { timesheets: Maybe<Array<Maybe<(
        { __typename: 'Timesheet' }
        & Pick<Timesheet, 'id' | 'expenseStatus' | 'description' | 'itemDate' | 'total' | 'attachmentUrl'>
        & { project: (
          { __typename: 'Project' }
          & Pick<Project, 'id' | 'number' | 'name'>
        ) }
      )>>> }
    )>, monthlyPayments: Array<(
      { __typename: 'MonthlyPayment' }
      & Pick<MonthlyPayment, 'id' | 'date' | 'category' | 'amount' | 'createdAt' | 'paidOn'>
      & { timesheets: Maybe<Array<Maybe<(
        { __typename: 'Timesheet' }
        & Pick<Timesheet, 'id' | 'expenseStatus' | 'description' | 'itemDate' | 'total' | 'attachmentUrl'>
        & { project: (
          { __typename: 'Project' }
          & Pick<Project, 'id' | 'number' | 'name'>
        ) }
      )>>> }
    )> }
  )> }
);

export type GenerateInvoicesMutationVariables = {
  month: Scalars['String']
};


export type GenerateInvoicesMutation = (
  { __typename: 'RootMutationType' }
  & Pick<RootMutationType, 'generateAllInvoices'>
);

export type TimesheetsQueryVariables = {
  login: Scalars['String'],
  month: Scalars['String']
};


export type TimesheetsQuery = (
  { __typename: 'RootQueryType' }
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { employee: Maybe<(
      { __typename: 'Employee' }
      & Pick<Employee, 'id'>
      & { office: (
        { __typename: 'Office' }
        & Pick<Office, 'id' | 'location'>
      ) }
    )> }
  ), timesheets: Array<{ __typename: 'Timesheet' }
    & TimesheetPartsFragment
  > }
);

export type OverheadHoursQueryVariables = {
  login: Scalars['String'],
  year: Scalars['String']
};


export type OverheadHoursQuery = (
  { __typename: 'RootQueryType' }
  & { timesheets: Array<(
    { __typename: 'Timesheet' }
    & Pick<Timesheet, 'id' | 'itemDate' | 'hours'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'projectType' | 'number' | 'name'>
    ) }
  )> }
);

export type SaveTimesheetMutationVariables = {
  input?: Maybe<TimesheetInput>
};


export type SaveTimesheetMutation = (
  { __typename: 'RootMutationType' }
  & { saveTimesheet: Maybe<{ __typename: 'Timesheet' }
    & TimesheetPartsFragment
  > }
);

export type TimesheetStatusQueryVariables = {};


export type TimesheetStatusQuery = (
  { __typename: 'RootQueryType' }
  & { timesheetStatus: Maybe<(
    { __typename: 'TimesheetStatus' }
    & Pick<TimesheetStatus, 'month'>
    & { results: Maybe<Array<Maybe<(
      { __typename: 'TimesheetStatusResult' }
      & Pick<TimesheetStatusResult, 'count' | 'weeklyStatus'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      )> }
    )>>> }
  )> }
);

export type SubmitTimesheetMutationVariables = {
  login: Scalars['String'],
  mode: Scalars['String'],
  month: Scalars['String']
};


export type SubmitTimesheetMutation = (
  { __typename: 'RootMutationType' }
  & { submitTimesheet: Maybe<Array<Maybe<(
    { __typename: 'Timesheet' }
    & Pick<Timesheet, 'id' | 'status'>
  )>>> }
);

export type TimesheetEditFragmentFragment = (
  { __typename: 'Timesheet' }
  & Pick<Timesheet, 'id' | 'billedPosition' | 'itemDate' | 'hours' | 'description' | 'category' | 'noCharge' | 'attachment' | 'isExpense' | 'paymentType' | 'dueDate' | 'deliverableId' | 'projectId' | 'campaignId' | 'userId' | 'suggestion' | 'rate' | 'status' | 'testimony'>
  & { mentor: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  ), project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType'>
    & { projectUsers: Array<(
      { __typename: 'ProjectUser' }
      & Pick<ProjectUser, 'id' | 'userId' | 'role'>
    )> }
  ) }
);

export type TimesheetPartsFragment = (
  { __typename: 'Timesheet' }
  & Pick<Timesheet, 'id' | 'billedPosition' | 'itemDate' | 'hours' | 'total' | 'description' | 'suggestion' | 'category' | 'noCharge' | 'attachment' | 'status' | 'isExpense' | 'paymentType' | 'testimony' | 'opportunity'>
  & { mentor: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, deliverable: Maybe<(
    { __typename: 'Deliverable' }
    & Pick<Deliverable, 'id' | 'description' | 'priority' | 'rank'>
    & { milestoneparent: (
      { __typename: 'Milestoneparent' }
      & Pick<Milestoneparent, 'id' | 'title'>
    ) }
  )>, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name' | 'projectType' | 'salesStageId'>
    & { pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'email'>
    )>, pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'email'>
    )> }
  ), campaign: Maybe<(
    { __typename: 'Campaign' }
    & Pick<Campaign, 'id' | 'name'>
  )>, user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  ) }
);

export type UpdateTimesheetMutationVariables = {
  id: Scalars['ID'],
  input?: Maybe<TimesheetInput>
};


export type UpdateTimesheetMutation = (
  { __typename: 'RootMutationType' }
  & { updateTimesheet: Maybe<{ __typename: 'Timesheet' }
    & TimesheetPartsFragment
  > }
);

export type EditTopicQueryVariables = {
  id: Scalars['ID']
};


export type EditTopicQuery = (
  { __typename: 'RootQueryType' }
  & { topic: { __typename: 'Topic' }
    & TopicFragmentFragment
   }
);

export type TopicFragmentFragment = (
  { __typename: 'Topic' }
  & Pick<Topic, 'id' | 'category' | 'status' | 'description' | 'title'>
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname'>
  ) }
);

export type ProjectTopicsQueryVariables = {
  id: Scalars['ID']
};


export type ProjectTopicsQuery = (
  { __typename: 'RootQueryType' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { topics: Array<{ __typename: 'Topic' }
      & TopicFragmentFragment
    > }
  ) }
);

export type SaveTopicMutationVariables = {
  input: TopicInput
};


export type SaveTopicMutation = (
  { __typename: 'RootMutationType' }
  & { saveTopic: Maybe<(
    { __typename: 'Topic' }
    & Pick<Topic, 'id'>
  )> }
);

export type TopicQueryVariables = {
  id: Scalars['ID']
};


export type TopicQuery = (
  { __typename: 'RootQueryType' }
  & { topic: { __typename: 'Topic' }
    & ShowTopicFieldsFragment
   }
);

export type ShowTopicFieldsFragment = (
  { __typename: 'Topic' }
  & Pick<Topic, 'createdAt'>
  & { notes: Array<{ __typename: 'Note' }
    & NoteShowFragmentFragment
  >, attachments: Array<{ __typename: 'Attachment' }
    & AttachmentFragmentFragment
  > }
)
  & TopicFragmentFragment
;

export type TrainingCategoriesQueryVariables = {};


export type TrainingCategoriesQuery = (
  { __typename: 'RootQueryType' }
  & { trainingCategories: Array<(
    { __typename: 'TrainingCategory' }
    & Pick<TrainingCategory, 'id' | 'name'>
  )> }
);

export type DeleteTrainingMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTrainingMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTraining: Maybe<(
    { __typename: 'Training' }
    & Pick<Training, 'id'>
  )> }
);

export type DeleteTrainingAssignmentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTrainingAssignmentMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTrainingAssignment: Maybe<(
    { __typename: 'TrainingAssignment' }
    & Pick<TrainingAssignment, 'id'>
  )> }
);

export type DeleteTrainingCompletionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTrainingCompletionMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTrainingCompletion: Maybe<(
    { __typename: 'TrainingCompletion' }
    & Pick<TrainingCompletion, 'id'>
  )> }
);

export type DeleteTrainingPlanMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTrainingPlanMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTrainingPlan: Maybe<(
    { __typename: 'TrainingPlan' }
    & Pick<TrainingPlan, 'id'>
  )> }
);

export type DeleteTrainingRequirementMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTrainingRequirementMutation = (
  { __typename: 'RootMutationType' }
  & { deleteTrainingRequirement: Maybe<(
    { __typename: 'TrainingRequirement' }
    & Pick<TrainingRequirement, 'id'>
  )> }
);

export type EditTrainingQueryVariables = {
  id: Scalars['ID']
};


export type EditTrainingQuery = (
  { __typename: 'RootQueryType' }
  & { training: { __typename: 'Training' }
    & EditTrainingFieldsFragment
   }
);

export type EditTrainingFieldsFragment = (
  { __typename: 'Training' }
  & Pick<Training, 'id' | 'name' | 'producedOn' | 'expectedDate' | 'bodyJson' | 'parentId' | 'url' | 'priority' | 'status'>
  & { trainingCategories: Array<(
    { __typename: 'TrainingCategory' }
    & Pick<TrainingCategory, 'id'>
  )>, trainingRequirements: Array<{ __typename: 'TrainingRequirement' }
    & TrainingRequirementFieldsFragment
  >, trainingCompletions: Array<{ __typename: 'TrainingCompletion' }
    & TrainingCompletionFragmentFragment
  >, attachments: Array<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'rank' | 'url' | 'projectId' | 'note' | 'attachmentUrl'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )>, document: Maybe<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    >, attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )>, trainings: Array<(
    { __typename: 'Training' }
    & Pick<Training, 'id'>
  )> }
);

export type EditTrainingPlanQueryVariables = {
  id: Scalars['ID']
};


export type EditTrainingPlanQuery = (
  { __typename: 'RootQueryType' }
  & { trainingPlan: Maybe<(
    { __typename: 'TrainingPlan' }
    & Pick<TrainingPlan, 'id' | 'name' | 'status' | 'userId'>
  )> }
);

export type TrainingListFragmentFragment = (
  { __typename: 'Training' }
  & Pick<Training, 'id' | 'parentId' | 'name' | 'url' | 'bodyJson' | 'updatedAt' | 'position' | 'priority' | 'status'>
  & { trainingCategories: Array<(
    { __typename: 'TrainingCategory' }
    & Pick<TrainingCategory, 'id' | 'name'>
  )>, trainingRequirements: Array<(
    { __typename: 'TrainingRequirement' }
    & Pick<TrainingRequirement, 'id'>
  )>, trainingAssignments: Array<(
    { __typename: 'TrainingAssignment' }
    & Pick<TrainingAssignment, 'id'>
    & { trainingPlan: (
      { __typename: 'TrainingPlan' }
      & Pick<TrainingPlan, 'id'>
      & { user: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
      )> }
    ) }
  )> }
);

export type TrainingListQueryVariables = {
  filter?: Maybe<Scalars['String']>
};


export type TrainingListQuery = (
  { __typename: 'RootQueryType' }
  & { trainingCategories: Array<(
    { __typename: 'TrainingCategory' }
    & Pick<TrainingCategory, 'id' | 'name'>
  )>, trainings: Array<(
    { __typename: 'Training' }
    & { trainings: Array<{ __typename: 'Training' }
      & TrainingListFragmentFragment
    > }
  )
    & TrainingListFragmentFragment
  > }
);

export type TrainingsQueryVariables = {};


export type TrainingsQuery = (
  { __typename: 'RootQueryType' }
  & { trainings: Array<(
    { __typename: 'Training' }
    & Pick<Training, 'id' | 'name'>
    & { trainings: Array<(
      { __typename: 'Training' }
      & Pick<Training, 'id' | 'name'>
    )> }
  )> }
);

export type TrainingRequirementFieldsFragment = (
  { __typename: 'TrainingRequirement' }
  & Pick<TrainingRequirement, 'id' | 'description' | 'deliverables' | 'mode' | 'options' | 'rank'>
);

export type SaveTrainingRequirementMutationVariables = {
  input: TrainingRequirementInput
};


export type SaveTrainingRequirementMutation = (
  { __typename: 'RootMutationType' }
  & { saveTrainingRequirement: Maybe<{ __typename: 'TrainingRequirement' }
    & TrainingRequirementFieldsFragment
  > }
);

export type SaveTrainingMutationVariables = {
  input: TrainingInput
};


export type SaveTrainingMutation = (
  { __typename: 'RootMutationType' }
  & { saveTraining: Maybe<{ __typename: 'Training' }
    & ShowTrainingFragmentFragment
  > }
);

export type SaveTrainingAssignmentMutationVariables = {
  input: TrainingAssignmentInput
};


export type SaveTrainingAssignmentMutation = (
  { __typename: 'RootMutationType' }
  & { saveTrainingAssignment: Maybe<{ __typename: 'TrainingAssignment' }
    & TrainingAssignmentFragmentFragment
  > }
);

export type SaveTrainingCompletionMutationVariables = {
  input: TrainingCompletionInput
};


export type SaveTrainingCompletionMutation = (
  { __typename: 'RootMutationType' }
  & { saveTrainingCompletion: Maybe<{ __typename: 'TrainingCompletion' }
    & TrainingCompletionFragmentFragment
  > }
);

export type SaveTrainingPlanMutationVariables = {
  input: TrainingPlanInput
};


export type SaveTrainingPlanMutation = (
  { __typename: 'RootMutationType' }
  & { saveTrainingPlan: Maybe<{ __typename: 'TrainingPlan' }
    & TrainingPlanFragmentFragment
  > }
);

export type ShowTrainingQueryVariables = {
  id: Scalars['ID']
};


export type ShowTrainingQuery = (
  { __typename: 'RootQueryType' }
  & { training: { __typename: 'Training' }
    & ShowTrainingFragmentFragment
   }
);

export type ShowTrainingFragmentFragment = (
  { __typename: 'Training' }
  & Pick<Training, 'id' | 'name' | 'bodyJson' | 'producedOn' | 'updatedAt' | 'url' | 'priority' | 'status'>
  & { training: Maybe<(
    { __typename: 'Training' }
    & Pick<Training, 'id' | 'name' | 'url' | 'bodyJson'>
    & { trainings: Array<(
      { __typename: 'Training' }
      & Pick<Training, 'id' | 'name' | 'url' | 'bodyJson'>
    )> }
  )>, trainings: Array<(
    { __typename: 'Training' }
    & Pick<Training, 'id' | 'url' | 'bodyJson' | 'name' | 'position'>
  )>, attachments: Array<(
    { __typename: 'Attachment' }
    & Pick<Attachment, 'id' | 'attachmentUrl' | 'note' | 'url' | 'rank'>
    & { project: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'number' | 'name'>
    )>, document: Maybe<{ __typename: 'Document' }
      & DocumentRowFragmentFragment
    >, attachment: Maybe<(
      { __typename: 'ArcAttachment' }
      & Pick<ArcAttachment, 'fileName'>
    )> }
  )>, trainingCompletions: Array<{ __typename: 'TrainingCompletion' }
    & TrainingCompletionFragmentFragment
  >, trainingCategories: Array<(
    { __typename: 'TrainingCategory' }
    & Pick<TrainingCategory, 'id' | 'name'>
  )>, trainingRequirements: Array<{ __typename: 'TrainingRequirement' }
    & TrainingRequirementFieldsFragment
  > }
);

export type SortTrainingAssignmentsMutationVariables = {
  input: TrainingAssignmentInput
};


export type SortTrainingAssignmentsMutation = (
  { __typename: 'RootMutationType' }
  & { sortTrainingAssignment: Maybe<Array<Maybe<(
    { __typename: 'TrainingAssignment' }
    & Pick<TrainingAssignment, 'id' | 'position'>
  )>>> }
);

export type SortTrainingRequirementMutationVariables = {
  id: Scalars['ID'],
  direction: Scalars['String']
};


export type SortTrainingRequirementMutation = (
  { __typename: 'RootMutationType' }
  & { sortTrainingRequirement: Maybe<Array<Maybe<(
    { __typename: 'TrainingRequirement' }
    & Pick<TrainingRequirement, 'id' | 'rank'>
  )>>> }
);

export type StaffTrainingQueryVariables = {};


export type StaffTrainingQuery = (
  { __typename: 'RootQueryType' }
  & { employees: Array<(
    { __typename: 'Employee' }
    & Pick<Employee, 'id' | 'displayAs' | 'department'>
    & { user: Maybe<{ __typename: 'User' }
      & StaffTrainingUserFieldsFragment
    > }
  )> }
);

export type StaffTrainingUserFieldsFragment = (
  { __typename: 'User' }
  & Pick<User, 'id' | 'login'>
  & { trainingPlans: Array<{ __typename: 'TrainingPlan' }
    & StaffTrainingPlanFieldsFragment
  >, trainingCompletions: Array<(
    { __typename: 'TrainingCompletion' }
    & Pick<TrainingCompletion, 'id' | 'status'>
    & { training: (
      { __typename: 'Training' }
      & Pick<Training, 'id'>
    ), trainingRequirement: Maybe<(
      { __typename: 'TrainingRequirement' }
      & Pick<TrainingRequirement, 'id'>
    )> }
  )> }
);

export type StaffTrainingPlanFieldsFragment = (
  { __typename: 'TrainingPlan' }
  & Pick<TrainingPlan, 'id' | 'status' | 'name' | 'createdAt'>
  & { trainingAssignments: Array<(
    { __typename: 'TrainingAssignment' }
    & Pick<TrainingAssignment, 'id'>
    & { training: (
      { __typename: 'Training' }
      & Pick<Training, 'id'>
    ) }
  )> }
);

export type TrainingAssignmentFragmentFragment = (
  { __typename: 'TrainingAssignment' }
  & Pick<TrainingAssignment, 'id' | 'position'>
  & { training: (
    { __typename: 'Training' }
    & Pick<Training, 'id' | 'url' | 'name' | 'bodyJson'>
    & { trainingRequirements: Array<(
      { __typename: 'TrainingRequirement' }
      & Pick<TrainingRequirement, 'id'>
    )>, trainings: Array<(
      { __typename: 'Training' }
      & Pick<Training, 'id' | 'name' | 'url' | 'position' | 'bodyJson'>
      & { trainingRequirements: Array<(
        { __typename: 'TrainingRequirement' }
        & Pick<TrainingRequirement, 'id'>
      )>, trainingCompletions: Array<(
        { __typename: 'TrainingCompletion' }
        & Pick<TrainingCompletion, 'id' | 'userId' | 'status' | 'trainingRequirementId' | 'createdAt'>
      )> }
    )>, trainingCompletions: Array<(
      { __typename: 'TrainingCompletion' }
      & Pick<TrainingCompletion, 'id' | 'userId' | 'status' | 'trainingRequirementId' | 'createdAt'>
    )> }
  ) }
);

export type TrainingCompletionFragmentFragment = (
  { __typename: 'TrainingCompletion' }
  & Pick<TrainingCompletion, 'id' | 'userId' | 'trainingRequirementId' | 'createdAt' | 'answer' | 'answers' | 'status' | 'correct' | 'attachmentUrl'>
  & { attachment: Maybe<(
    { __typename: 'ArcAttachment' }
    & Pick<ArcAttachment, 'fileName'>
  )>, project: Maybe<(
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'number' | 'name'>
  )>, user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'fullname' | 'employmentStatus'>
  ) }
);

export type TrainingPlanFragmentFragment = (
  { __typename: 'TrainingPlan' }
  & Pick<TrainingPlan, 'id' | 'status' | 'name'>
  & { user: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login'>
  )>, trainingAssignments: Array<{ __typename: 'TrainingAssignment' }
    & TrainingAssignmentFragmentFragment
  > }
);

export type UserTrainingPlansQueryVariables = {
  login: Scalars['String']
};


export type UserTrainingPlansQuery = (
  { __typename: 'RootQueryType' }
  & { trainingPlans: Array<{ __typename: 'TrainingPlan' }
    & TrainingPlanFragmentFragment
  > }
);

export type ActiveUsersQueryVariables = {
  includeIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type ActiveUsersQuery = (
  { __typename: 'RootQueryType' }
  & { users: Array<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )> }
);

export type CurrentUserQueryVariables = {};


export type CurrentUserQuery = (
  { __typename: 'RootQueryType' }
  & { currentUser: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname' | 'signature' | 'email' | 'roles' | 'allowArChanges' | 'isManager' | 'isTimeAdministrator' | 'isAdministrator' | 'isSalaryManager' | 'showPrimaryContactsOnly' | 'showManagement' | 'isIgk' | 'userType' | 'pastDueTaskCount' | 'todayTaskCount' | 'canApprovePayroll' | 'goToWebinarAccessToken' | 'goToWebinarExpiresAt' | 'timesheetsScrollToBottom' | 'timesheetsHideLockedWeeks' | 'invoiceReviewCount' | 'pendingTimesheets'>
    & { employee: Maybe<(
      { __typename: 'Employee' }
      & Pick<Employee, 'id'>
      & { billingPosition: (
        { __typename: 'BillingPosition' }
        & Pick<BillingPosition, 'id' | 'description'>
      ), office: (
        { __typename: 'Office' }
        & Pick<Office, 'id' | 'location'>
      ) }
    )> }
  )> }
);

export type BasicUserQueryVariables = {
  login: Scalars['String']
};


export type BasicUserQuery = (
  { __typename: 'RootQueryType' }
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  ) }
);

export type EditUserQueryVariables = {
  id: Scalars['ID']
};


export type EditUserQuery = (
  { __typename: 'RootQueryType' }
  & { user: { __typename: 'User' }
    & UserFragmentFragment
   }
);

export type UserSettingsQueryVariables = {
  login: Scalars['String']
};


export type UserSettingsQuery = (
  { __typename: 'RootQueryType' }
  & { user: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'timesheetsHideLockedWeeks' | 'timesheetsScrollToBottom' | 'taskCompletionNotification' | 'projectListStartDate' | 'projectListTotalDue' | 'showPrimaryContactsOnly' | 'signature'>
  ) }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename: 'RootQueryType' }
  & { users: Array<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname' | 'userType' | 'email' | 'employmentStatus' | 'isManager' | 'isSalaryManager' | 'token'>
  )> }
);

export type LoginUserMutationVariables = {
  token: Scalars['String']
};


export type LoginUserMutation = (
  { __typename: 'RootMutationType' }
  & { login: Maybe<(
    { __typename: 'UserSession' }
    & Pick<UserSession, 'token'>
  )> }
);

export type UsersPickerQueryVariables = {};


export type UsersPickerQuery = (
  { __typename: 'RootQueryType' }
  & { users: Array<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )> }
);

export type ProjectUsersQueryVariables = {
  includeProject: Scalars['Boolean'],
  includeIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id: Scalars['ID']
};


export type ProjectUsersQuery = (
  { __typename: 'RootQueryType' }
  & { users: Array<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'login' | 'fullname'>
  )>, project: (
    { __typename: 'Project' }
    & Pick<Project, 'id'>
    & { pc: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, pm: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, technicalLead: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'login' | 'fullname'>
    )>, projectUsers: Array<(
      { __typename: 'ProjectUser' }
      & Pick<ProjectUser, 'id' | 'role'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id' | 'login' | 'fullname'>
      ) }
    )> }
  ) }
);

export type SaveUserMutationVariables = {
  input: UserInput
};


export type SaveUserMutation = (
  { __typename: 'RootMutationType' }
  & { saveUser: Maybe<{ __typename: 'User' }
    & UserFragmentFragment
  > }
);

export type UpdateUserMutationVariables = {
  input: UserInput
};


export type UpdateUserMutation = (
  { __typename: 'RootMutationType' }
  & { saveUser: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'timesheetsHideLockedWeeks' | 'timesheetsScrollToBottom' | 'taskCompletionNotification' | 'projectListStartDate' | 'projectListTotalDue' | 'showPrimaryContactsOnly' | 'signature'>
  )> }
);

export type UserFragmentFragment = (
  { __typename: 'User' }
  & Pick<User, 'id' | 'login' | 'fullname' | 'email' | 'userType' | 'signature' | 'employmentStatus' | 'startDate' | 'endDate' | 'office' | 'workState' | 'isAdministrator' | 'isManager' | 'isIgk' | 'isSalaryManager' | 'isTimeAdministrator' | 'allowArChanges' | 'showManagement' | 'showExecutiveDash' | 'showAreaManagerDash' | 'showMarketingDash' | 'canApprovePayroll' | 'tracksTime' | 'requiresNewPassword' | 'notifications' | 'roles' | 'goToWebinarAccessToken' | 'goToWebinarExpiresAt'>
  & { kpiSet: Maybe<(
    { __typename: 'KpiSet' }
    & Pick<KpiSet, 'id' | 'name'>
  )> }
);
