# API-Methoden

Alle registrierten öffentlichen v1-Endpunkte. Die Methodennamen sind in PHP und TypeScript identisch; Go verwendet den gleichen Namen mit großem Anfangsbuchstaben.

Antworten bleiben vollständig erhalten. Schema- und Laufzeitvalidierung des Servers haben Vorrang vor statisch ableitbaren Typen.

## account

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `account.get` | GET | `/account` | account:read |
| `account.update` | PATCH | `/account` | account:update |
## announcements

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `announcements.list` | GET | `/announcements` | announcements:read |
| `announcements.get` | GET | `/announcements/{announcement}` | announcements:read |
## billing

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `billing.invoicesIndex` | GET | `/billing/invoices` | billing:read |
| `billing.invoicesShow` | GET | `/billing/invoices/{invoice}` | billing:read |
| `billing.usage` | GET | `/billing/usage` | billing:read |
## ddos

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `ddos.alertsIndex` | GET | `/ddos/alerts` | ddos_protection:read |
| `ddos.alertsShow` | GET | `/ddos/alerts/{alert}` | ddos_protection:read |
| `ddos.alertsFlows` | GET | `/ddos/alerts/{alert}/flows` | ddos_protection:read |
## media

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `media.egg` | GET | `/media/eggs/{egg}/{kind}` | öffentlich |
| `media.os` | GET | `/media/os/{os}/{kind}` | öffentlich |
## asn

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `asn.list` | GET | `/products/asn` | asn:read |
| `asn.create` | POST | `/products/asn/order` | asn:create |
| `asn.pricing` | GET | `/products/asn/pricing` | asn:read |
| `asn.get` | GET | `/products/asn/{asn}` | asn:read |
| `asn.cancel` | POST | `/products/asn/{asn}/cancel` | asn:delete |
## containerRegistry

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `containerRegistry.list` | GET | `/products/container-registry` | container-registry:read |
| `containerRegistry.create` | POST | `/products/container-registry/create` | container-registry:create |
| `containerRegistry.get` | GET | `/products/container-registry/{registry}` | container-registry:read |
| `containerRegistry.artifacts` | GET | `/products/container-registry/{registry}/artifacts` | container-registry:read |
| `containerRegistry.delete` | POST | `/products/container-registry/{registry}/delete` | container-registry:delete |
| `containerRegistry.repositories` | GET | `/products/container-registry/{registry}/repositories` | container-registry:read |
| `containerRegistry.retention` | POST | `/products/container-registry/{registry}/retention` | container-registry:update |
| `containerRegistry.robotsIndex` | GET | `/products/container-registry/{registry}/robots` | container-registry:read |
| `containerRegistry.robotsCreate` | POST | `/products/container-registry/{registry}/robots` | container-registry:create |
| `containerRegistry.robotsDelete` | DELETE | `/products/container-registry/{registry}/robots/{robot}` | container-registry:delete |
| `containerRegistry.scan` | POST | `/products/container-registry/{registry}/scan` | container-registry:update |
| `containerRegistry.webhooksIndex` | GET | `/products/container-registry/{registry}/webhooks` | container-registry:read |
| `containerRegistry.webhooksCreate` | POST | `/products/container-registry/{registry}/webhooks` | container-registry:update |
| `containerRegistry.webhooksDelete` | DELETE | `/products/container-registry/{registry}/webhooks/{webhookId}` | container-registry:delete |
## dedicated

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `dedicated.locations` | GET | `/products/dedicated/locations` | dedicated:read |
| `dedicated.plans` | GET | `/products/dedicated/plans` | dedicated:read |
| `dedicated.plansShow` | GET | `/products/dedicated/plans/{plan}` | dedicated:read |
| `dedicated.serversIndex` | GET | `/products/dedicated/servers` | dedicated:read |
| `dedicated.serversStore` | POST | `/products/dedicated/servers` | dedicated:create |
| `dedicated.serversDestroy` | DELETE | `/products/dedicated/servers/{server}` | dedicated:delete |
| `dedicated.serversShow` | GET | `/products/dedicated/servers/{server}` | dedicated:read |
| `dedicated.agentCommand` | POST | `/products/dedicated/servers/{server}/agent/command` | dedicated:update |
| `dedicated.agentInstall` | GET | `/products/dedicated/servers/{server}/agent/install` | dedicated:read |
| `dedicated.agentResult` | GET | `/products/dedicated/servers/{server}/agent/result/{task}` | dedicated:read |
| `dedicated.autoRenew` | POST | `/products/dedicated/servers/{server}/auto-renew` | dedicated:update |
| `dedicated.consoleShow` | GET | `/products/dedicated/servers/{server}/console` | dedicated:update |
| `dedicated.ipsRemove` | DELETE | `/products/dedicated/servers/{server}/ips` | dedicated:update |
| `dedicated.ipsAssign` | POST | `/products/dedicated/servers/{server}/ips` | dedicated:update |
| `dedicated.ipsAssignable` | GET | `/products/dedicated/servers/{server}/ips/assignable` | dedicated:read |
| `dedicated.networkShow` | GET | `/products/dedicated/servers/{server}/network` | dedicated:read |
| `dedicated.reinstallTemplates` | GET | `/products/dedicated/servers/{server}/os-templates` | dedicated:read |
| `dedicated.powerStatus` | GET | `/products/dedicated/servers/{server}/power` | dedicated:read |
| `dedicated.powerAction` | POST | `/products/dedicated/servers/{server}/power/{action}` | dedicated:power |
| `dedicated.rdnsDestroy` | DELETE | `/products/dedicated/servers/{server}/rdns` | dedicated:update |
| `dedicated.rdnsShow` | GET | `/products/dedicated/servers/{server}/rdns` | dedicated:read |
| `dedicated.rdnsStore` | POST | `/products/dedicated/servers/{server}/rdns` | dedicated:update |
| `dedicated.reinstallStart` | POST | `/products/dedicated/servers/{server}/reinstall` | dedicated:update |
| `dedicated.reinstallAbort` | POST | `/products/dedicated/servers/{server}/reinstall/abort` | dedicated:update |
| `dedicated.serversRename` | PATCH | `/products/dedicated/servers/{server}/rename` | dedicated:update |
| `dedicated.sshKeysIndex` | GET | `/products/dedicated/servers/{server}/ssh-keys` | dedicated:read |
| `dedicated.sshKeysStore` | POST | `/products/dedicated/servers/{server}/ssh-keys` | dedicated:update |
| `dedicated.sshKeysDestroy` | DELETE | `/products/dedicated/servers/{server}/ssh-keys/{key}` | dedicated:update |
| `dedicated.statsShow` | GET | `/products/dedicated/servers/{server}/stats` | dedicated:read |
| `dedicated.tasksIndex` | GET | `/products/dedicated/servers/{server}/tasks` | dedicated:read |
| `dedicated.tasksStore` | POST | `/products/dedicated/servers/{server}/tasks` | dedicated:update |
| `dedicated.tasksDestroy` | DELETE | `/products/dedicated/servers/{server}/tasks/{task}` | dedicated:update |
| `dedicated.trafficShow` | GET | `/products/dedicated/servers/{server}/traffic` | dedicated:read |
| `dedicated.updatesStatus` | GET | `/products/dedicated/servers/{server}/updates` | dedicated:read |
| `dedicated.updatesInstall` | POST | `/products/dedicated/servers/{server}/updates/install` | dedicated:update |
## domains

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `domains.list` | GET | `/products/domains` | domains:read |
| `domains.catchIndex` | GET | `/products/domains/catch` | domains:read |
| `domains.catchStore` | POST | `/products/domains/catch/create` | domains:create |
| `domains.catchShow` | GET | `/products/domains/catch/{catch}` | domains:read |
| `domains.catchCancel` | POST | `/products/domains/catch/{catch}/cancel` | domains:update |
| `domains.check` | GET | `/products/domains/check` | domains:read |
| `domains.checkBulk` | POST | `/products/domains/check-bulk` | domains:read |
| `domains.register` | POST | `/products/domains/create` | domains:create |
| `domains.dnsRecordTypes` | GET | `/products/domains/dns/record-types` | domains:read |
| `domains.handlesIndex` | GET | `/products/domains/handles` | domains:read |
| `domains.handlesStore` | POST | `/products/domains/handles/create` | domains:create |
| `domains.handlesShow` | GET | `/products/domains/handles/{handle}` | domains:read |
| `domains.handlesDestroy` | DELETE | `/products/domains/handles/{handle}/delete` | domains:delete |
| `domains.handlesDomains` | GET | `/products/domains/handles/{handle}/domains` | domains:read |
| `domains.handlesUpdate` | POST | `/products/domains/handles/{handle}/update` | domains:update |
| `domains.pricing` | GET | `/products/domains/pricing` | domains:read |
| `domains.pricingPromos` | GET | `/products/domains/pricing/promos` | domains:read |
| `domains.statistics` | GET | `/products/domains/statistics` | domains:read |
| `domains.suggestions` | GET | `/products/domains/suggestions` | domains:read |
| `domains.transfer` | POST | `/products/domains/transfer` | domains:transfer |
| `domains.get` | GET | `/products/domains/{domain}` | domains:read |
| `domains.authCode` | POST | `/products/domains/{domain}/auth-code` | domains:update |
| `domains.disableAutoRenew` | POST | `/products/domains/{domain}/disableAutoRenew` | domains:update |
| `domains.dnsIndex` | GET | `/products/domains/{domain}/dns` | domains:read |
| `domains.dnsImportDestroy` | DELETE | `/products/domains/{domain}/dns-import` | domains:update |
| `domains.dnsImportShow` | GET | `/products/domains/{domain}/dns-import` | domains:read |
| `domains.dnsImportStore` | POST | `/products/domains/{domain}/dns-import` | domains:update |
| `domains.dnsImportApply` | POST | `/products/domains/{domain}/dns-import/apply` | domains:update |
| `domains.dnsUpdate` | POST | `/products/domains/{domain}/dns/update` | domains:update |
| `domains.dnssecIndex` | GET | `/products/domains/{domain}/dnssec` | domains:read |
| `domains.dnssecUpdate` | POST | `/products/domains/{domain}/dnssec/update` | domains:update |
| `domains.enableAutoRenew` | POST | `/products/domains/{domain}/enableAutoRenew` | domains:update |
| `domains.nameserversIndex` | GET | `/products/domains/{domain}/nameservers` | domains:read |
| `domains.nameserversPlatform` | POST | `/products/domains/{domain}/nameservers/platform` | domains:update |
| `domains.nameserversUpdate` | POST | `/products/domains/{domain}/nameservers/update` | domains:update |
## gameserver

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `gameserver.list` | GET | `/products/gameserver` | gameservers:read |
| `gameserver.create` | POST | `/products/gameserver` | gameservers:create |
| `gameserver.catalog` | GET | `/products/gameserver/catalog` | gameservers:read |
| `gameserver.catalogEgg` | GET | `/products/gameserver/catalog/eggs/{egg}` | gameservers:read |
| `gameserver.quote` | POST | `/products/gameserver/quote` | gameservers:read |
| `gameserver.subdomainCheck` | GET | `/products/gameserver/subdomain-check` | gameservers:read |
| `gameserver.delete` | DELETE | `/products/gameserver/{server}` | gameservers:delete |
| `gameserver.get` | GET | `/products/gameserver/{server}` | gameservers:read |
| `gameserver.rename` | PATCH | `/products/gameserver/{server}` | gameservers:update |
| `gameserver.addonsDestroy` | DELETE | `/products/gameserver/{server}/addons` | gameservers:update |
| `gameserver.addonsIndex` | GET | `/products/gameserver/{server}/addons` | gameservers:read |
| `gameserver.addonsInstall` | POST | `/products/gameserver/{server}/addons/install` | gameservers:update |
| `gameserver.addonsSearch` | GET | `/products/gameserver/{server}/addons/search` | gameservers:read |
| `gameserver.addonsToggle` | POST | `/products/gameserver/{server}/addons/toggle` | gameservers:update |
| `gameserver.addonsVersions` | GET | `/products/gameserver/{server}/addons/versions` | gameservers:read |
| `gameserver.allocationsStore` | POST | `/products/gameserver/{server}/allocations` | gameservers:update |
| `gameserver.allocationsDestroy` | DELETE | `/products/gameserver/{server}/allocations/{allocation}` | gameservers:update |
| `gameserver.backupsIndex` | GET | `/products/gameserver/{server}/backups` | gameservers:read |
| `gameserver.backupsStore` | POST | `/products/gameserver/{server}/backups` | gameservers:update |
| `gameserver.backupsDestroy` | DELETE | `/products/gameserver/{server}/backups/{backup}` | gameservers:update |
| `gameserver.backupsDownload` | GET | `/products/gameserver/{server}/backups/{backup}/download` | gameservers:read |
| `gameserver.backupsRestore` | POST | `/products/gameserver/{server}/backups/{backup}/restore` | gameservers:update |
| `gameserver.command` | POST | `/products/gameserver/{server}/command` | gameservers:update |
| `gameserver.console` | GET | `/products/gameserver/{server}/console` | gameservers:read |
| `gameserver.databaseIndex` | GET | `/products/gameserver/{server}/database` | gameservers:read |
| `gameserver.databaseStore` | POST | `/products/gameserver/{server}/database` | gameservers:update |
| `gameserver.databaseDestroy` | DELETE | `/products/gameserver/{server}/database/{database}` | gameservers:update |
| `gameserver.databaseRotate` | POST | `/products/gameserver/{server}/database/{database}/rotate` | gameservers:update |
| `gameserver.fileDestroy` | DELETE | `/products/gameserver/{server}/file` | gameservers:update |
| `gameserver.fileShow` | GET | `/products/gameserver/{server}/file` | gameservers:read |
| `gameserver.fileUpdate` | PUT | `/products/gameserver/{server}/file` | gameservers:update |
| `gameserver.files` | GET | `/products/gameserver/{server}/files` | gameservers:read |
| `gameserver.filesArchive` | POST | `/products/gameserver/{server}/files/archive` | gameservers:update |
| `gameserver.filesBulkDelete` | POST | `/products/gameserver/{server}/files/bulk-delete` | gameservers:update |
| `gameserver.filesChmod` | POST | `/products/gameserver/{server}/files/chmod` | gameservers:update |
| `gameserver.filesDownload` | GET | `/products/gameserver/{server}/files/download` | gameservers:read |
| `gameserver.filesExtract` | POST | `/products/gameserver/{server}/files/extract` | gameservers:update |
| `gameserver.filesRename` | POST | `/products/gameserver/{server}/files/rename` | gameservers:update |
| `gameserver.filesUpload` | POST | `/products/gameserver/{server}/files/upload` | gameservers:update |
| `gameserver.ideStop` | DELETE | `/products/gameserver/{server}/ide` | gameservers:update |
| `gameserver.ide` | GET | `/products/gameserver/{server}/ide` | gameservers:update |
| `gameserver.ideStart` | POST | `/products/gameserver/{server}/ide` | gameservers:update |
| `gameserver.ideStatus` | GET | `/products/gameserver/{server}/ide/status` | gameservers:update |
| `gameserver.logs` | GET | `/products/gameserver/{server}/logs` | gameservers:read |
| `gameserver.mitigate` | POST | `/products/gameserver/{server}/mitigate` | gameservers:update |
| `gameserver.filesMkdir` | POST | `/products/gameserver/{server}/mkdir` | gameservers:update |
| `gameserver.playersIndex` | GET | `/products/gameserver/{server}/players` | gameservers:read |
| `gameserver.playersAction` | POST | `/products/gameserver/{server}/players` | gameservers:update |
| `gameserver.reinstall` | POST | `/products/gameserver/{server}/reinstall` | gameservers:update |
| `gameserver.resize` | POST | `/products/gameserver/{server}/resize` | gameservers:update |
| `gameserver.restart` | POST | `/products/gameserver/{server}/restart` | gameservers:power |
| `gameserver.scan` | POST | `/products/gameserver/{server}/scan` | gameservers:update |
| `gameserver.schedulesIndex` | GET | `/products/gameserver/{server}/schedules` | gameservers:read |
| `gameserver.schedulesStore` | POST | `/products/gameserver/{server}/schedules` | gameservers:update |
| `gameserver.schedulesDestroy` | DELETE | `/products/gameserver/{server}/schedules/{schedule}` | gameservers:update |
| `gameserver.schedulesUpdate` | PATCH | `/products/gameserver/{server}/schedules/{schedule}` | gameservers:update |
| `gameserver.schedulesRun` | POST | `/products/gameserver/{server}/schedules/{schedule}/run` | gameservers:update |
| `gameserver.sftpRotate` | POST | `/products/gameserver/{server}/sftp/rotate` | gameservers:update |
| `gameserver.start` | POST | `/products/gameserver/{server}/start` | gameservers:power |
| `gameserver.stats` | GET | `/products/gameserver/{server}/stats` | gameservers:read |
| `gameserver.statsHistory` | GET | `/products/gameserver/{server}/stats/history` | gameservers:read |
| `gameserver.stop` | POST | `/products/gameserver/{server}/stop` | gameservers:power |
| `gameserver.subdomainDestroy` | DELETE | `/products/gameserver/{server}/subdomain` | gameservers:update |
| `gameserver.subdomainStore` | POST | `/products/gameserver/{server}/subdomain` | gameservers:update |
| `gameserver.unmitigate` | POST | `/products/gameserver/{server}/unmitigate` | gameservers:update |
| `gameserver.upgradeDedicated` | POST | `/products/gameserver/{server}/upgrade-dedicated` | gameservers:update |
| `gameserver.variablesIndex` | GET | `/products/gameserver/{server}/variables` | gameservers:read |
| `gameserver.variablesUpdate` | PATCH | `/products/gameserver/{server}/variables` | gameservers:update |
## inference

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `inference.messages` | POST | `/products/inference/anthropic/v1/messages` | inference:chat |
| `inference.models` | GET | `/products/inference/anthropic/v1/models` | inference:read |
| `inference.createSpeech` | POST | `/products/inference/audio/speech` | inference:tts |
| `inference.create` | POST | `/products/inference/audio/transcriptions` | inference:stt |
| `inference.voices` | GET | `/products/inference/audio/voices` | inference:read |
| `inference.completions` | POST | `/products/inference/chat/completions` | inference:chat |
| `inference.rag` | POST | `/products/inference/chat/completions/rag` | inference:chat |
| `inference.postImagesGenerations` | POST | `/products/inference/images/generations` | inference:images |
| `inference.list` | GET | `/products/inference/models` | inference:read |
| `inference.audio` | GET | `/products/inference/models/audio` | inference:read |
| `inference.chat` | GET | `/products/inference/models/chat` | inference:read |
| `inference.images` | GET | `/products/inference/models/images` | inference:read |
| `inference.speechToText` | GET | `/products/inference/models/stt` | inference:read |
| `inference.video` | GET | `/products/inference/models/video` | inference:read |
| `inference.postModerations` | POST | `/products/inference/moderations` | inference:moderations |
| `inference.getUsage` | GET | `/products/inference/usage` | inference:read |
| `inference.daily` | GET | `/products/inference/usage/daily` | inference:read |
| `inference.getVectorStore` | GET | `/products/inference/vector-store` | inference:vectorstore |
| `inference.postVectorStore` | POST | `/products/inference/vector-store` | inference:vectorstore |
| `inference.delete` | DELETE | `/products/inference/vector-store/{collection}` | inference:vectorstore |
| `inference.get` | GET | `/products/inference/vector-store/{collection}` | inference:vectorstore |
| `inference.update` | PATCH | `/products/inference/vector-store/{collection}` | inference:vectorstore |
| `inference.getVectorStoreCollectionFiles` | GET | `/products/inference/vector-store/{collection}/files` | inference:vectorstore |
| `inference.postVectorStoreCollectionFiles` | POST | `/products/inference/vector-store/{collection}/files` | inference:vectorstore |
| `inference.deleteVectorStoreCollectionFilesFile` | DELETE | `/products/inference/vector-store/{collection}/files/{file}` | inference:vectorstore |
| `inference.getVectorStoreCollectionFilesFile` | GET | `/products/inference/vector-store/{collection}/files/{file}` | inference:vectorstore |
| `inference.getVectorStoreCollectionItems` | GET | `/products/inference/vector-store/{collection}/items` | inference:vectorstore |
| `inference.postVectorStoreCollectionItems` | POST | `/products/inference/vector-store/{collection}/items` | inference:vectorstore |
| `inference.deleteVectorStoreCollectionItemsItem` | DELETE | `/products/inference/vector-store/{collection}/items/{item}` | inference:vectorstore |
| `inference.getVectorStoreCollectionItemsItem` | GET | `/products/inference/vector-store/{collection}/items/{item}` | inference:vectorstore |
| `inference.patchVectorStoreCollectionItemsItem` | PATCH | `/products/inference/vector-store/{collection}/items/{item}` | inference:vectorstore |
| `inference.search` | POST | `/products/inference/vector-store/{collection}/search` | inference:vectorstore |
| `inference.getVideos` | GET | `/products/inference/videos` | inference:videos |
| `inference.postVideos` | POST | `/products/inference/videos` | inference:videos |
| `inference.deleteVideosVideoId` | DELETE | `/products/inference/videos/{videoId}` | inference:videos |
| `inference.getVideosVideoId` | GET | `/products/inference/videos/{videoId}` | inference:videos |
| `inference.content` | GET | `/products/inference/videos/{videoId}/content` | inference:videos |
## ipTunnels

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `ipTunnels.list` | GET | `/products/ip-tunnels` | öffentlich |
| `ipTunnels.create` | POST | `/products/ip-tunnels` | öffentlich |
| `ipTunnels.locations` | GET | `/products/ip-tunnels/locations` | öffentlich |
| `ipTunnels.locationAvailability` | GET | `/products/ip-tunnels/locations/{locationId}/availability` | öffentlich |
| `ipTunnels.delete` | DELETE | `/products/ip-tunnels/{id}` | öffentlich |
| `ipTunnels.get` | GET | `/products/ip-tunnels/{id}` | öffentlich |
| `ipTunnels.update` | PUT | `/products/ip-tunnels/{id}` | öffentlich |
| `ipTunnels.abuse` | GET | `/products/ip-tunnels/{id}/abuse` | öffentlich |
| `ipTunnels.config` | GET | `/products/ip-tunnels/{id}/config` | öffentlich |
| `ipTunnels.ddos` | GET | `/products/ip-tunnels/{id}/ddos` | öffentlich |
| `ipTunnels.guide` | GET | `/products/ip-tunnels/{id}/guide` | öffentlich |
| `ipTunnels.setRdns` | POST | `/products/ip-tunnels/{id}/rdns` | öffentlich |
| `ipTunnels.removeRdns` | DELETE | `/products/ip-tunnels/{id}/rdns/{allocatedIpId}` | öffentlich |
| `ipTunnels.regenerate` | POST | `/products/ip-tunnels/{id}/regenerate` | öffentlich |
| `ipTunnels.suspend` | POST | `/products/ip-tunnels/{id}/suspend` | öffentlich |
| `ipTunnels.traffic` | GET | `/products/ip-tunnels/{id}/traffic` | öffentlich |
| `ipTunnels.trafficHistory` | GET | `/products/ip-tunnels/{id}/traffic/history` | öffentlich |
| `ipTunnels.unsuspend` | POST | `/products/ip-tunnels/{id}/unsuspend` | öffentlich |
## ipv6

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `ipv6.list` | GET | `/products/ipv6` | ipv6:read |
| `ipv6.create` | POST | `/products/ipv6/order` | ipv6:create |
| `ipv6.pools` | GET | `/products/ipv6/pools` | ipv6:read |
| `ipv6.get` | GET | `/products/ipv6/{assignment}` | ipv6:read |
| `ipv6.allocationsStore` | POST | `/products/ipv6/{assignment}/allocations` | ipv6:update |
| `ipv6.allocationsDestroy` | DELETE | `/products/ipv6/{assignment}/allocations/{allocation}` | ipv6:update |
| `ipv6.asnsIndex` | GET | `/products/ipv6/{assignment}/asns` | ipv6:read |
| `ipv6.asnsStore` | POST | `/products/ipv6/{assignment}/asns` | ipv6:update |
| `ipv6.asnsDestroy` | DELETE | `/products/ipv6/{assignment}/asns/{asn_entry}` | ipv6:update |
| `ipv6.asnsLoaGenerate` | POST | `/products/ipv6/{assignment}/asns/{asn_entry}/loa/generate` | ipv6:read |
| `ipv6.asnsLoaRevoke` | POST | `/products/ipv6/{assignment}/asns/{asn_entry}/loa/revoke` | ipv6:update |
| `ipv6.asnsRoutingDisable` | POST | `/products/ipv6/{assignment}/asns/{asn_entry}/routing/disable` | ipv6:update |
| `ipv6.asnsRoutingEnable` | POST | `/products/ipv6/{assignment}/asns/{asn_entry}/routing/enable` | ipv6:update |
| `ipv6.geofeed` | PATCH | `/products/ipv6/{assignment}/geofeed` | ipv6:update |
| `ipv6.label` | PATCH | `/products/ipv6/{assignment}/label` | ipv6:update |
| `ipv6.loaGenerate` | POST | `/products/ipv6/{assignment}/loa/generate` | ipv6:read |
| `ipv6.loaRevoke` | POST | `/products/ipv6/{assignment}/loa/revoke` | ipv6:update |
| `ipv6.rdns` | PATCH | `/products/ipv6/{assignment}/rdns` | ipv6:update |
| `ipv6.routingDisable` | POST | `/products/ipv6/{assignment}/routing/disable` | ipv6:update |
| `ipv6.routingEnable` | POST | `/products/ipv6/{assignment}/routing/enable` | ipv6:update |
| `ipv6.terminate` | POST | `/products/ipv6/{assignment}/terminate` | ipv6:delete |
## kubernetes

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `kubernetes.list` | GET | `/products/kubernetes` | kubernetes:read |
| `kubernetes.create` | POST | `/products/kubernetes/create` | kubernetes:create |
| `kubernetes.locations` | GET | `/products/kubernetes/locations` | kubernetes:read |
| `kubernetes.plans` | GET | `/products/kubernetes/plans` | kubernetes:read |
| `kubernetes.versions` | GET | `/products/kubernetes/versions` | kubernetes:read |
| `kubernetes.get` | GET | `/products/kubernetes/{cluster}` | kubernetes:read |
| `kubernetes.delete` | POST | `/products/kubernetes/{cluster}/delete` | kubernetes:delete |
| `kubernetes.firewallRules` | GET | `/products/kubernetes/{cluster}/firewall/rules` | kubernetes:read |
| `kubernetes.firewallRulesCreate` | POST | `/products/kubernetes/{cluster}/firewall/rules/create` | kubernetes:update |
| `kubernetes.firewallRulesDelete` | POST | `/products/kubernetes/{cluster}/firewall/rules/{rule}/delete` | kubernetes:update |
| `kubernetes.kubeconfig` | GET | `/products/kubernetes/{cluster}/kubeconfig` | kubernetes:read |
| `kubernetes.nodePoolsIndex` | GET | `/products/kubernetes/{cluster}/node-pools` | kubernetes:read |
| `kubernetes.nodePoolsCreate` | POST | `/products/kubernetes/{cluster}/node-pools/create` | kubernetes:create |
| `kubernetes.nodePoolsDelete` | POST | `/products/kubernetes/{cluster}/node-pools/{pool}/delete` | kubernetes:delete |
| `kubernetes.nodePoolsScaleDown` | POST | `/products/kubernetes/{cluster}/node-pools/{pool}/scale-down` | kubernetes:update |
| `kubernetes.nodePoolsScaleUp` | POST | `/products/kubernetes/{cluster}/node-pools/{pool}/scale-up` | kubernetes:update |
| `kubernetes.nodePoolsUpdate` | POST | `/products/kubernetes/{cluster}/node-pools/{pool}/update` | kubernetes:update |
| `kubernetes.nodesCordon` | POST | `/products/kubernetes/{cluster}/nodes/{node}/cordon` | kubernetes:update |
| `kubernetes.nodesDrain` | POST | `/products/kubernetes/{cluster}/nodes/{node}/drain` | kubernetes:update |
| `kubernetes.nodesUncordon` | POST | `/products/kubernetes/{cluster}/nodes/{node}/uncordon` | kubernetes:update |
| `kubernetes.operationsIndex` | GET | `/products/kubernetes/{cluster}/operations` | kubernetes:read |
| `kubernetes.operationsApply` | POST | `/products/kubernetes/{cluster}/operations/apply` | kubernetes:update |
| `kubernetes.operationsEvents` | GET | `/products/kubernetes/{cluster}/operations/events/{namespace}/{kind}/{name}` | kubernetes:read |
| `kubernetes.operationsMetrics` | GET | `/products/kubernetes/{cluster}/operations/metrics` | kubernetes:read |
| `kubernetes.operationsDeleteDeployment` | DELETE | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/deployments/{deployment}` | kubernetes:update |
| `kubernetes.operationsRestart` | POST | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/deployments/{deployment}/restart` | kubernetes:update |
| `kubernetes.operationsScale` | POST | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/deployments/{deployment}/scale` | kubernetes:update |
| `kubernetes.operationsPodsDelete` | DELETE | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/pods/{pod}` | kubernetes:update |
| `kubernetes.operationsPodsEvict` | POST | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/pods/{pod}/evict` | kubernetes:update |
| `kubernetes.operationsLogs` | GET | `/products/kubernetes/{cluster}/operations/namespaces/{namespace}/pods/{pod}/logs` | kubernetes:read |
| `kubernetes.operationsStats` | GET | `/products/kubernetes/{cluster}/operations/stats/{kind}/{identifier}` | kubernetes:read |
| `kubernetes.operationsTopology` | GET | `/products/kubernetes/{cluster}/operations/topology` | kubernetes:read |
| `kubernetes.restore` | POST | `/products/kubernetes/{cluster}/restore` | kubernetes:update |
| `kubernetes.update` | POST | `/products/kubernetes/{cluster}/update` | kubernetes:update |
| `kubernetes.upgrade` | POST | `/products/kubernetes/{cluster}/upgrade` | kubernetes:update |
## licenses

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `licenses.list` | GET | `/products/licenses` | licenses:read |
| `licenses.create` | POST | `/products/licenses/order` | licenses:create |
| `licenses.products` | GET | `/products/licenses/products` | licenses:read |
| `licenses.product` | GET | `/products/licenses/products/{product}` | licenses:read |
| `licenses.get` | GET | `/products/licenses/{license}` | licenses:read |
| `licenses.autoRenew` | PUT | `/products/licenses/{license}/auto-renew` | licenses:update |
| `licenses.cancel` | POST | `/products/licenses/{license}/cancel` | licenses:delete |
| `licenses.ip` | PUT | `/products/licenses/{license}/ip` | licenses:update |
| `licenses.renew` | POST | `/products/licenses/{license}/renew` | licenses:update |
| `licenses.sync` | POST | `/products/licenses/{license}/sync` | licenses:update |
## loadbalancer

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `loadbalancer.list` | GET | `/products/loadbalancer` | loadbalancer:read |
| `loadbalancer.create` | POST | `/products/loadbalancer/create` | loadbalancer:create |
| `loadbalancer.plans` | GET | `/products/loadbalancer/plans` | loadbalancer:read |
| `loadbalancer.get` | GET | `/products/loadbalancer/{lb}` | loadbalancer:read |
| `loadbalancer.backendsIndex` | GET | `/products/loadbalancer/{lb}/backends` | loadbalancer:read |
| `loadbalancer.backendsCreate` | POST | `/products/loadbalancer/{lb}/backends/create` | loadbalancer:update |
| `loadbalancer.backendsDelete` | POST | `/products/loadbalancer/{lb}/backends/{backend}/delete` | loadbalancer:update |
| `loadbalancer.backendsUpdate` | POST | `/products/loadbalancer/{lb}/backends/{backend}/update` | loadbalancer:update |
| `loadbalancer.delete` | POST | `/products/loadbalancer/{lb}/delete` | loadbalancer:delete |
| `loadbalancer.domainsIndex` | GET | `/products/loadbalancer/{lb}/domains` | loadbalancer:read |
| `loadbalancer.domainsCreate` | POST | `/products/loadbalancer/{lb}/domains/create` | loadbalancer:update |
| `loadbalancer.domainsDelete` | POST | `/products/loadbalancer/{lb}/domains/{domain}/delete` | loadbalancer:update |
| `loadbalancer.domainsRequestSsl` | POST | `/products/loadbalancer/{lb}/domains/{domain}/request-ssl` | loadbalancer:update |
| `loadbalancer.restore` | POST | `/products/loadbalancer/{lb}/restore` | loadbalancer:update |
| `loadbalancer.rulesIndex` | GET | `/products/loadbalancer/{lb}/rules` | loadbalancer:read |
| `loadbalancer.rulesCreate` | POST | `/products/loadbalancer/{lb}/rules/create` | loadbalancer:update |
| `loadbalancer.rulesDelete` | POST | `/products/loadbalancer/{lb}/rules/{rule}/delete` | loadbalancer:update |
| `loadbalancer.stats` | GET | `/products/loadbalancer/{lb}/stats` | loadbalancer:read |
| `loadbalancer.update` | POST | `/products/loadbalancer/{lb}/update` | loadbalancer:update |
## mailserver

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `mailserver.brandingUpdate` | PUT | `/products/mailserver/branding` | mailserver:update |
| `mailserver.domainsIndex` | GET | `/products/mailserver/domains` | mailserver:read |
| `mailserver.domainsStore` | POST | `/products/mailserver/domains` | mailserver:create |
| `mailserver.domainsDestroy` | DELETE | `/products/mailserver/domains/{domain}` | mailserver:delete |
| `mailserver.domainsShow` | GET | `/products/mailserver/domains/{domain}` | mailserver:read |
| `mailserver.mailboxesIndex` | GET | `/products/mailserver/domains/{domain}/mailboxes` | mailserver:read |
| `mailserver.mailboxesStore` | POST | `/products/mailserver/domains/{domain}/mailboxes` | mailserver:create |
| `mailserver.hostnamesIndex` | GET | `/products/mailserver/hostnames` | mailserver:read |
| `mailserver.hostnamesStore` | POST | `/products/mailserver/hostnames` | mailserver:create |
| `mailserver.hostnamesShow` | GET | `/products/mailserver/hostnames/{hostname}` | mailserver:read |
| `mailserver.hostnamesVerification` | POST | `/products/mailserver/hostnames/{hostname}/verification` | mailserver:update |
| `mailserver.hostnamesVerify` | POST | `/products/mailserver/hostnames/{hostname}/verify` | mailserver:update |
| `mailserver.mailboxesEnabled` | PATCH | `/products/mailserver/mailboxes/{mailbox}/enabled` | mailserver:update |
| `mailserver.mailboxesRotatePassword` | POST | `/products/mailserver/mailboxes/{mailbox}/rotate-password` | mailserver:update |
| `mailserver.mailboxesSsoTicket` | POST | `/products/mailserver/mailboxes/{mailbox}/sso-ticket` | mailserver:update |
## plesk

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `plesk.accountsIndex` | GET | `/products/plesk/accounts` | plesk:read |
| `plesk.accountsCreate` | POST | `/products/plesk/accounts/create` | plesk:create |
| `plesk.accountsShow` | GET | `/products/plesk/accounts/{account}` | plesk:read |
| `plesk.accountsCancel` | POST | `/products/plesk/accounts/{account}/cancel` | plesk:update |
| `plesk.accountsChangePlan` | POST | `/products/plesk/accounts/{account}/change-plan` | plesk:update |
| `plesk.accountsDelete` | POST | `/products/plesk/accounts/{account}/delete` | plesk:delete |
| `plesk.accountsRevokeCancel` | POST | `/products/plesk/accounts/{account}/revoke-cancel` | plesk:update |
| `plesk.accountsSuspend` | POST | `/products/plesk/accounts/{account}/suspend` | plesk:update |
| `plesk.accountsUnsuspend` | POST | `/products/plesk/accounts/{account}/unsuspend` | plesk:update |
| `plesk.nodes` | GET | `/products/plesk/nodes` | plesk:read |
| `plesk.plans` | GET | `/products/plesk/plans` | plesk:read |
| `plesk.webspacesIndex` | GET | `/products/plesk/webspaces` | plesk:read |
| `plesk.webspacesCreate` | POST | `/products/plesk/webspaces/create` | plesk:create |
| `plesk.webspacesShow` | GET | `/products/plesk/webspaces/{webspace}` | plesk:read |
| `plesk.webspacesDelete` | POST | `/products/plesk/webspaces/{webspace}/delete` | plesk:delete |
| `plesk.webspacesStats` | GET | `/products/plesk/webspaces/{webspace}/stats` | plesk:read |
| `plesk.webspacesStatsHistory` | GET | `/products/plesk/webspaces/{webspace}/stats/history` | plesk:read |
| `plesk.webspacesSuspend` | POST | `/products/plesk/webspaces/{webspace}/suspend` | plesk:update |
| `plesk.webspacesUnsuspend` | POST | `/products/plesk/webspaces/{webspace}/unsuspend` | plesk:update |
## rootserver

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `rootserver.list` | GET | `/products/rootserver` | rootservers:read |
| `rootserver.clusterCalculator` | POST | `/products/rootserver/cluster/{cluster}/calculator` | rootservers:read |
| `rootserver.create` | POST | `/products/rootserver/cluster/{cluster}/create` | rootservers:create |
| `rootserver.clusterPricing` | GET | `/products/rootserver/cluster/{cluster}/pricing` | rootservers:read |
| `rootserver.firewallPresets` | GET | `/products/rootserver/firewall-presets` | rootservers:read |
| `rootserver.locationsIndex` | GET | `/products/rootserver/locations` | rootservers:read |
| `rootserver.locationsShow` | GET | `/products/rootserver/locations/{location}` | rootservers:read |
| `rootserver.osList` | GET | `/products/rootserver/os-list` | rootservers:read |
| `rootserver.tasksGlobalIndex` | GET | `/products/rootserver/tasks` | rootservers:read |
| `rootserver.tasksGlobalShow` | GET | `/products/rootserver/tasks/{task}` | rootservers:read |
| `rootserver.tasksCancel` | POST | `/products/rootserver/tasks/{task}/cancel` | rootservers:update |
| `rootserver.trafficLocations` | GET | `/products/rootserver/traffic/locations` | rootservers:read |
| `rootserver.vpcIndex` | GET | `/products/rootserver/vpc` | rootservers:read |
| `rootserver.vpcCreate` | POST | `/products/rootserver/vpc/create` | rootservers:create |
| `rootserver.vpcShow` | GET | `/products/rootserver/vpc/{vpc}` | rootservers:read |
| `rootserver.vpcDelete` | POST | `/products/rootserver/vpc/{vpc}/delete` | rootservers:delete |
| `rootserver.vpcLink` | POST | `/products/rootserver/vpc/{vpc}/link` | rootservers:update |
| `rootserver.vpcUnlink` | POST | `/products/rootserver/vpc/{vpc}/unlink` | rootservers:update |
| `rootserver.get` | GET | `/products/rootserver/{rootserver}` | rootservers:read |
| `rootserver.backupsIndex` | GET | `/products/rootserver/{rootserver}/backups` | rootservers:read |
| `rootserver.backupsCreate` | POST | `/products/rootserver/{rootserver}/backups/create` | rootservers:create |
| `rootserver.backupsShow` | GET | `/products/rootserver/{rootserver}/backups/{backup}` | rootservers:read |
| `rootserver.backupsDelete` | POST | `/products/rootserver/{rootserver}/backups/{backup}/delete` | rootservers:delete |
| `rootserver.backupsRestore` | POST | `/products/rootserver/{rootserver}/backups/{backup}/restore` | rootservers:update |
| `rootserver.ddosServer` | GET | `/products/rootserver/{rootserver}/ddos` | ddos_protection:read |
| `rootserver.delete` | POST | `/products/rootserver/{rootserver}/delete` | rootservers:delete |
| `rootserver.firewallApply` | POST | `/products/rootserver/{rootserver}/firewall/apply` | rootservers:update |
| `rootserver.firewallRules` | GET | `/products/rootserver/{rootserver}/firewall/rules` | rootservers:read |
| `rootserver.firewallRulesCreate` | POST | `/products/rootserver/{rootserver}/firewall/rules/create` | rootservers:update |
| `rootserver.firewallRulesReorder` | POST | `/products/rootserver/{rootserver}/firewall/rules/reorder` | rootservers:update |
| `rootserver.firewallRulesDelete` | POST | `/products/rootserver/{rootserver}/firewall/rules/{rule}/delete` | rootservers:update |
| `rootserver.firewallRulesUpdate` | POST | `/products/rootserver/{rootserver}/firewall/rules/{rule}/update` | rootservers:update |
| `rootserver.historicalStats` | GET | `/products/rootserver/{rootserver}/historical-stats` | rootservers:read |
| `rootserver.ipsIndex` | GET | `/products/rootserver/{rootserver}/ips` | rootservers:read |
| `rootserver.ipsIpv4Store` | POST | `/products/rootserver/{rootserver}/ips/ipv4` | rootservers:update |
| `rootserver.ipsIpv4Destroy` | DELETE | `/products/rootserver/{rootserver}/ips/ipv4/{ip}` | rootservers:update |
| `rootserver.ipsIpv4Primary` | POST | `/products/rootserver/{rootserver}/ips/ipv4/{ip}/primary` | rootservers:update |
| `rootserver.isoCustom` | POST | `/products/rootserver/{rootserver}/iso/custom` | rootservers:update |
| `rootserver.isoMount` | POST | `/products/rootserver/{rootserver}/iso/mount` | rootservers:update |
| `rootserver.isoUnmount` | POST | `/products/rootserver/{rootserver}/iso/unmount` | rootservers:update |
| `rootserver.isosIndex` | GET | `/products/rootserver/{rootserver}/isos` | rootservers:read |
| `rootserver.kill` | POST | `/products/rootserver/{rootserver}/kill` | rootservers:power |
| `rootserver.liveStats` | GET | `/products/rootserver/{rootserver}/live-stats` | rootservers:read |
| `rootserver.rdnsIndex` | GET | `/products/rootserver/{rootserver}/rdns` | rootservers:read |
| `rootserver.rdnsUpdate` | POST | `/products/rootserver/{rootserver}/rdns/update` | rootservers:update |
| `rootserver.reinstall` | POST | `/products/rootserver/{rootserver}/reinstall` | rootservers:update |
| `rootserver.resetPassword` | POST | `/products/rootserver/{rootserver}/reset-root-password` | rootservers:update |
| `rootserver.resize` | POST | `/products/rootserver/{rootserver}/resize` | rootservers:update |
| `rootserver.restart` | POST | `/products/rootserver/{rootserver}/restart` | rootservers:power |
| `rootserver.serial` | GET | `/products/rootserver/{rootserver}/serial` | rootservers:read |
| `rootserver.start` | POST | `/products/rootserver/{rootserver}/start` | rootservers:power |
| `rootserver.stop` | POST | `/products/rootserver/{rootserver}/stop` | rootservers:power |
| `rootserver.serverTasksIndex` | GET | `/products/rootserver/{rootserver}/tasks` | rootservers:read |
| `rootserver.serverTasksShow` | GET | `/products/rootserver/{rootserver}/tasks/{task}` | rootservers:read |
| `rootserver.trafficHistory` | GET | `/products/rootserver/{rootserver}/traffic/history` | rootservers:read |
| `rootserver.trafficSummary` | GET | `/products/rootserver/{rootserver}/traffic/summary` | rootservers:read |
| `rootserver.vnc` | GET | `/products/rootserver/{rootserver}/vnc` | rootservers:read |
## s3Storage

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `s3Storage.list` | GET | `/products/s3-storage` | s3-storage:read |
| `s3Storage.calculate` | POST | `/products/s3-storage/calculate` | s3-storage:read |
| `s3Storage.locations` | GET | `/products/s3-storage/locations` | s3-storage:read |
| `s3Storage.create` | POST | `/products/s3-storage/order` | s3-storage:create |
| `s3Storage.get` | GET | `/products/s3-storage/{bucket}` | s3-storage:read |
| `s3Storage.update` | PATCH | `/products/s3-storage/{bucket}` | s3-storage:update |
| `s3Storage.delete` | DELETE | `/products/s3-storage/{bucket}/delete` | s3-storage:delete |
| `s3Storage.folders` | GET | `/products/s3-storage/{bucket}/folders` | s3-storage:read |
| `s3Storage.metrics` | GET | `/products/s3-storage/{bucket}/metrics` | s3-storage:read |
| `s3Storage.networkBandwidth` | GET | `/products/s3-storage/{bucket}/network-bandwidth` | s3-storage:read |
| `s3Storage.objects` | GET | `/products/s3-storage/{bucket}/objects` | s3-storage:read |
| `s3Storage.presign` | GET | `/products/s3-storage/{bucket}/presign` | s3-storage:read |
| `s3Storage.quota` | PATCH | `/products/s3-storage/{bucket}/quota` | s3-storage:update |
| `s3Storage.rotateCredentials` | POST | `/products/s3-storage/{bucket}/rotate-credentials` | s3-storage:update |
| `s3Storage.usage` | GET | `/products/s3-storage/{bucket}/usage` | s3-storage:read |
## sslCertificates

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `sslCertificates.list` | GET | `/products/ssl-certificates` | certificates:read |
| `sslCertificates.csrGenerate` | POST | `/products/ssl-certificates/csr` | certificates:create |
| `sslCertificates.csrDecode` | POST | `/products/ssl-certificates/csr/decode` | certificates:read |
| `sslCertificates.dcvEmails` | GET | `/products/ssl-certificates/dcv-emails` | certificates:read |
| `sslCertificates.downloadFormats` | GET | `/products/ssl-certificates/download-formats` | certificates:read |
| `sslCertificates.create` | POST | `/products/ssl-certificates/order` | certificates:create |
| `sslCertificates.products` | GET | `/products/ssl-certificates/products` | certificates:read |
| `sslCertificates.product` | GET | `/products/ssl-certificates/products/{product}` | certificates:read |
| `sslCertificates.get` | GET | `/products/ssl-certificates/{certificate}` | certificates:read |
| `sslCertificates.download` | GET | `/products/ssl-certificates/{certificate}/download` | certificates:read |
| `sslCertificates.privateKey` | GET | `/products/ssl-certificates/{certificate}/private-key` | certificates:read |
| `sslCertificates.reissue` | POST | `/products/ssl-certificates/{certificate}/reissue` | certificates:update |
| `sslCertificates.renew` | POST | `/products/ssl-certificates/{certificate}/renew` | certificates:update |
| `sslCertificates.revoke` | POST | `/products/ssl-certificates/{certificate}/revoke` | certificates:delete |
## storagebox

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `storagebox.list` | GET | `/products/storagebox` | storagebox:read |
| `storagebox.locations` | GET | `/products/storagebox/locations` | storagebox:read |
| `storagebox.create` | POST | `/products/storagebox/order` | storagebox:create |
| `storagebox.get` | GET | `/products/storagebox/{datastore}` | storagebox:read |
| `storagebox.update` | PATCH | `/products/storagebox/{datastore}` | storagebox:update |
| `storagebox.aclIndex` | GET | `/products/storagebox/{datastore}/acl` | storagebox:read |
| `storagebox.aclStore` | POST | `/products/storagebox/{datastore}/acl` | storagebox:update |
| `storagebox.aclDestroy` | DELETE | `/products/storagebox/{datastore}/acl/{aclId}` | storagebox:delete |
| `storagebox.backupsOverview` | GET | `/products/storagebox/{datastore}/backups-overview` | storagebox:read |
| `storagebox.delete` | DELETE | `/products/storagebox/{datastore}/delete` | storagebox:delete |
| `storagebox.events` | GET | `/products/storagebox/{datastore}/events` | storagebox:read |
| `storagebox.graph` | GET | `/products/storagebox/{datastore}/graph` | storagebox:read |
| `storagebox.immutableBackupsDisable` | DELETE | `/products/storagebox/{datastore}/immutable-backups` | storagebox:delete |
| `storagebox.immutableBackupsIndex` | GET | `/products/storagebox/{datastore}/immutable-backups` | storagebox:read |
| `storagebox.immutableBackupsEnable` | POST | `/products/storagebox/{datastore}/immutable-backups` | storagebox:update |
| `storagebox.immutableBackupsCancelDisable` | POST | `/products/storagebox/{datastore}/immutable-backups/cancel-disable` | storagebox:update |
| `storagebox.namespacesDestroy` | DELETE | `/products/storagebox/{datastore}/namespaces` | storagebox:delete |
| `storagebox.namespacesIndex` | GET | `/products/storagebox/{datastore}/namespaces` | storagebox:read |
| `storagebox.namespacesStore` | POST | `/products/storagebox/{datastore}/namespaces` | storagebox:update |
| `storagebox.optimalTime` | GET | `/products/storagebox/{datastore}/optimal-time` | storagebox:read |
| `storagebox.pruneUpdate` | PUT | `/products/storagebox/{datastore}/prune` | storagebox:update |
| `storagebox.replicationDisable` | DELETE | `/products/storagebox/{datastore}/replication` | storagebox:delete |
| `storagebox.replicationIndex` | GET | `/products/storagebox/{datastore}/replication` | storagebox:read |
| `storagebox.replicationConfigure` | POST | `/products/storagebox/{datastore}/replication` | storagebox:update |
| `storagebox.replicationPreview` | POST | `/products/storagebox/{datastore}/replication/preview` | storagebox:update |
| `storagebox.rescaleLog` | GET | `/products/storagebox/{datastore}/rescale-log` | storagebox:read |
| `storagebox.rotateCredentials` | POST | `/products/storagebox/{datastore}/rotate-credentials` | storagebox:update |
| `storagebox.sftpDelete` | DELETE | `/products/storagebox/{datastore}/sftp` | storagebox:delete |
| `storagebox.sftpList` | GET | `/products/storagebox/{datastore}/sftp` | storagebox:read |
| `storagebox.sftpDownload` | GET | `/products/storagebox/{datastore}/sftp/download` | storagebox:read |
| `storagebox.sftpMkdir` | POST | `/products/storagebox/{datastore}/sftp/mkdir` | storagebox:update |
| `storagebox.sftpUpload` | POST | `/products/storagebox/{datastore}/sftp/upload` | storagebox:update |
| `storagebox.sshKeysStore` | POST | `/products/storagebox/{datastore}/ssh-keys` | storagebox:update |
## teamspeak

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `teamspeak.instancesIndex` | GET | `/products/teamspeak/instances` | teamspeak:read |
| `teamspeak.instancesCreate` | POST | `/products/teamspeak/instances/create` | teamspeak:create |
| `teamspeak.instancesShow` | GET | `/products/teamspeak/instances/{instance}` | teamspeak:read |
| `teamspeak.instancesResetPassword` | POST | `/products/teamspeak/instances/{instance}/reset-password` | teamspeak:update |
| `teamspeak.instancesStart` | POST | `/products/teamspeak/instances/{instance}/start` | teamspeak:power |
| `teamspeak.instancesStatistics` | GET | `/products/teamspeak/instances/{instance}/statistics` | teamspeak:read |
| `teamspeak.instancesStop` | POST | `/products/teamspeak/instances/{instance}/stop` | teamspeak:power |
| `teamspeak.instancesTerminate` | POST | `/products/teamspeak/instances/{instance}/terminate` | teamspeak:delete |
| `teamspeak.instancesVirtualservers` | GET | `/products/teamspeak/instances/{instance}/virtualservers` | teamspeak:read |
| `teamspeak.instancesWhitelist` | GET | `/products/teamspeak/instances/{instance}/whitelist` | teamspeak:read |
| `teamspeak.instancesWhitelistAdd` | POST | `/products/teamspeak/instances/{instance}/whitelist/add` | teamspeak:update |
| `teamspeak.instancesWhitelistRemove` | POST | `/products/teamspeak/instances/{instance}/whitelist/remove` | teamspeak:update |
| `teamspeak.prices` | GET | `/products/teamspeak/prices` | teamspeak:read |
| `teamspeak.serversIndex` | GET | `/products/teamspeak/servers` | teamspeak:read |
| `teamspeak.serversCreate` | POST | `/products/teamspeak/servers/create` | teamspeak:create |
| `teamspeak.serversShow` | GET | `/products/teamspeak/servers/{server}` | teamspeak:read |
| `teamspeak.serversBans` | GET | `/products/teamspeak/servers/{server}/bans` | teamspeak:read |
| `teamspeak.serversBansClear` | POST | `/products/teamspeak/servers/{server}/bans/clear` | teamspeak:update |
| `teamspeak.serversBansCreate` | POST | `/products/teamspeak/servers/{server}/bans/create` | teamspeak:update |
| `teamspeak.serversBansDelete` | POST | `/products/teamspeak/servers/{server}/bans/{banId}/delete` | teamspeak:update |
| `teamspeak.serversChannels` | GET | `/products/teamspeak/servers/{server}/channels` | teamspeak:read |
| `teamspeak.serversChannelsCreate` | POST | `/products/teamspeak/servers/{server}/channels/create` | teamspeak:update |
| `teamspeak.serversChannelsShow` | GET | `/products/teamspeak/servers/{server}/channels/{cid}` | teamspeak:read |
| `teamspeak.serversChannelsUpdate` | PATCH | `/products/teamspeak/servers/{server}/channels/{cid}` | teamspeak:update |
| `teamspeak.serversChannelsDelete` | POST | `/products/teamspeak/servers/{server}/channels/{cid}/delete` | teamspeak:update |
| `teamspeak.serversClients` | GET | `/products/teamspeak/servers/{server}/clients` | teamspeak:read |
| `teamspeak.serversClientsKick` | POST | `/products/teamspeak/servers/{server}/clients/kick` | teamspeak:update |
| `teamspeak.serversClientsMove` | POST | `/products/teamspeak/servers/{server}/clients/move` | teamspeak:update |
| `teamspeak.serversClientsPoke` | POST | `/products/teamspeak/servers/{server}/clients/poke` | teamspeak:update |
| `teamspeak.serversComplaints` | GET | `/products/teamspeak/servers/{server}/complaints` | teamspeak:read |
| `teamspeak.serversComplaintsDeleteAll` | POST | `/products/teamspeak/servers/{server}/complaints/{tcldbid}/delete-all` | teamspeak:update |
| `teamspeak.serversComplaintsDelete` | POST | `/products/teamspeak/servers/{server}/complaints/{tcldbid}/{fcldbid}/delete` | teamspeak:update |
| `teamspeak.serversDelete` | POST | `/products/teamspeak/servers/{server}/delete` | teamspeak:delete |
| `teamspeak.serversSettingsUpdate` | PATCH | `/products/teamspeak/servers/{server}/settings` | teamspeak:update |
| `teamspeak.serversStart` | POST | `/products/teamspeak/servers/{server}/start` | teamspeak:power |
| `teamspeak.serversStats` | GET | `/products/teamspeak/servers/{server}/stats` | teamspeak:read |
| `teamspeak.serversStatsHistory` | GET | `/products/teamspeak/servers/{server}/stats/history` | teamspeak:read |
| `teamspeak.serversStop` | POST | `/products/teamspeak/servers/{server}/stop` | teamspeak:power |
| `teamspeak.serversTokens` | GET | `/products/teamspeak/servers/{server}/tokens` | teamspeak:read |
| `teamspeak.serversTokensCreate` | POST | `/products/teamspeak/servers/{server}/tokens/create` | teamspeak:update |
| `teamspeak.serversTokensDelete` | POST | `/products/teamspeak/servers/{server}/tokens/delete` | teamspeak:update |
| `teamspeak.serversTsdnsUpdate` | PATCH | `/products/teamspeak/servers/{server}/tsdns` | teamspeak:update |
| `teamspeak.serversTsdnsRemove` | POST | `/products/teamspeak/servers/{server}/tsdns/remove` | teamspeak:update |
| `teamspeak.serversUpgrade` | PATCH | `/products/teamspeak/servers/{server}/upgrade` | teamspeak:update |
## vpn

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `vpn.accountsIndex` | GET | `/products/vpn/accounts` | vpn:read |
| `vpn.accountsStore` | POST | `/products/vpn/accounts` | vpn:create |
| `vpn.accountsDestroy` | DELETE | `/products/vpn/accounts/{account}` | vpn:delete |
| `vpn.accountsShow` | GET | `/products/vpn/accounts/{account}` | vpn:read |
| `vpn.accountsUpdate` | PATCH | `/products/vpn/accounts/{account}` | vpn:update |
| `vpn.accountsSuspend` | POST | `/products/vpn/accounts/{account}/suspend` | vpn:update |
| `vpn.accountsTerminate` | POST | `/products/vpn/accounts/{account}/terminate` | vpn:delete |
| `vpn.accountsUnsuspend` | POST | `/products/vpn/accounts/{account}/unsuspend` | vpn:update |
| `vpn.dnsOptions` | GET | `/products/vpn/dns-options` | vpn:read |
| `vpn.prices` | GET | `/products/vpn/prices` | vpn:read |
| `vpn.servers` | GET | `/products/vpn/servers` | vpn:read |
## webspace

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `webspace.list` | GET | `/products/webspace` | webspaces:read |
| `webspace.create` | POST | `/products/webspace` | webspaces:create |
| `webspace.catalog` | GET | `/products/webspace/catalog` | webspaces:read |
| `webspace.catalogEgg` | GET | `/products/webspace/catalog/eggs/{egg}` | webspaces:read |
| `webspace.quote` | POST | `/products/webspace/quote` | webspaces:read |
| `webspace.delete` | DELETE | `/products/webspace/{webspace}` | webspaces:delete |
| `webspace.get` | GET | `/products/webspace/{webspace}` | webspaces:read |
| `webspace.rename` | PATCH | `/products/webspace/{webspace}` | webspaces:update |
| `webspace.backupsIndex` | GET | `/products/webspace/{webspace}/backups` | webspaces:read |
| `webspace.backupsStore` | POST | `/products/webspace/{webspace}/backups` | webspaces:update |
| `webspace.backupsDestroy` | DELETE | `/products/webspace/{webspace}/backups/{backup}` | webspaces:update |
| `webspace.backupsDownload` | GET | `/products/webspace/{webspace}/backups/{backup}/download` | webspaces:read |
| `webspace.backupsRestore` | POST | `/products/webspace/{webspace}/backups/{backup}/restore` | webspaces:update |
| `webspace.databaseIndex` | GET | `/products/webspace/{webspace}/database` | webspaces:read |
| `webspace.databaseStore` | POST | `/products/webspace/{webspace}/database` | webspaces:update |
| `webspace.databaseDestroy` | DELETE | `/products/webspace/{webspace}/database/{database}` | webspaces:update |
| `webspace.databaseRotate` | POST | `/products/webspace/{webspace}/database/{database}/rotate` | webspaces:update |
| `webspace.domainsStore` | POST | `/products/webspace/{webspace}/domains` | webspaces:update |
| `webspace.domainsDestroy` | DELETE | `/products/webspace/{webspace}/domains/{domain}` | webspaces:update |
| `webspace.domainsVerify` | POST | `/products/webspace/{webspace}/domains/{domain}/verify` | webspaces:update |
| `webspace.fileDestroy` | DELETE | `/products/webspace/{webspace}/file` | webspaces:update |
| `webspace.fileShow` | GET | `/products/webspace/{webspace}/file` | webspaces:read |
| `webspace.fileUpdate` | PUT | `/products/webspace/{webspace}/file` | webspaces:update |
| `webspace.files` | GET | `/products/webspace/{webspace}/files` | webspaces:read |
| `webspace.filesArchive` | POST | `/products/webspace/{webspace}/files/archive` | webspaces:update |
| `webspace.filesBulkDelete` | POST | `/products/webspace/{webspace}/files/bulk-delete` | webspaces:update |
| `webspace.filesChmod` | POST | `/products/webspace/{webspace}/files/chmod` | webspaces:update |
| `webspace.filesDownload` | GET | `/products/webspace/{webspace}/files/download` | webspaces:read |
| `webspace.filesExtract` | POST | `/products/webspace/{webspace}/files/extract` | webspaces:update |
| `webspace.filesRename` | POST | `/products/webspace/{webspace}/files/rename` | webspaces:update |
| `webspace.filesUpload` | POST | `/products/webspace/{webspace}/files/upload` | webspaces:update |
| `webspace.ideStop` | DELETE | `/products/webspace/{webspace}/ide` | webspaces:update |
| `webspace.ide` | GET | `/products/webspace/{webspace}/ide` | webspaces:update |
| `webspace.ideStart` | POST | `/products/webspace/{webspace}/ide` | webspaces:update |
| `webspace.ideStatus` | GET | `/products/webspace/{webspace}/ide/status` | webspaces:update |
| `webspace.logs` | GET | `/products/webspace/{webspace}/logs` | webspaces:read |
| `webspace.mailAttach` | POST | `/products/webspace/{webspace}/mail` | webspaces:update |
| `webspace.filesMkdir` | POST | `/products/webspace/{webspace}/mkdir` | webspaces:update |
| `webspace.phpUpdate` | PATCH | `/products/webspace/{webspace}/php` | webspaces:update |
| `webspace.reinstall` | POST | `/products/webspace/{webspace}/reinstall` | webspaces:update |
| `webspace.resize` | POST | `/products/webspace/{webspace}/resize` | webspaces:update |
| `webspace.schedulesIndex` | GET | `/products/webspace/{webspace}/schedules` | webspaces:read |
| `webspace.schedulesStore` | POST | `/products/webspace/{webspace}/schedules` | webspaces:update |
| `webspace.schedulesDestroy` | DELETE | `/products/webspace/{webspace}/schedules/{schedule}` | webspaces:update |
| `webspace.schedulesUpdate` | PATCH | `/products/webspace/{webspace}/schedules/{schedule}` | webspaces:update |
| `webspace.schedulesRun` | POST | `/products/webspace/{webspace}/schedules/{schedule}/run` | webspaces:update |
| `webspace.sftpRotate` | POST | `/products/webspace/{webspace}/sftp/rotate` | webspaces:update |
| `webspace.sitesIndex` | GET | `/products/webspace/{webspace}/sites` | webspaces:read |
| `webspace.sitesStore` | POST | `/products/webspace/{webspace}/sites` | webspaces:update |
| `webspace.sitesInitialize` | POST | `/products/webspace/{webspace}/sites/initialize` | webspaces:update |
| `webspace.sitesDestroy` | DELETE | `/products/webspace/{webspace}/sites/{site}` | webspaces:update |
| `webspace.sitesUpdate` | PATCH | `/products/webspace/{webspace}/sites/{site}` | webspaces:update |
| `webspace.sitesStoreDomain` | POST | `/products/webspace/{webspace}/sites/{site}/domains` | webspaces:update |
| `webspace.sitesDestroyDomain` | DELETE | `/products/webspace/{webspace}/sites/{site}/domains/{domain}` | webspaces:update |
| `webspace.sitesVerifyDomain` | POST | `/products/webspace/{webspace}/sites/{site}/domains/{domain}/verify` | webspaces:update |
| `webspace.sitesLogs` | GET | `/products/webspace/{webspace}/sites/{site}/logs` | webspaces:read |
| `webspace.sitesSsl` | PUT | `/products/webspace/{webspace}/sites/{site}/ssl` | webspaces:update |
| `webspace.sitesStats` | GET | `/products/webspace/{webspace}/sites/{site}/stats` | webspaces:read |
| `webspace.stats` | GET | `/products/webspace/{webspace}/stats` | webspaces:read |
| `webspace.statsHistory` | GET | `/products/webspace/{webspace}/stats/history` | webspaces:read |
| `webspace.statsLive` | GET | `/products/webspace/{webspace}/stats/live` | webspaces:read |
| `webspace.suspend` | POST | `/products/webspace/{webspace}/suspend` | webspaces:update |
| `webspace.unsuspend` | POST | `/products/webspace/{webspace}/unsuspend` | webspaces:update |
## ripe

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `ripe.organisationsIndex` | GET | `/ripe/organisations` | ripe:read |
| `ripe.organisationsStore` | POST | `/ripe/organisations` | ripe:create |
| `ripe.organisationsVerify` | POST | `/ripe/organisations/verify` | ripe:create |
| `ripe.organisationsDestroy` | DELETE | `/ripe/organisations/{organisation}` | ripe:delete |
| `ripe.organisationsShow` | GET | `/ripe/organisations/{organisation}` | ripe:read |
| `ripe.contactsStore` | POST | `/ripe/organisations/{organisation}/contacts` | ripe:create |
| `ripe.contactsDestroy` | DELETE | `/ripe/organisations/{organisation}/contacts/{contact}` | ripe:delete |
| `ripe.contactsRetry` | POST | `/ripe/organisations/{organisation}/contacts/{contact}/retry` | ripe:create |
| `ripe.organisationsRefresh` | POST | `/ripe/organisations/{organisation}/refresh` | ripe:create |
| `ripe.organisationsRetry` | POST | `/ripe/organisations/{organisation}/retry` | ripe:create |
## subResellers

| Methode | HTTP | Pfad | Rechte |
|---|---|---|---|
| `subResellers.list` | GET | `/sub-resellers` | sub_resellers:read |
| `subResellers.create` | POST | `/sub-resellers` | sub_resellers:create |
| `subResellers.delete` | DELETE | `/sub-resellers/{subReseller}` | sub_resellers:delete |
| `subResellers.get` | GET | `/sub-resellers/{subReseller}` | sub_resellers:read |
| `subResellers.update` | PATCH | `/sub-resellers/{subReseller}` | sub_resellers:update |
| `subResellers.pricingShow` | GET | `/sub-resellers/{subReseller}/pricing` | sub_resellers:read |
| `subResellers.pricingUpdate` | PUT | `/sub-resellers/{subReseller}/pricing` | sub_resellers:update |
| `subResellers.suspend` | POST | `/sub-resellers/{subReseller}/suspend` | sub_resellers:update |
| `subResellers.unsuspend` | POST | `/sub-resellers/{subReseller}/unsuspend` | sub_resellers:update |
