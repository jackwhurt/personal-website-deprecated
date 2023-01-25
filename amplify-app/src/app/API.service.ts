/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCalendarEvent: OnCreateCalendarEventSubscription;
  onUpdateCalendarEvent: OnUpdateCalendarEventSubscription;
  onDeleteCalendarEvent: OnDeleteCalendarEventSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
};

export type CreateCalendarEventInput = {
  id?: string | null;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
};

export type ModelCalendarEventConditionInput = {
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  title?: ModelStringInput | null;
  actions?: ModelStringInput | null;
  allDay?: ModelBooleanInput | null;
  resizable?: ModelStringInput | null;
  draggable?: ModelBooleanInput | null;
  colour?: ModelStringInput | null;
  and?: Array<ModelCalendarEventConditionInput | null> | null;
  or?: Array<ModelCalendarEventConditionInput | null> | null;
  not?: ModelCalendarEventConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type CalendarEvent = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCalendarEventInput = {
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
};

export type DeleteCalendarEventInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type ModelCalendarEventFilterInput = {
  id?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  title?: ModelStringInput | null;
  actions?: ModelStringInput | null;
  allDay?: ModelBooleanInput | null;
  resizable?: ModelStringInput | null;
  draggable?: ModelBooleanInput | null;
  colour?: ModelStringInput | null;
  and?: Array<ModelCalendarEventFilterInput | null> | null;
  or?: Array<ModelCalendarEventFilterInput | null> | null;
  not?: ModelCalendarEventFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCalendarEventConnection = {
  __typename: "ModelCalendarEventConnection";
  items: Array<CalendarEvent | null>;
  nextToken?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionCalendarEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  actions?: ModelSubscriptionStringInput | null;
  allDay?: ModelSubscriptionBooleanInput | null;
  resizable?: ModelSubscriptionStringInput | null;
  draggable?: ModelSubscriptionBooleanInput | null;
  colour?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCalendarEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionCalendarEventFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type CreateCalendarEventMutation = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCalendarEventMutation = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCalendarEventMutation = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCalendarEventQuery = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCalendarEventsQuery = {
  __typename: "ModelCalendarEventConnection";
  items: Array<{
    __typename: "CalendarEvent";
    id: string;
    start?: string | null;
    end?: string | null;
    title?: string | null;
    actions?: string | null;
    allDay?: boolean | null;
    resizable?: string | null;
    draggable?: boolean | null;
    colour?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCalendarEventSubscription = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCalendarEventSubscription = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCalendarEventSubscription = {
  __typename: "CalendarEvent";
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCalendarEvent(
    input: CreateCalendarEventInput,
    condition?: ModelCalendarEventConditionInput
  ): Promise<CreateCalendarEventMutation> {
    const statement = `mutation CreateCalendarEvent($input: CreateCalendarEventInput!, $condition: ModelCalendarEventConditionInput) {
        createCalendarEvent(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCalendarEventMutation>response.data.createCalendarEvent;
  }
  async UpdateCalendarEvent(
    input: UpdateCalendarEventInput,
    condition?: ModelCalendarEventConditionInput
  ): Promise<UpdateCalendarEventMutation> {
    const statement = `mutation UpdateCalendarEvent($input: UpdateCalendarEventInput!, $condition: ModelCalendarEventConditionInput) {
        updateCalendarEvent(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCalendarEventMutation>response.data.updateCalendarEvent;
  }
  async DeleteCalendarEvent(
    input: DeleteCalendarEventInput,
    condition?: ModelCalendarEventConditionInput
  ): Promise<DeleteCalendarEventMutation> {
    const statement = `mutation DeleteCalendarEvent($input: DeleteCalendarEventInput!, $condition: ModelCalendarEventConditionInput) {
        deleteCalendarEvent(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCalendarEventMutation>response.data.deleteCalendarEvent;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetCalendarEvent(id: string): Promise<GetCalendarEventQuery> {
    const statement = `query GetCalendarEvent($id: ID!) {
        getCalendarEvent(id: $id) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCalendarEventQuery>response.data.getCalendarEvent;
  }
  async ListCalendarEvents(
    filter?: ModelCalendarEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCalendarEventsQuery> {
    const statement = `query ListCalendarEvents($filter: ModelCalendarEventFilterInput, $limit: Int, $nextToken: String) {
        listCalendarEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            start
            end
            title
            actions
            allDay
            resizable
            draggable
            colour
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCalendarEventsQuery>response.data.listCalendarEvents;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateCalendarEventListener(
    filter?: ModelSubscriptionCalendarEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCalendarEvent">>
  > {
    const statement = `subscription OnCreateCalendarEvent($filter: ModelSubscriptionCalendarEventFilterInput) {
        onCreateCalendarEvent(filter: $filter) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateCalendarEvent">
      >
    >;
  }

  OnUpdateCalendarEventListener(
    filter?: ModelSubscriptionCalendarEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCalendarEvent">>
  > {
    const statement = `subscription OnUpdateCalendarEvent($filter: ModelSubscriptionCalendarEventFilterInput) {
        onUpdateCalendarEvent(filter: $filter) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateCalendarEvent">
      >
    >;
  }

  OnDeleteCalendarEventListener(
    filter?: ModelSubscriptionCalendarEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCalendarEvent">>
  > {
    const statement = `subscription OnDeleteCalendarEvent($filter: ModelSubscriptionCalendarEventFilterInput) {
        onDeleteCalendarEvent(filter: $filter) {
          __typename
          id
          start
          end
          title
          actions
          allDay
          resizable
          draggable
          colour
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteCalendarEvent">
      >
    >;
  }

  OnCreateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onCreateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onUpdateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onDeleteRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }
}
