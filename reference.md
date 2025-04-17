# Reference

## Accounts

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getCurrent</a>() -> Flatfile.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the current account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getCurrent();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">updateCurrent</a>({ ...params }) -> Flatfile.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the current account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.updateCurrent({
    defaultAppId: "us_app_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.AccountPatch`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Actions

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">create</a>({ ...params }) -> Flatfile.ApiActionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.create({
    spaceId: "spaceId",
    body: {
        targetId: "targetId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ActionCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">bulkCreate</a>({ ...params }) -> Flatfile.ApiActionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.bulkCreate({
    spaceId: "spaceId",
    body: [
        {
            targetId: "targetId",
        },
        {
            targetId: "targetId",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ActionsBulkCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">getAll</a>({ ...params }) -> Flatfile.ApiActionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.getAll({
    spaceId: "spaceId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">get</a>(actionId) -> Flatfile.ApiActionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.get("actionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionId:** `Flatfile.ActionId` — The id of the action to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">update</a>(actionId, { ...params }) -> Flatfile.ApiActionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.update("actionId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionId:** `Flatfile.ActionId` — The id of the action to patch

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ActionUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">delete</a>(actionId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.delete("actionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionId:** `Flatfile.ActionId` — The id of the action to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AgentExports

<details><summary><code>client.agentExports.<a href="/src/api/resources/agentExports/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListAgentExportsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentExports.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListAgentExportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agentExports.<a href="/src/api/resources/agentExports/client/Client.ts">get</a>(agentExportId) -> Flatfile.GetAgentExportResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentExports.get("us_agx_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentExportId:** `Flatfile.AgentExportId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agentExports.<a href="/src/api/resources/agentExports/client/Client.ts">delete</a>(agentExportId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentExports.delete("us_agx_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentExportId:** `Flatfile.AgentExportId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentExports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListAgentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.list({
    environmentId: "us_env_YOUR_ID",
    pageSize: 20,
    pageNumber: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">create</a>({ ...params }) -> Flatfile.AgentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.create({
    environmentId: "us_env_YOUR_ID",
    body: {
        topics: ["workbook:updated"],
        compiler: "js",
        source: "module.exports = { routeEvent: async (...args) => { console.log(args) } }",
        options: {
            namespace: "space:blue",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">get</a>(agentId, { ...params }) -> Flatfile.AgentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.get("us_ag_YOUR_ID", {
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">listVersions</a>(agentId) -> Flatfile.ListAgentVersionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.listVersions("agentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">revert</a>(agentId, agentVersionId) -> Flatfile.AgentVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.revert("agentId", "agentVersionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId`

</dd>
</dl>

<dl>
<dd>

**agentVersionId:** `Flatfile.AgentVersionId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">listAgentRoles</a>(agentId) -> Flatfile.ListActorRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists roles assigned to an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.listAgentRoles("agentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId` — The agent id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">assignAgentRole</a>(agentId, { ...params }) -> Flatfile.AssignRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns a role to a agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.assignAgentRole("agentId", {
    roleId: "roleId",
    resourceId: "resourceId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId` — The agent id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.AssignActorRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">deleteAgentRole</a>(agentId, actorRoleId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a role from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.deleteAgentRole("agentId", "actorRoleId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId` — The agent id

</dd>
</dl>

<dl>
<dd>

**actorRoleId:** `Flatfile.ActorRoleId` — The actor role id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getAgentLogs</a>(agentId, { ...params }) -> Flatfile.GetAgentLogsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.getAgentLogs("us_ag_YOUR_ID", {
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetAgentLogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getAgentLog</a>(eventId, { ...params }) -> Flatfile.GetDetailedAgentLogResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.getAgentLog("commons.EventId", {
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `Flatfile.EventId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetAgentLogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getEnvironmentAgentLogs</a>({ ...params }) -> Flatfile.GetDetailedAgentLogsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.getEnvironmentAgentLogs({
    environmentId: "us_env_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
    success: true,
    pageSize: 20,
    pageNumber: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetEnvironmentAgentLogsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getEnvironmentAgentExecutions</a>({ ...params }) -> Flatfile.GetExecutionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.getEnvironmentAgentExecutions({
    environmentId: "us_env_YOUR_ID",
    agentId: "us_ag_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
    success: true,
    pageSize: 20,
    pageNumber: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetEnvironmentAgentExecutionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">delete</a>(agentId, { ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single agent

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.delete("us_ag_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `Flatfile.AgentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DeleteAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Apps

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">list</a>() -> Flatfile.AppsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns apps in an account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">get</a>(appId) -> Flatfile.AppResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.get("us_app_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of app

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">update</a>(appId, { ...params }) -> Flatfile.AppResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.update("us_app_YOUR_ID", {
    name: "Nightly Data Loads",
    namespace: "nightly-data",
    entity: "Sync",
    entityPlural: "Syncs",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">\n  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>\n</svg>',
    metadata: {
        foo: "bar",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of app

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.AppPatch`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">create</a>({ ...params }) -> Flatfile.AppResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.create({
    name: "Nightly Data Loads",
    namespace: "nightly-data",
    type: "CUSTOM",
    entity: "Sync",
    entityPlural: "Syncs",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">\n  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>\n</svg>',
    metadata: {
        foo: "bar",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.AppCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">delete</a>(appId) -> Flatfile.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.delete("us_app_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of app to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">getConstraints</a>(appId, { ...params }) -> Flatfile.ConstraintsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns constraints for an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.getConstraints("appId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetConstraintsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">createConstraint</a>(appId, { ...params }) -> Flatfile.ConstraintResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new constraint for an app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.createConstraint("appId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ConstraintCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">getConstraintById</a>(appId, constraintId) -> Flatfile.ConstraintResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specific constraint

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.getConstraintById("appId", "constraintId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**constraintId:** `Flatfile.ConstraintId` — ID of the constraint

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">getConstraintVersions</a>(appId, constraintId) -> Flatfile.ConstraintVersionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the versions of a specific constraint

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.getConstraintVersions("appId", "constraintId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**constraintId:** `Flatfile.ConstraintId` — ID of the constraint

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">getConstraintVersion</a>(appId, constraintId, version) -> Flatfile.ConstraintVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specified version of a specific constraint

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.getConstraintVersion("appId", "constraintId", 1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**constraintId:** `Flatfile.ConstraintId` — ID of the constraint

</dd>
</dl>

<dl>
<dd>

**version:** `number` — Version of the constraint

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">updateConstraint</a>(appId, constraintId, { ...params }) -> Flatfile.ConstraintResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a specific constraint

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.updateConstraint("appId", "constraintId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**constraintId:** `Flatfile.ConstraintId` — ID of the constraint

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ConstraintUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apps.<a href="/src/api/resources/apps/client/Client.ts">deleteConstraint</a>(appId, constraintId) -> Flatfile.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific constraint

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apps.deleteConstraint("appId", "constraintId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `Flatfile.AppId` — ID of the app

</dd>
</dl>

<dl>
<dd>

**constraintId:** `Flatfile.ConstraintId` — ID of the constraint

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Apps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Assistant

<details><summary><code>client.assistant.<a href="/src/api/resources/assistant/client/Client.ts">list</a>({ ...params }) -> Flatfile.PromptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns prompts created by user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistant.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListPromptsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistant.<a href="/src/api/resources/assistant/client/Client.ts">get</a>(promptId) -> Flatfile.PromptResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a prompt

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistant.get("us_pr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**promptId:** `Flatfile.PromptId` — ID of prompts

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistant.<a href="/src/api/resources/assistant/client/Client.ts">update</a>(promptId, { ...params }) -> Flatfile.PromptResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a prompt

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistant.update("us_pr_YOUR_ID", {
    prompt: "Combine first name and last name into a new column called Full Name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**promptId:** `Flatfile.PromptId` — ID of prompts

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.PromptPatch`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistant.<a href="/src/api/resources/assistant/client/Client.ts">create</a>({ ...params }) -> Flatfile.PromptResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a prompt

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistant.create({
    prompt: "Combine first name and last name into a new column called Full Name",
    environmentId: "us_env_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.PromptCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.assistant.<a href="/src/api/resources/assistant/client/Client.ts">delete</a>(promptId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a prompts

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.assistant.delete("us_pr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**promptId:** `Flatfile.PromptId` — ID of prompts

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assistant.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Auth

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">createAccessToken</a>({ ...params }) -> Flatfile.AccessToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange credentials for an access token. Credentials can be a Client ID and Secret or an Email and Password

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.createAccessToken({
    type: "userCredentials",
    email: "yourEmail@example.com",
    password: "yourSuper$ecurePassw0rd",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.Credentials`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getApiKeys</a>({ ...params }) -> Flatfile.ApiKeysResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getApiKeys({
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetApiKeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">createNewApiKey</a>({ ...params }) -> Flatfile.ApiKeysResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.createNewApiKey({
    environmentId: "us_env_YOUR_ID",
    type: "PUBLISHABLE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateNewApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">deleteApiKey</a>({ ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.deleteApiKey({
    environmentId: "us_env_YOUR_ID",
    key: "us_key_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.DeleteApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">refreshToken</a>({ ...params }) -> Flatfile.AccessToken</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.refreshToken("string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">getSftpCredentials</a>({ ...params }) -> Flatfile.SftpCredentials</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.getSftpCredentials({
    spaceId: "spaceId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetSftpCredentialsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">listPersonalAccessTokens</a>() -> Flatfile.PersonalAccessTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all personal access tokens for the authenticated user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.listPersonalAccessTokens();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">createPersonalAccessToken</a>({ ...params }) -> Flatfile.CreatePersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new personal access token for the authenticated user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.createPersonalAccessToken({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreatePersonalAccessTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">deletePersonalAccessToken</a>(accessTokenId, { ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific personal access token by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.deletePersonalAccessToken("accessTokenId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accessTokenId:** `Flatfile.PersonalAccessTokenId` — ID of the personal access token to delete

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DeletePersonalAccessTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CanvasAreas

<details><summary><code>client.canvasAreas.<a href="/src/api/resources/canvasAreas/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListCanvasAreasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of canvas areas filtered by canvas, space, or environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.canvasAreas.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListCanvasAreasRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CanvasAreas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.canvasAreas.<a href="/src/api/resources/canvasAreas/client/Client.ts">create</a>({ ...params }) -> Flatfile.CanvasAreaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new canvas area

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.canvasAreas.create({
    canvasId: "canvasId",
    type: "mapping",
    position: "top",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateCanvasAreaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CanvasAreas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.canvasAreas.<a href="/src/api/resources/canvasAreas/client/Client.ts">get</a>(canvasAreaId) -> Flatfile.CanvasAreaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specific canvas area by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.canvasAreas.get("canvasAreaId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**canvasAreaId:** `Flatfile.CanvasAreaId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CanvasAreas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.canvasAreas.<a href="/src/api/resources/canvasAreas/client/Client.ts">update</a>(canvasAreaId, { ...params }) -> Flatfile.CanvasAreaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing canvas area

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.canvasAreas.update("canvasAreaId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**canvasAreaId:** `Flatfile.CanvasAreaId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateCanvasAreaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CanvasAreas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.canvasAreas.<a href="/src/api/resources/canvasAreas/client/Client.ts">delete</a>(canvasAreaId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific canvas area

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.canvasAreas.delete("canvasAreaId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**canvasAreaId:** `Flatfile.CanvasAreaId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CanvasAreas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Cells

<details><summary><code>client.cells.<a href="/src/api/resources/cells/client/Client.ts">getValues</a>(sheetId, { ...params }) -> Flatfile.CellsResponseDeprecated</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns record cell values grouped by all fields in the sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cells.getValues("us_sh_YOUR_ID", {
    fieldKey: "firstName",
    sortField: "firstName",
    sortDirection: "asc",
    filter: "valid",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetFieldValuesRequestDeprecated`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cells.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Commits

<details><summary><code>client.commits.<a href="/src/api/resources/commits/client/Client.ts">get</a>(commitId) -> Flatfile.CommitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the details of a commit version

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commits.get("us_vr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commitId:** `Flatfile.CommitId` — ID of the commit version to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Commits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commits.<a href="/src/api/resources/commits/client/Client.ts">complete</a>(commitId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Completes a commit version. This marks the commit as complete and acknowledges that the changes have been applied to the sheet.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commits.complete("commitId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commitId:** `Flatfile.CommitId` — ID of the commit version to complete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Commits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.commits.<a href="/src/api/resources/commits/client/Client.ts">replay</a>(commitId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replays a commit:created event.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.commits.replay("commitId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**commitId:** `Flatfile.CommitId` — ID of the commit version to re-emit a commit:created event for

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Commits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DataRetentionPolicies

<details><summary><code>client.dataRetentionPolicies.<a href="/src/api/resources/dataRetentionPolicies/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListDataRetentionPoliciesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all data retention policies on an account matching a filter for environmentId

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataRetentionPolicies.list({
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListDataRetentionPoliciesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataRetentionPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataRetentionPolicies.<a href="/src/api/resources/dataRetentionPolicies/client/Client.ts">create</a>({ ...params }) -> Flatfile.DataRetentionPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new data retention policy to the space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataRetentionPolicies.create({
    type: "lastActivity",
    period: 5,
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.DataRetentionPolicyConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataRetentionPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataRetentionPolicies.<a href="/src/api/resources/dataRetentionPolicies/client/Client.ts">get</a>(id) -> Flatfile.DataRetentionPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single data retention policy

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataRetentionPolicies.get("us_drp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `Flatfile.DataRetentionPolicyId` — ID of data retention policy to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataRetentionPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataRetentionPolicies.<a href="/src/api/resources/dataRetentionPolicies/client/Client.ts">update</a>(id, { ...params }) -> Flatfile.DataRetentionPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a single data retention policy

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataRetentionPolicies.update("us_drp_YOUR_ID", {
    type: "lastActivity",
    period: 5,
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `Flatfile.DataRetentionPolicyId` — ID of data retention policy to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DataRetentionPolicyConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataRetentionPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataRetentionPolicies.<a href="/src/api/resources/dataRetentionPolicies/client/Client.ts">delete</a>(id) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single data retention policy

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataRetentionPolicies.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `Flatfile.DataRetentionPolicyId` — ID of data retention policy to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataRetentionPolicies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Documents

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">list</a>(spaceId) -> Flatfile.ListDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all documents for a space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.list("us_sp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">create</a>(spaceId, { ...params }) -> Flatfile.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new document to the space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.create("us_sp_YOUR_ID", {
    title: "My Document 1",
    body: "My information",
    actions: [
        {
            operation: "submitAction",
            mode: "foreground",
            label: "Submit",
            description: "Submit data to webhook.site",
            primary: true,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DocumentConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">get</a>(spaceId, documentId) -> Flatfile.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single document

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.get("us_sp_YOUR_ID", "us_dc_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**documentId:** `Flatfile.DocumentId` — ID of document to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">update</a>(spaceId, documentId, { ...params }) -> Flatfile.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

updates a single document, for only the body and title

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.update("us_sp_YOUR_ID", "us_dc_YOUR_ID", {
    title: "Updated Title",
    body: "Updated My information",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**documentId:** `Flatfile.DocumentId` — ID of document to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DocumentConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">delete</a>(spaceId, documentId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single document

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.delete("spaceId", "documentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**documentId:** `Flatfile.DocumentId` — ID of document to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entitlements

<details><summary><code>client.entitlements.<a href="/src/api/resources/entitlements/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListEntitlementsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all entitlements matching a filter for resourceId

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entitlements.list({
    resourceId: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListEntitlementsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entitlements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Environments

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListEnvironmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all environments

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListEnvironmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">create</a>({ ...params }) -> Flatfile.EnvironmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.create({
    name: "dev",
    isProd: false,
    guestAuthentication: ["magic_link"],
    metadata: {
        key: "value",
    },
    namespaces: ["default"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.EnvironmentConfigCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">getEnvironmentEventToken</a>({ ...params }) -> Flatfile.EventTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a token which can be used to subscribe to events for this environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.getEnvironmentEventToken({
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetEnvironmentEventTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">get</a>(environmentId) -> Flatfile.EnvironmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.get("us_env_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `string` — ID of the environment to return. To fetch the current environment, pass `current`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">update</a>(environmentId, { ...params }) -> Flatfile.Environment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a single environment, to change the name for example

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.update("us_env_YOUR_ID", {
    name: "dev",
    isProd: false,
    guestAuthentication: ["magic_link"],
    metadata: {
        key: "value",
    },
    namespaces: ["default"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `string` — ID of the environment to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.EnvironmentConfigUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">delete</a>(environmentId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.delete("environmentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `string` — ID of the environment to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">listGuides</a>(environmentId) -> Flatfile.GuideListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns guides in an account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.listGuides("environmentId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">getGuide</a>(environmentId, guideId) -> Flatfile.GuideDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a guide

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.getGuide("us_env_YOUR_ID", "us_gu_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**guideId:** `Flatfile.GuideId` — ID of guide

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">updateGuide</a>(environmentId, guideId, { ...params }) -> Flatfile.GuideDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a guide

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.updateGuide("us_env_YOUR_ID", "us_gu_YOUR_ID", {
    description: "Updated getting started guide",
    title: "Data import made easy",
    slug: "getting-started",
    environmentId: "commons.EnvironmentId",
    metadata: {
        category: "onboarding",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**guideId:** `Flatfile.GuideId` — ID of guide

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GuideUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">createGuide</a>(environmentId, { ...params }) -> Flatfile.GuideDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a guide

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.createGuide("us_env_YOUR_ID", {
    description: "Getting started guide",
    title: "Data import made easy",
    slug: "getting-started",
    environmentId: "commons.EnvironmentId",
    versions: [],
    blocks: [],
    metadata: {
        category: "onboarding",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GuideCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">deleteGuide</a>(environmentId, guideId) -> Flatfile.GuideDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a guide

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.deleteGuide("us_env_YOUR_ID", "us_gu_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**guideId:** `Flatfile.GuideId` — ID of guide to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">getGuideVersion</a>(environmentId, guideId, version) -> Flatfile.GuideVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a specified version of a specific guide

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.getGuideVersion("environmentId", "guideId", 1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**environmentId:** `Flatfile.EnvironmentId` — ID of the environment

</dd>
</dl>

<dl>
<dd>

**guideId:** `Flatfile.GuideId` — ID of the guide

</dd>
</dl>

<dl>
<dd>

**version:** `number` — Version of the guide

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListAllEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Event topics that the Flatfile Platform emits.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">create</a>({ ...params }) -> Flatfile.EventResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.create({
    topic: "workbook:updated",
    payload: {
        recordsAdded: 100,
    },
    domain: "workbook",
    context: {
        accountId: "us_acc_YOUR_ID",
        actorId: "us_key_SOME_KEY",
        environmentId: "us_env_YOUR_ID",
        spaceId: "us_sp_YOUR_ID",
        workbookId: "us_wb_YOUR_ID",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateEventConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">get</a>(eventId) -> Flatfile.EventResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.get("us_evt_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `Flatfile.EventId` — The event id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">ack</a>(eventId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.ack("eventId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `Flatfile.EventId` — The event id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getEventToken</a>({ ...params }) -> Flatfile.EventTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a token which can be used to subscribe to events for this space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.getEventToken();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GetEventTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Files

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListFilesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListFilesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">get</a>(fileId) -> Flatfile.FileResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.get("us_fl_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fileId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">delete</a>(fileId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.delete("fileId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fileId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">update</a>(fileId, { ...params }) -> Flatfile.FileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a file, to change the workbook id for example

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.update("us_fl_YOUR_ID", {
    name: "NewFileName",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fileId:** `string` — ID of file to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateFileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Foreigndb

<details><summary><code>client.foreigndb.<a href="/src/api/resources/foreigndb/client/Client.ts">restore</a>(workbookId, { ...params }) -> Flatfile.RestoreDatabaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Restore a database from a backup

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.foreigndb.restore("workbookId", {
    fileId: "fileId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `string` — the workbook id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.RestoreDatabaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Foreigndb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.foreigndb.<a href="/src/api/resources/foreigndb/client/Client.ts">getDatabaseUser</a>(workbookId) -> Flatfile.GetDatabaseUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get database user credentials

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.foreigndb.getDatabaseUser("workbookId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `string` — the workbook id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Foreigndb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.foreigndb.<a href="/src/api/resources/foreigndb/client/Client.ts">getDatabaseInfo</a>(workbookId) -> Flatfile.GetDatabaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the database information

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.foreigndb.getDatabaseInfo("workbookId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `string` — the workbook id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Foreigndb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.foreigndb.<a href="/src/api/resources/foreigndb/client/Client.ts">deleteDatabase</a>(workbookId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.foreigndb.deleteDatabase("workbookId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `string` — the workbook id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Foreigndb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.foreigndb.<a href="/src/api/resources/foreigndb/client/Client.ts">upload</a>(workbookId, { ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Persist a file in s3 object storage

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.foreigndb.upload("workbookId", {
    fileId: "fileId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `string` — the workbook id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UploadToObjectStorageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Foreigndb.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Guests

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListGuestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all guests

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.list({
    spaceId: "us_sp_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListGuestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">create</a>({ ...params }) -> Flatfile.CreateGuestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guests are only there to upload, edit, and download files and perform their tasks in a specific Space.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.create([
    {
        environmentId: "us_env_YOUR_ID",
        email: "email@example.com",
        name: "Your Name",
        spaces: [
            {
                id: "us_sp_YOUR_ID",
                workbooks: [
                    {
                        id: "us_wb_YOUR_ID",
                    },
                ],
                sheets: [
                    {
                        id: "us_sh_YOUR_ID",
                    },
                ],
                lastAccessed: "2023-10-30T16:59:45.735Z",
            },
        ],
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.GuestConfig[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">get</a>(guestId) -> Flatfile.GuestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single guest

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.get("us_g_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — ID of guest to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">delete</a>(guestId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single guest

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.delete("us_g_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — ID of guest to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">update</a>(guestId, { ...params }) -> Flatfile.GuestResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a single guest, for example to change name or email

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.update("us_g_YOUR_ID", {
    email: "updated@example.com",
    name: "Your Name Updated",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — ID of guest to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GuestConfigUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">getGuestToken</a>(guestId, { ...params }) -> Flatfile.GuestTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single guest token

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.getGuestToken("us_g_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — ID of guest to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetGuestTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">listGuestRoles</a>(guestId) -> Flatfile.ListActorRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists roles assigned to a guest.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.listGuestRoles("guestId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — The guest id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">assignGuestRole</a>(guestId, { ...params }) -> Flatfile.AssignRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns a role to a guest.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.assignGuestRole("guestId", {
    roleId: "roleId",
    resourceId: "resourceId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — The guest id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.AssignActorRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">deleteGuestRole</a>(guestId, actorRoleId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a role from a guest.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.deleteGuestRole("guestId", "actorRoleId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**guestId:** `Flatfile.GuestId` — The guest id

</dd>
</dl>

<dl>
<dd>

**actorRoleId:** `Flatfile.ActorRoleId` — The actor role id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.guests.<a href="/src/api/resources/guests/client/Client.ts">invite</a>({ ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Guests can be created as a named guest on the Space or there’s a global link that will let anonymous guests into the space.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.guests.invite([
    {
        guestId: "us_g_YOUR_ID",
        spaceId: "us_sp_YOUR_ID",
        fromName: "Your Name",
        message: "Hello, I would like to invite you to my space.",
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.Invite[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Guests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListJobsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.list({
    environmentId: "us_env_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListJobsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">create</a>({ ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.create({
    type: "workbook",
    operation: "submitAction",
    source: "us_wb_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.JobConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(jobId) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.get("us_jb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — The id of the job to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">update</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.update("us_jb_YOUR_ID", {
    config: {},
    status: "complete",
    progress: 100,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — The id of the job to patch

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">delete</a>(jobId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.delete("us_jb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — The id of the job to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">execute</a>(jobId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.execute("us_jb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">getExecutionPlan</a>(jobId) -> Flatfile.JobPlanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single job's execution plan

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.getExecutionPlan("us_jb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">updateExecutionPlan</a>(jobId, { ...params }) -> Flatfile.JobPlanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a job's entire execution plan

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.updateExecutionPlan("us_jb_YOUR_ID", {
    fieldMapping: [
        {
            sourceField: {
                type: "string",
                key: "firstName",
            },
            destinationField: {
                type: "string",
                key: "firstName",
                label: "First Name",
            },
        },
        {
            sourceField: {
                type: "string",
                key: "lastName",
            },
            destinationField: {
                type: "string",
                key: "lastName",
                label: "Last Name",
            },
        },
    ],
    unmappedSourceFields: [
        {
            sourceField: {
                type: "string",
                key: "email",
            },
        },
    ],
    unmappedDestinationFields: [
        {
            destinationField: {
                type: "string",
                key: "email",
                label: "Email",
            },
        },
    ],
    fileId: "us_fl_YOUR_ID",
    jobId: "us_jb_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobExecutionPlanRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">updateExecutionPlanFields</a>(jobId, { ...params }) -> Flatfile.JobPlanResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update one or more individual fields on a job's execution plan

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.updateExecutionPlanFields("jobId", {
    fileId: "fileId",
    jobId: "jobId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobExecutionPlanConfigRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">ack</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Acknowledge a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.ack("us_jb_YOUR_ID", {
    info: "Acknowledged by user",
    progress: 100,
    estimatedCompletionAt: "2023-10-30T20:04:32.074Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobAckDetails`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">ackOutcome</a>(jobId) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Acknowledge a job outcome and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.ackOutcome("us_jb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">complete</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Complete a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.complete("us_jb_YOUR_ID", {
    outcome: {
        acknowledge: true,
        buttonText: "Acknowledge",
        next: {
            type: "id",
            id: "us_jb_YOUR_ID",
        },
        heading: "Success",
        message: "Job was successful",
    },
    info: "Job is Complete",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobCompleteDetails`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">fail</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fail a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.fail("us_jb_YOUR_ID", {
    outcome: {
        acknowledge: true,
        buttonText: "Acknowledge",
        next: {
            type: "id",
            id: "us_jb_YOUR_ID",
        },
        heading: "Failed",
        message: "Job failed",
    },
    info: "Job was failed",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobCompleteDetails`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">cancel</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.cancel("us_jb_YOUR_ID", {
    info: "Job was canceled",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobCancelDetails`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">retry</a>(jobId) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retry a failt job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.retry("jobId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">previewMutation</a>({ ...params }) -> Flatfile.DiffRecordsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview the results of a mutation

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.previewMutation({
    sheetId: "sheetId",
    mutateRecord: "mutateRecord",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.MutateJobConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">split</a>(jobId, { ...params }) -> Flatfile.JobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Split a job and return the job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.split("us_jb_YOUR_ID", {
    parts: [{}],
    runInParallel: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `Flatfile.JobId` — ID of job to return

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.JobSplitDetails`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Mapping

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">createMappingProgram</a>({ ...params }) -> Flatfile.ProgramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a list of mapping rules based on two provided schemas

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.createMappingProgram({
    body: {
        source: {
            name: "name",
            fields: [
                {
                    type: "string",
                },
                {
                    type: "string",
                },
            ],
        },
        destination: {
            name: "name",
            fields: [
                {
                    type: "string",
                },
                {
                    type: "string",
                },
            ],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateMappingProgram`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">deleteAllHistoryForUser</a>({ ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes all history for the authenticated user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.deleteAllHistoryForUser();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.DeleteAllHistoryForUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">listMappingPrograms</a>({ ...params }) -> Flatfile.ProgramsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all mapping programs

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.listMappingPrograms();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListProgramsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">getMappingProgram</a>(programId) -> Flatfile.ProgramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a mapping program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.getMappingProgram("programId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">updateMappingProgram</a>(programId, { ...params }) -> Flatfile.ProgramResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a mapping program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.updateMappingProgram("programId", {
    source: {
        name: "name",
        fields: [
            {
                type: "string",
            },
            {
                type: "string",
            },
        ],
    },
    destination: {
        name: "name",
        fields: [
            {
                type: "string",
            },
            {
                type: "string",
            },
        ],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ProgramConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">deleteMappingProgram</a>(programId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a mapping program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.deleteMappingProgram("programId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">createRules</a>(programId, { ...params }) -> Flatfile.MappingRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add mapping rules to a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.createRules("programId", [
    {
        name: "name",
        type: "type",
    },
    {
        name: "name",
        type: "type",
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.CreateMappingRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">deleteMultipleRules</a>(programId, { ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes multiple mapping rules from a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.deleteMultipleRules("programId", {
    ruleIds: ["ruleIds", "ruleIds"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DeleteMultipleRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">listRules</a>(programId) -> Flatfile.MappingRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all mapping rules in a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.listRules("us_mp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">getRule</a>(programId, mappingId) -> Flatfile.MappingRuleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a mapping rule from a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.getRule("us_mp_YOUR_ID", "us_mr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**mappingId:** `Flatfile.MappingId` — ID of mapping rule

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">updateRule</a>(programId, mappingId, { ...params }) -> Flatfile.MappingRuleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a mapping rule in a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.updateRule("us_mp_YOUR_ID", "us_mr_YOUR_ID", {
    name: "Assign mapping rule",
    type: "assign",
    config: {},
    metadata: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**mappingId:** `Flatfile.MappingId` — ID of mapping rule

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.MappingRuleConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">updateRules</a>(programId, { ...params }) -> Flatfile.MappingRulesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a list of mapping rules in a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.updateRules("programId", [
    {
        id: "id",
        createdAt: "2024-01-15T09:30:00Z",
        updatedAt: "2024-01-15T09:30:00Z",
    },
    {
        id: "id",
        createdAt: "2024-01-15T09:30:00Z",
        updatedAt: "2024-01-15T09:30:00Z",
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateMappingRulesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mapping.<a href="/src/api/resources/mapping/client/Client.ts">deleteRule</a>(programId, mappingId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a mapping rule from a program

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mapping.deleteRule("us_mp_YOUR_ID", "us_mr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**programId:** `Flatfile.ProgramId` — ID of the program

</dd>
</dl>

<dl>
<dd>

**mappingId:** `Flatfile.MappingId` — ID of mapping rule

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Records

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">get</a>(sheetId, { ...params }) -> Flatfile.GetRecordsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns records from a sheet in a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.get("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetRecordsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">indices</a>(sheetId, { ...params }) -> Flatfile.GetRecordIndicesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns indices of records from a sheet in a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.indices("us_sh_YOUR_ID", {
    ids: "list<$commons.RecordId.Example0, $commons.RecordId.Example1>",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetRecordIndicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">update</a>(sheetId, { ...params }) -> Flatfile.VersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates existing records in a workbook sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.update("us_sh_YOUR_ID", [
    {
        id: "us_rc_YOUR_ID",
        versionId: "us_vr_YOUR_ID",
        commitId: "us_vr_YOUR_ID",
        values: {
            firstName: {
                value: "John",
                messages: [],
                valid: true,
            },
            lastName: {
                value: "Smith",
                messages: [],
                valid: true,
            },
            email: {
                value: "john.smith@example.com",
                messages: [],
                valid: true,
            },
        },
        valid: true,
        metadata: {},
        config: {},
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.Records`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">insert</a>(sheetId, { ...params }) -> Flatfile.RecordsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds records to a workbook sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.insert("us_sh_YOUR_ID", [
    {
        firstName: {
            value: "John",
            messages: [],
            valid: true,
        },
        lastName: {
            value: "Smith",
            messages: [],
            valid: true,
        },
        email: {
            value: "john.smith@example.com",
            messages: [],
            valid: true,
        },
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.RecordData[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">delete</a>(sheetId, { ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes records from a workbook sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.delete("us_sh_YOUR_ID", {
    ids: "us_rc_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DeleteRecordsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.records.<a href="/src/api/resources/records/client/Client.ts">findAndReplace</a>(sheetId, { ...params }) -> Flatfile.VersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for all values that match the 'find' value (globally or for a specific field via 'fieldKey') and replaces them with the 'replace' value. Wrap 'find' value in double quotes for exact match (""). Returns a commitId for the updated records

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.records.findAndReplace("us_sh_YOUR_ID", {
    fieldKey: "email",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.FindAndReplaceRecordRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Records.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Roles

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">list</a>() -> Flatfile.ListRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all roles for an account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Routines

<details><summary><code>client.routines.<a href="/src/api/resources/routines/client/Client.ts">list</a>({ ...params }) -> Flatfile.RoutinesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of routines

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.routines.list({
    runbookId: "us_rb_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListRoutinesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Routines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.routines.<a href="/src/api/resources/routines/client/Client.ts">get</a>(routineId) -> Flatfile.RoutineResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a routine

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.routines.get("us_rtn_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**routineId:** `Flatfile.RoutineId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Routines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.routines.<a href="/src/api/resources/routines/client/Client.ts">create</a>({ ...params }) -> Flatfile.RoutineResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new routine

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.routines.create({
    runbookId: "us_rb_YOUR_ID",
    name: "Split Address to Street, City, State, Zip",
    config: {
        sourceSheetId: "us_sh_YOUR_ID",
        destinationSheetId: "us_sh_YOUR_ID",
        programId: "us_mp_YOUR_ID",
    },
    ordinal: 1,
    type: "JOB",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateRoutineRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Routines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.routines.<a href="/src/api/resources/routines/client/Client.ts">update</a>(routineId, { ...params }) -> Flatfile.RoutineResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a routine

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.routines.update("us_rtn_YOUR_ID", {
    name: "Split Address to Street, City, State, Zip",
    config: {
        sourceSheetId: "us_sh_YOUR_ID",
        destinationSheetId: "us_sh_YOUR_ID",
        programId: "us_mp_YOUR_ID",
    },
    ordinal: 1,
    type: "JOB",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**routineId:** `Flatfile.RoutineId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateRoutineRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Routines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.routines.<a href="/src/api/resources/routines/client/Client.ts">delete</a>(routineId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a routine

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.routines.delete("us_rtn_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**routineId:** `Flatfile.RoutineId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Routines.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Runbooks

<details><summary><code>client.runbooks.<a href="/src/api/resources/runbooks/client/Client.ts">list</a>({ ...params }) -> Flatfile.RunbooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of runbooks

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runbooks.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListRunbooksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runbooks.<a href="/src/api/resources/runbooks/client/Client.ts">get</a>(runbookId) -> Flatfile.RunbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a runbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runbooks.get("us_rb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runbookId:** `Flatfile.RunbookId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runbooks.<a href="/src/api/resources/runbooks/client/Client.ts">create</a>({ ...params }) -> Flatfile.RunbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new runbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runbooks.create({
    accountId: "us_acc_YOUR_ID",
    appId: "us_app_YOUR_ID",
    environmentId: "us_env_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
    name: "Runbook For Vendor X",
    config: {
        sourceSheetIds: ["us_sh_YOUR_ID"],
        destinationSheetIds: ["us_sh_YOUR_ID"],
    },
    status: "CREATED",
    type: "PREPROCESSING",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateRunbookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runbooks.<a href="/src/api/resources/runbooks/client/Client.ts">update</a>(runbookId, { ...params }) -> Flatfile.RunbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a runbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runbooks.update("us_rb_YOUR_ID", {
    name: "Runbook For Vendor X",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runbookId:** `Flatfile.RunbookId`

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateRunbookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runbooks.<a href="/src/api/resources/runbooks/client/Client.ts">delete</a>(runbookId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a runbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runbooks.delete("us_rb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runbookId:** `Flatfile.RunbookId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Secrets

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">list</a>({ ...params }) -> Flatfile.SecretsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch all secrets for a given environmentId and optionally apply space overrides

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secrets.list({
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListSecrets`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">upsert</a>({ ...params }) -> Flatfile.SecretsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Insert or Update a Secret by name for environment or space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secrets.upsert({
    name: "My Secret",
    value: "Sup3r$ecret\\/alue!",
    environmentId: "us_env_YOUR_ID",
    spaceId: "us_sp_YOUR_ID",
    actorId: "us_usr_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.WriteSecret`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">delete</a>(secretId) -> Flatfile.SecretsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific Secret from the Environment or Space as is the case

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secrets.delete("us_sec_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**secretId:** `Flatfile.SecretId` — The ID of the secret.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sheets

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListSheetsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns sheets in a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.list({
    workbookId: "us_wb_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListSheetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">get</a>(sheetId) -> Flatfile.SheetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a sheet in a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.get("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">delete</a>(sheetId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a specific sheet from a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.delete("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">duplicateSheet</a>(sheetId, { ...params }) -> Flatfile.SheetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a copy of a sheet including all its data within the same workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.duplicateSheet("us_sh_YOUR_ID", {
    name: "Copy of Contacts",
    slug: "contacts-copy",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet to duplicate

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.DuplicateSheetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">validate</a>(sheetId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger data hooks and validation to run on a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.validate("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">getRecordCounts</a>(sheetId, { ...params }) -> Flatfile.RecordCountsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns counts of records from a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.getRecordCounts("us_sh_YOUR_ID", {
    versionId: "us_vr_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetRecordCountsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">getCalculations</a>(sheetId, { ...params }) -> Flatfile.ListCalculationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all calculations for a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.getCalculations("sheetId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetCalculationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">addField</a>(sheetId, { ...params }) -> Flatfile.FieldConfigResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a new field to a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.addField("sheetId", {
    body: {
        type: "string",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.CreateFieldRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">removeField</a>(sheetId, fieldKey) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes field from a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.removeField("sheetId", "fieldKey");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**fieldKey:** `string` — Unique field key

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">getSheetCommits</a>(sheetId, { ...params }) -> Flatfile.ListCommitsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the commit versions for a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.getSheetCommits("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ListSheetCommitsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">lockSheet</a>(sheetId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Locks a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.lockSheet("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">unlockSheet</a>(sheetId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a lock from a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.unlockSheet("us_sh_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">getCellValues</a>(sheetId, { ...params }) -> Flatfile.CellsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns record cell values grouped by all fields in the sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.getCellValues("us_sh_YOUR_ID", {
    distinct: true,
    fieldKey: "firstName",
    sortField: "firstName",
    sortDirection: "asc",
    filter: "valid",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetFieldValuesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sheets.<a href="/src/api/resources/sheets/client/Client.ts">updateSheet</a>(sheetId, { ...params }) -> Flatfile.SheetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates Sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sheets.updateSheet("us_sh_YOUR_ID", {
    name: "New Sheet Name",
    metadata: {
        rowHeaders: [6],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sheetId:** `Flatfile.SheetId` — ID of sheet

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.SheetUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Snapshots

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">createSnapshot</a>({ ...params }) -> Flatfile.SnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a snapshot of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.createSnapshot({
    sheetId: "us_sh_YOUR_ID",
    label: "My snapshot",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">listSnapshots</a>({ ...params }) -> Flatfile.SnapshotsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all snapshots of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.listSnapshots({
    sheetId: "us_sh_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">getSnapshot</a>(snapshotId, { ...params }) -> Flatfile.SnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a snapshot of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.getSnapshot("us_ss_YOUR_ID", {
    includeSummary: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**snapshotId:** `Flatfile.SnapshotId` — ID of snapshot

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetSnapshotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">deleteSnapshot</a>(snapshotId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a snapshot of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.deleteSnapshot("us_ss_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**snapshotId:** `Flatfile.SnapshotId` — ID of snapshot

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">restoreSnapshot</a>(snapshotId, { ...params }) -> Flatfile.SnapshotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Restores a snapshot of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.restoreSnapshot("us_ss_YOUR_ID", {
    created: true,
    updated: true,
    deleted: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**snapshotId:** `Flatfile.SnapshotId` — ID of snapshot

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.RestoreOptions`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapshots.<a href="/src/api/resources/snapshots/client/Client.ts">getSnapshotRecords</a>(snapshotId, { ...params }) -> Flatfile.DiffRecordsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets records from a snapshot of a sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapshots.getSnapshotRecords("us_ss_YOUR_ID", {
    pageSize: 10,
    pageNumber: 1,
    changeType: "createdSince",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**snapshotId:** `Flatfile.SnapshotId` — ID of snapshot

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetSnapshotRecordsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Snapshots.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Spaces

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListSpacesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all spaces for an account or environment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.list({
    environmentId: "us_env_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListSpacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">create</a>({ ...params }) -> Flatfile.SpaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new space based on an existing Space Config

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.create({
    name: "My First Workbook",
    displayOrder: 1,
    environmentId: "us_env_YOUR_ID",
    primaryWorkbookId: "us_wb_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.SpaceConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">get</a>(spaceId) -> Flatfile.SpaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.get("us_sp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">delete</a>(spaceId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.delete("us_sp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">bulkDelete</a>({ ...params }) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete multiple spaces by id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.bulkDelete({
    spaceIds: "us_sp_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.DeleteSpacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">update</a>(spaceId, { ...params }) -> Flatfile.SpaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a space, to change the name for example

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.update("us_sp_YOUR_ID", {
    name: "My Updated Worbook",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.SpaceConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">archiveSpace</a>(spaceId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets archivedAt timestamp on a space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.archiveSpace("us_sp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to archive

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">unarchiveSpace</a>(spaceId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets archivedAt timestamp on a space to null

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.unarchiveSpace("us_sp_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to unarchive

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">upgrade</a>(spaceId, { ...params }) -> Flatfile.SpaceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.upgrade("spaceId", {
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of space to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpgradeSpaceConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">createGuidance</a>(spaceId, { ...params }) -> Flatfile.GuidanceResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new guidance

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.createGuidance("spaceId", {
    guideSlug: "guideSlug",
    options: {
        target: "target",
        trigger: "first",
        type: "sidebar",
        role: "admin",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of the space

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GuidanceApiCreateData`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">listGuidance</a>(spaceId, { ...params }) -> Flatfile.GuidanceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists guidances

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.listGuidance("spaceId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of the space

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ListGuidanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">getGuidance</a>(spaceId, guidanceId, { ...params }) -> Flatfile.GuidanceResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a guidance by its id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.getGuidance("spaceId", "guidanceId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of the space

</dd>
</dl>

<dl>
<dd>

**guidanceId:** `Flatfile.GuidanceId` — ID of the guidance

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GetGuidanceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">updateGuidance</a>(spaceId, guidanceId, { ...params }) -> Flatfile.GuidanceResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a guidance with the given id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.updateGuidance("spaceId", "guidanceId", {
    options: {
        target: "target",
        trigger: "first",
        type: "sidebar",
        role: "admin",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of the space

</dd>
</dl>

<dl>
<dd>

**guidanceId:** `Flatfile.GuidanceId` — ID of the guidance

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.GuidanceApiUpdateData`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.spaces.<a href="/src/api/resources/spaces/client/Client.ts">deleteGuidance</a>(spaceId, guidanceId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a guidance by its id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.spaces.deleteGuidance("spaceId", "guidanceId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**spaceId:** `Flatfile.SpaceId` — ID of the space

</dd>
</dl>

<dl>
<dd>

**guidanceId:** `Flatfile.GuidanceId` — ID of the guidance

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Spaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of users

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.list({
    email: "john.smith@example.com",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListUsersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createAndInvite</a>({ ...params }) -> Flatfile.UserWithRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates and invites a new user to your account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.createAndInvite({
    email: "john.smith@example.com",
    name: "John Smith",
    actorRoles: [
        {
            roleId: "us_rol_YOUR_ID",
            resourceId: "us_acc_YOUR_ID",
        },
        {
            roleId: "us_rol_YOUR_ID",
            resourceId: "us_env_YOUR_ID",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.UserCreateAndInviteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">resendInvite</a>(userId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resends an invite to a user for your account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.resendInvite("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">update</a>(userId, { ...params }) -> Flatfile.UserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.update("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.UpdateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(userId) -> Flatfile.UserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("us_usr_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(userId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.delete("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUserRoles</a>(userId) -> Flatfile.ListActorRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists roles assigned to a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUserRoles("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">assignUserRole</a>(userId, { ...params }) -> Flatfile.AssignRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns a role to a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.assignUserRole("userId", {
    roleId: "roleId",
    resourceId: "resourceId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.AssignActorRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteUserRole</a>(userId, actorRoleId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a role from a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteUserRole("userId", "actorRoleId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**actorRoleId:** `Flatfile.ActorRoleId` — The actor role id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listApiTokens</a>(userId, { ...params }) -> Flatfile.ListApiTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all the api tokens for a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listApiTokens("userId", {
    tenantId: "tenantId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ListApiTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createApiToken</a>(userId, { ...params }) -> Flatfile.ApiTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an api token for authenticating against Flatfile APIs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.createApiToken("userId", {
    tenantId: "tenantId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `Flatfile.UserId` — The user id

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.CreateApiTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">exchangeToken</a>({ ...params }) -> Flatfile.ExchangeTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange an invitation for an access token

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.exchangeToken();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ExchangeTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Versions

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">createId</a>({ ...params }) -> Flatfile.VersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.createId({
    sheetId: "us_sh_YOUR_ID",
    parentVersionId: "us_vr_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.VersionsPostRequestBody`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Versions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Views

<details><summary><code>client.views.<a href="/src/api/resources/views/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListViewsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all views for the sheet

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.views.list({
    sheetId: "us_sh_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListViewsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Views.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.views.<a href="/src/api/resources/views/client/Client.ts">create</a>({ ...params }) -> Flatfile.ViewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new view to the space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.views.create({
    sheetId: "us_sh_YOUR_ID",
    name: "My View",
    config: {
        filter: "error",
        filterField: "email",
        q: "firstname like %John%",
        sortField: "email",
        sortDirection: "asc",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ViewCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Views.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.views.<a href="/src/api/resources/views/client/Client.ts">get</a>(viewId) -> Flatfile.ViewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single view

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.views.get("us_vi_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**viewId:** `Flatfile.ViewId` — ID of view to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Views.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.views.<a href="/src/api/resources/views/client/Client.ts">update</a>(viewId, { ...params }) -> Flatfile.ViewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a single view

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.views.update("us_vi_YOUR_ID", {
    name: "My View",
    config: {
        filter: "error",
        filterField: "email",
        q: "firstname like %John%",
        sortField: "email",
        sortDirection: "asc",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**viewId:** `Flatfile.ViewId` — ID of view to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ViewUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Views.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.views.<a href="/src/api/resources/views/client/Client.ts">delete</a>(viewId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single view

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.views.delete("us_vi_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**viewId:** `Flatfile.ViewId` — ID of view to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Views.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Workbooks

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">list</a>({ ...params }) -> Flatfile.ListWorkbooksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all workbooks matching a filter for an account or space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.list({
    spaceId: "us_sp_YOUR_ID",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.ListWorkbooksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">create</a>({ ...params }) -> Flatfile.WorkbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a workbook and adds it to a space

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.create({
    name: "My First Workbook",
    sheets: [
        {
            name: "Contacts",
            slug: "contacts",
            fields: [
                {
                    type: "string",
                    key: "firstName",
                    label: "First Name",
                },
                {
                    type: "string",
                    key: "lastName",
                    label: "Last Name",
                },
                {
                    type: "string",
                    key: "email",
                    label: "Email",
                },
            ],
            mappingConfidenceThreshold: 0.5,
        },
    ],
    labels: ["simple-demo"],
    actions: [
        {
            operation: "submitAction",
            mode: "foreground",
            label: "Submit",
            description: "Submit data to webhook.site",
            primary: true,
        },
    ],
    settings: {
        trackChanges: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flatfile.CreateWorkbookConfig`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">get</a>(workbookId) -> Flatfile.WorkbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.get("us_wb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `Flatfile.WorkbookId` — ID of workbook to return

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">delete</a>(workbookId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a workbook and all of its record data permanently

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.delete("us_wb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `Flatfile.WorkbookId` — ID of workbook to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">update</a>(workbookId, { ...params }) -> Flatfile.WorkbookResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a workbook
<Note>
Adding a sheet to a workbook does not require the config object to be provided, however updating an existing sheet does.
</Note>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.update("us_wb_YOUR_ID", {
    name: "My Updated Workbook",
    labels: ["my-new-label"],
    actions: [
        {
            operation: "submitAction",
            mode: "foreground",
            label: "Submit Changes",
            description: "Submit data to webhook.site",
            primary: true,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `Flatfile.WorkbookId` — ID of workbook to update

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.WorkbookUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">getWorkbookCommits</a>(workbookId, { ...params }) -> Flatfile.ListCommitsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the commits for a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.getWorkbookCommits("us_wb_YOUR_ID");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `Flatfile.WorkbookId` — ID of workbook

</dd>
</dl>

<dl>
<dd>

**request:** `Flatfile.ListWorkbookCommitsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workbooks.<a href="/src/api/resources/workbooks/client/Client.ts">rebuildWorkbook</a>(workbookId) -> Flatfile.Success</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rebuild a workbook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workbooks.rebuildWorkbook("workbookId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workbookId:** `Flatfile.WorkbookId` — ID of workbook to rebuild

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workbooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
