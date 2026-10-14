# Produkte und Modulkonfiguration

Stand: lokaler API-Abgleich; 21 Hosting-Module und ein separater WHMCS-Domain-Registrar. IDs und verfügbare Tarife über die katalogbezogenen SDK-Methoden ermitteln. Keine Beispiel-ID ist produktiv verwendbar.

In WHMCS entspricht jede Zeile unten einer Produktkonfiguration. Weitere Felder können in „Weitere Vorgaben (JSON)“ stehen. In Blesta steht derselbe Schlüssel im Paket-JSON. Kundenfelder erscheinen in Blesta automatisch; in WHMCS als Produkt-Custom-Fields mit exakt dem angegebenen API-Namen anlegen. Ressourcen, Tarife, Eigentümer und Standort bleiben administrativ festgelegt.

Kündigungserfolg bestätigt die Annahme beim Anbieter bzw. bei Rootservern den abgeschlossenen Kündigungstask. Physische Löschung kann danach verzögert erfolgen. Stoppen ist keine Abrechnungssperre.

| Produkt | WHMCS-Modul | Kündigung | Suspend | Verwaltungsaktionen |
|---|---|---|---|---|
| Rootserver | `yourresellingrootserver` | Ja | Nein | 10 |
| Dedicated Server | `yourresellingdedicated` | Ja | Nein | 4 |
| Plesk Reseller | `yourresellingpleskreseller` | Ja | Ja | 0 |
| Plesk Webhosting | `yourresellingpleskwebspace` | Ja | Ja | 0 |
| Gameserver | `yourresellinggameserver` | Ja | Nein | 9 |
| Webspace | `yourresellingwebspace` | Ja | Ja | 5 |
| Mail-Domain | `yourresellingmailserver` | Ja | Nein | 0 |
| Postfach | `yourresellingmailbox` | Nein | Nein | 0 |
| TeamSpeak Server | `yourresellingteamspeakserver` | Ja | Nein | 11 |
| TeamSpeak Instanz | `yourresellingteamspeakinstance` | Ja | Nein | 4 |
| Kubernetes | `yourresellingkubernetes` | Ja | Nein | 2 |
| Load Balancer | `yourresellingloadbalancer` | Ja | Nein | 3 |
| Container Registry | `yourresellingcontainerregistry` | Ja | Nein | 2 |
| S3 Storage | `yourresellings3storage` | Ja | Nein | 0 |
| VPN | `yourresellingvpn` | Ja | Ja | 1 |
| IP-Tunnel | `yourresellingiptunnel` | Ja | Ja | 2 |
| StorageBox | `yourresellingstoragebox` | Ja | Nein | 3 |
| SSL-Zertifikat | `yourresellingsslcertificate` | Ja | Nein | 0 |
| Softwarelizenz | `yourresellinglicense` | Ja | Nein | 1 |
| IPv6-Subnetz | `yourresellingipv6` | Ja | Nein | 2 |
| ASN | `yourresellingasn` | Ja | Nein | 0 |

## Rootserver

Bestellung: `POST /products/rootserver/cluster/{cluster}/create`. ID: `data.server.id`.

Kundenfelder: `hostname`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `cluster` | string | Ja | Pfadparameter; administrative Zuordnung. |
| `cores` | integer | Ja | required; integer; min:1 |
| `disk` | integer | Ja | required; integer; min:10 |
| `hostname` | string | Ja | required; string |
| `ipv4_count` | integer | Ja | required; integer; min:0 |
| `ipv6_count` | integer | Ja | required; integer; min:0 |
| `os_version_id` | string | Ja | required; string; uuid; exists:rootserver_os_versions,id |
| `ram` | integer | Ja | required; integer; min:512 |
| `admin_password` | string | Nein | nullable; string; min:8 |
| `bandwidth_tier_id` | string | Nein | nullable; string; uuid; exists:rootserver_bandwidth_tiers,id |
| `notes` | string | Nein | nullable; string; max:1000 |
| `reseller_ipv4_addresses` | array | Nein | nullable; array; required_if:use_reseller_pool,true |
| `ssh_key_ids` | array | Nein | nullable; array |
| `startup_script_id` | string | Nein | nullable; string; uuid; exists:rootserver_startup_scripts,id |
| `use_reseller_pool` | boolean | Nein | nullable; boolean |

API-Key-Rechte für alle Modulansichten und Aktionen: `ddos_protection:read`, `rootservers:create`, `rootservers:delete`, `rootservers:power`, `rootservers:read`, `rootservers:update`.

Verwaltungsaktionen: Backup erstellen, Firewall anwenden, Firewall-Regel erstellen, Eigene ISO einlegen, ISO einlegen, ISO auswerfen, Reverse DNS ändern, Neu starten, Starten, Stoppen.

Hinweise:
- ram is MB; disk is GB; cluster is a path parameter
- No suspend/unsuspend endpoint; stop/start are power operations

## Dedicated Server

Bestellung: `POST /products/dedicated/servers`. ID: `data.server.id`.

Kundenfelder: `hostname`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `hostname` | string | Ja | Server hostname |
| `plan_id` | string | Ja | Plan ID |
| `auto_renew` | boolean | Nein | Enable auto-renew |
| `disk_layout_id` | integer | Nein | nullable; integer |
| `ipv4_count` | integer | Nein | Number of IPv4 addresses |
| `ipv6_count` | integer | Nein | Number of IPv6 subnets |
| `os_profile_id` | integer | Nein | OS profile id to install |
| `root_password` | string | Nein | Root password |
| `team_id` | string | Nein | nullable; string |
| `traffic_upgrade_key` | string | Nein | nullable; string |

API-Key-Rechte für alle Modulansichten und Aktionen: `dedicated:create`, `dedicated:delete`, `dedicated:read`, `dedicated:update`.

Verwaltungsaktionen: Reverse DNS ändern, Neuinstallation abbrechen, Umbenennen, Updates installieren.

Hinweise:
- auto_renew defaults true
- No suspend/unsuspend endpoint

## Plesk Reseller

Bestellung: `POST /products/plesk/accounts/create`. ID: `data.id`.

Kundenfelder: `name`, `email`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `email` | string | Ja | required; email; max:255 |
| `name` | string | Ja | required; string; max:255 |
| `plan_id` | string | Ja | required; uuid; exists:plesk_plans,id |

API-Key-Rechte für alle Modulansichten und Aktionen: `plesk:create`, `plesk:delete`, `plesk:read`, `plesk:update`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- Optional suspend reason string max500
- POST /products/plesk/accounts/{account}/cancel schedules end-of-month cancellation; revoke-cancel supported

## Plesk Webhosting

Bestellung: `POST /products/plesk/webspaces/create`. ID: `data.id`.

Kundenfelder: `domain`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `domain` | string | Ja | required; string; max:255 |
| `account_id` | string | Nein | nullable; uuid; exists:customer_plesk_resellers,id |
| `disk_gb` | integer | Nein | nullable; integer; min:1 |
| `max_databases` | integer | Nein | nullable; integer; min:0 |
| `max_domains` | integer | Nein | nullable; integer; min:1 |
| `max_email_accounts` | integer | Nein | nullable; integer; min:0 |
| `node_id` | string | Nein | nullable; uuid; exists:plesk_nodes,id |
| `plan_id` | string | Nein | nullable; uuid; exists:plesk_plans,id |

API-Key-Rechte für alle Modulansichten und Aktionen: `plesk:create`, `plesk:delete`, `plesk:read`, `plesk:update`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- Optional suspend reason string max500

## Gameserver

Bestellung: `POST /products/gameserver`. ID: `data.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `cores` | integer | Ja | required; integer; min:1; max:64 |
| `disk_gb` | integer | Ja | required; integer; min:5; max:4000 |
| `egg_id` | string | Ja | required; uuid; exists:product_eggs,id |
| `location_id` | string | Ja | required; uuid; exists:rootserver_locations,id |
| `name` | string | Ja | required; string; max:64 |
| `network_mode` | string | Ja | required; in:shared_port,dedicated_ip |
| `ram_mb` | integer | Ja | required; integer; min:512; max:262144 |
| `extra_ports` | array | Nein | nullable; array; max:8 |
| `subdomain` | string | Nein | nullable; required_with:subdomain_zone_id; string; max:63 |
| `subdomain_zone_id` | string | Nein | nullable; uuid; exists:gameserver_subdomain_zones,id |
| `variables` | object | Nein | nullable; array |

API-Key-Rechte für alle Modulansichten und Aktionen: `gameservers:create`, `gameservers:delete`, `gameservers:power`, `gameservers:read`, `gameservers:update`.

Verwaltungsaktionen: Umbenennen, Backup erstellen, Konsolenbefehl ausführen, Spieler verwalten, Neu starten, Sicherheitsprüfung starten, Zeitplan erstellen, Starten, Stoppen.

Hinweise:
- network_mode shared_port or dedicated_ip
- Egg-specific variables available from catalog; validate/quote before ordering
- No suspend/unsuspend endpoint; stop/start are power operations

## Webspace

Bestellung: `POST /products/webspace`. ID: `data.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `egg_id` | string | Ja | required; uuid; exists:product_eggs,id |
| `location_id` | string | Ja | required; uuid |
| `name` | string | Ja | required; string; max:64 |
| `cores` | integer | Nein | vCPU count; default is at least 1 and the runtime minimum |
| `disk_gb` | integer | Nein | Storage in GB; default is at least 10 and the runtime minimum |
| `ram_mb` | integer | Nein | RAM in MB; default is at least 512 and the runtime minimum |
| `variables` | object | Nein | nullable; array |

API-Key-Rechte für alle Modulansichten und Aktionen: `webspaces:create`, `webspaces:delete`, `webspaces:read`, `webspaces:update`.

Verwaltungsaktionen: Umbenennen, Backup erstellen, Domain hinzufügen, PHP-Einstellungen, Zeitplan erstellen.

Hinweise:
- Optional cores,ram_mb,disk_gb; network_mode and dedicated_ip prohibited
- Egg-specific variables available from catalog; validate/quote before ordering

## Mail-Domain

Bestellung: `POST /products/mailserver/domains`. ID: `data.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `mailserver_location_id` | string | Ja | required; uuid; exists:mailserver_locations,id |
| `name` | string | Ja | required; string; max:255; regex:/^(\[a-zA-Z0-9\](\[a-zA-Z0-9-\]{0,61}\[a-zA-Z0-9\])?\\.)+\[a-zA-Z\]{2,}$/; unique:customer_mail_domains,name |
| `quota_bytes` | integer | Nein | nullable; integer; min:104857600 |

API-Key-Rechte für alle Modulansichten und Aktionen: `mailserver:create`, `mailserver:delete`, `mailserver:read`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- No domain suspend/unsuspend endpoint
- Mailboxes separately created at POST /products/mailserver/domains/{domain}/mailboxes (local_part required, optional quota_bytes); response data.id
- Mailbox enabled toggle is access control, not whole domain suspension

## Postfach

Bestellung: `POST /products/mailserver/domains/{domain}/mailboxes`. ID: `data.id`.

Kundenfelder: `local_part`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `domain` | string | Ja | Pfadparameter; administrative Zuordnung. |
| `local_part` | string | Ja | required; string; max:64; regex:/^\[a-zA-Z0-9\](\[a-zA-Z0-9._-\]{0,62}\[a-zA-Z0-9\])?$/ |
| `quota_bytes` | integer | Nein | nullable; integer; min:10485760 |

API-Key-Rechte für alle Modulansichten und Aktionen: `mailserver:create`, `mailserver:read`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- No standalone mailbox delete endpoint; deletion only via entire mail domain
- PATCH /products/mailserver/mailboxes/{mailbox}/enabled toggles enabled boolean; do not equate to billing suspension
- Standalone automatic WHMCS termination unsupported

## TeamSpeak Server

Bestellung: `POST /products/teamspeak/servers/create`. ID: `data.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `name` | string | Ja | Server name (max 255 characters) |
| `slots` | integer | Ja | Number of slots |

API-Key-Rechte für alle Modulansichten und Aktionen: `teamspeak:create`, `teamspeak:delete`, `teamspeak:power`, `teamspeak:read`, `teamspeak:update`.

Verwaltungsaktionen: Sperrliste leeren, Sperre erstellen, Kanal erstellen, Client entfernen, Client verschieben, Client anstupsen, Server-Einstellungen, Starten, Stoppen, TS-DNS bearbeiten, TS-DNS entfernen.

Hinweise:
- No suspend/unsuspend endpoint; stop/start are power operations

## TeamSpeak Instanz

Bestellung: `POST /products/teamspeak/instances/create`. ID: `data.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `name` | string | Ja | Instance name (max 255 characters) |

API-Key-Rechte für alle Modulansichten und Aktionen: `teamspeak:create`, `teamspeak:delete`, `teamspeak:power`, `teamspeak:read`, `teamspeak:update`.

Verwaltungsaktionen: Starten, Stoppen, Whitelist ergänzen, Whitelist entfernen.

Hinweise:
- No suspend/unsuspend endpoint; stop/start are power operations

## Kubernetes

Bestellung: `POST /products/kubernetes/create`. ID: `data.cluster.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `cluster_id` | string | Ja | required; string; uuid; exists:rootserver_clusters,id |
| `control_plane_plan_id` | string | Ja | required; string; uuid; exists:kubernetes_plans,id |
| `location_id` | string | Ja | required; string; uuid; exists:rootserver_locations,id |
| `name` | string | Ja | required; string; max:255; regex:/^\[a-zA-Z0-9\]\[a-zA-Z0-9\\-\]*$/ |
| `version_id` | string | Ja | required; string; uuid; exists:kubernetes_versions,id |
| `worker_pools` | array | Ja | required; array; min:1 |
| `ha_control_plane` | boolean | Nein | boolean |

API-Key-Rechte für alle Modulansichten und Aktionen: `kubernetes:create`, `kubernetes:delete`, `kubernetes:read`, `kubernetes:update`.

Verwaltungsaktionen: Firewall-Regel erstellen, Einstellungen.

Hinweise:
- worker_pools min1; each requires plan_id,infrastructure_cluster_id,name,min_nodes,max_nodes
- ha_control_plane=true explicitly prohibited by FormRequest
- No suspend/unsuspend endpoint

## Load Balancer

Bestellung: `POST /products/loadbalancer/create`. ID: `data.loadbalancer.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `cluster_id` | string | Ja | required; uuid; exists:rootserver_clusters,id |
| `location_id` | string | Ja | required; uuid; exists:rootserver_locations,id |
| `name` | string | Ja | required; string; max:255 |
| `plan_id` | string | Ja | required; uuid; exists:loadbalancer_plans,id |
| `algorithm` | string | Nein | sometimes; string; in:roundrobin,leastconn,source |
| `sticky_sessions` | boolean | Nein | sometimes; boolean |

API-Key-Rechte für alle Modulansichten und Aktionen: `loadbalancer:create`, `loadbalancer:delete`, `loadbalancer:read`, `loadbalancer:update`.

Verwaltungsaktionen: Backend hinzufügen, Regel erstellen, Einstellungen.

Hinweise:
- No suspend/unsuspend endpoint

## Container Registry

Bestellung: `POST /products/container-registry/create`. ID: `data.registry.id`.

Kundenfelder: `name`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `name` | string | Ja | required; string; min:2; max:255; regex:/^\[a-z0-9\]+(?:\[._-\]\[a-z0-9\]+)*$/; unique:customer_container_registries,harbor_project_name |
| `auto_upgrade` | boolean | Nein | boolean |
| `auto_upgrade_max_gb` | integer | Nein | nullable; integer; min:1; max:100000 |
| `auto_upgrade_step_gb` | integer | Nein | nullable; integer; min:1; max:10000 |
| `is_custom` | boolean | Nein | boolean |
| `plan_id` | string | Nein | required_unless:is_custom,true; nullable; uuid; exists:container_registry_plans,id |
| `storage_gb` | integer | Nein | required_if:is_custom,true; nullable; integer; min:1; max:100000 |

API-Key-Rechte für alle Modulansichten und Aktionen: `container-registry:create`, `container-registry:delete`, `container-registry:read`, `container-registry:update`.

Verwaltungsaktionen: Aufbewahrung einstellen, Sicherheitsprüfung starten.

Hinweise:
- No suspend/unsuspend endpoint

## S3 Storage

Bestellung: `POST /products/s3-storage/order`. ID: `data.id`.

Kundenfelder: keine.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `friendly_name` | string | Ja | required; string; max:255 |
| `size_gb` | integer | Ja | required; integer; min:500; max:20000 |
| `autoscaling_enabled` | boolean | Nein | boolean |
| `autoscaling_lower_threshold` | integer | Nein | nullable; integer; min:0; max:100 |
| `autoscaling_scale_up_only` | boolean | Nein | boolean |
| `autoscaling_upper_threshold` | integer | Nein | nullable; integer; min:0; max:100 |
| `location_id` | string | Nein | Location UUID, oder null für Auto-Select |
| `speed_mbps` | integer | Nein | Bandbreitenlimit in Mbit/s |

API-Key-Rechte für alle Modulansichten und Aktionen: `s3-storage:create`, `s3-storage:delete`, `s3-storage:read`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- size_gb 500..20000; optional location_id, automatic cheapest active location otherwise
- No suspend/unsuspend endpoint

## VPN

Bestellung: `POST /products/vpn/accounts`. ID: `data.id`.

Kundenfelder: keine.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `dns_option` | string | Nein | DNS option |

API-Key-Rechte für alle Modulansichten und Aktionen: `vpn:create`, `vpn:delete`, `vpn:read`, `vpn:update`.

Verwaltungsaktionen: DNS-Einstellungen.

Hinweise:
- Optional dns_option standard/no_ads/no_ads_no_scam
- DELETE /products/vpn/accounts/{account} also deletes with deprovisioning
- Optional suspend reason string max255

## IP-Tunnel

Bestellung: `POST /products/ip-tunnels`. ID: `data.id`.

Kundenfelder: `name`, `peer_endpoint`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `ip_count` | integer | Ja | Number of IPv4 addresses |
| `location_id` | string | Ja | Location UUID |
| `name` | string | Ja | Tunnel name |
| `protocol` | string | Ja | Tunnel protocol |
| `ipv6_enabled` | boolean | Nein | Enable IPv6 /64 subnet |
| `peer_endpoint` | string | Nein | Peer IP:port (required for GRE/IPIP/L2TP) |
| `prefer_consecutive` | boolean | Nein | Prefer consecutive IP block |
| `traffic_limit_action` | string | Nein | Action when limit reached |
| `traffic_limit_gb` | integer | Nein | Monthly traffic limit in GB (null = unlimited) |

API-Key-Rechte für alle Modulansichten und Aktionen: .

Verwaltungsaktionen: Einstellungen, Reverse DNS ändern.

Hinweise:
- protocol wireguard/gre/ipip/l2tp; ip_count1..255 plus location max

## StorageBox

Bestellung: `POST /products/storagebox/order`. ID: `data.id`.

Kundenfelder: keine.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `friendly` | string | Ja | required; string; max:255 |
| `size_gb` | integer | Ja | required; integer; min:500; max:20000 |
| `location_id` | string | Nein | Location UUID, oder null für Auto-Select |
| `speed` | integer | Nein | Optional, wird per PATCH nach Provisioning gesetzt |

API-Key-Rechte für alle Modulansichten und Aktionen: `storagebox:create`, `storagebox:delete`, `storagebox:read`, `storagebox:update`.

Verwaltungsaktionen: Namespace erstellen, Backup-Aufbewahrung, Ordner erstellen.

Hinweise:
- size_gb500..20000; optional location_id; speed100/250/500
- No suspend/unsuspend endpoint

## SSL-Zertifikat

Bestellung: `POST /products/ssl-certificates/order`. ID: `data.certificate.id`.

Kundenfelder: `common_name`, `csr`, `dcv`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `common_name` | string | Ja | Primary domain, must match the CSR |
| `csr` | string | Ja | PEM-encoded CSR |
| `dcv` | array | Ja | Validation per domain: \[{"domain": "example.com", "method": "dns\|email\|file", "email": "admin@example.com"}\] |
| `period_months` | integer | Ja | Period in months, must be one of the product periods |
| `product_id` | string | Ja | Product ID from GET /products |
| `approver` | object | Nein | Contact person, required for EV products |
| `organization` | object | Nein | Required for OV/EV products |
| `private_key` | string | Nein | Optional: store the matching key so it can be downloaded later |
| `sans` | array | Nein | Additional domains (multi-domain products only) |

API-Key-Rechte für alle Modulansichten und Aktionen: `certificates:create`, `certificates:delete`, `certificates:read`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- dcv list min1, each domain and method(email,dns,file) required
- DV/OV/EV product requirements may require organization and approver details
- No suspend/unsuspend endpoint; revocation is not ordinary service pause
- POST /products/ssl-certificates/{certificate}/renew exists

## Softwarelizenz

Bestellung: `POST /products/licenses/order`. ID: `data.license.id`.

Kundenfelder: `ip_address`.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `ip_address` | string | Ja | required; ip |
| `product_id` | string | Ja | required; uuid; exists:license_products,id |

API-Key-Rechte für alle Modulansichten und Aktionen: `licenses:create`, `licenses:delete`, `licenses:read`, `licenses:update`.

Verwaltungsaktionen: IP-Bindung ändern.

Hinweise:
- No suspend/unsuspend endpoint
- POST /products/licenses/{license}/renew and PUT /products/licenses/{license}/auto-renew supported

## IPv6-Subnetz

Bestellung: `POST /products/ipv6/order`. ID: `data.id`.

Kundenfelder: keine.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `ip_pool_id` | string | Ja | ID of the IP pool to order from |
| `ripe_organisation_id` | string | Ja | RIPE organisation to assign this subnet to |
| `asns` | array | Nein | Initial ASNs to add (optional) |
| `country` | string | Nein | 2-letter country code (default: DE) |
| `ripe_abuse_contact_id` | string | Nein | Abuse contact (optional) |
| `ripe_contact_id` | string | Nein | Tech/admin contact (optional) |

API-Key-Rechte für alle Modulansichten und Aktionen: `ipv6:create`, `ipv6:delete`, `ipv6:read`, `ipv6:update`.

Verwaltungsaktionen: Geofeed ändern, Bezeichnung ändern.

Hinweise:
- RIPE org prerequisite; optional contacts,country,asns
- No suspend/unsuspend endpoint

## ASN

Bestellung: `POST /products/asn/order`. ID: `data.id`.

Kundenfelder: keine.

| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| `billing_cycle` | string | Ja | Billing cycle |
| `order_address` | string | Ja | Full postal address |
| `order_company_name` | string | Ja | Company name for the ASN |
| `order_contact_email` | string | Ja | Contact email |
| `order_contact_name` | string | Ja | Contact person name |
| `order_reason` | string | Nein | Reason for needing an ASN |

API-Key-Rechte für alle Modulansichten und Aktionen: `asn:create`, `asn:delete`, `asn:read`.

Verwaltungsaktionen: Produktübersicht und Zugangsdaten.

Hinweise:
- billing_cycle yearly/monthly; asynchronous manual approval process
- No suspend/unsuspend endpoint

## Domains

WHMCS: `yourresellingdomains` im Registrar-Verzeichnis. Registrierung/Transfer, Verfügbarkeit ohne Premium-Bestellungen, Nameserver, Basis-DNS, Auth-Code und Status-/Transfer-Synchronisierung. `RenewDomain` speichert die gekaufte Laufzeit und entfernt die Kündigung über `enableAutoRenew`. Ohne bezahlte Folgeperiode setzt der tägliche Abgleich rechtzeitig `disableAutoRenew`; Details zu Cron, Rechnungsfristen und Migration stehen in der Registrar-Anleitung. Kein Registrar-Lock-Setter, Kontakttausch oder sofortiger Domain-Delete-Endpunkt. DNS ersetzt die ganze Zone; bei erweiterten, in WHMCS nicht darstellbaren Records wird das Speichern verweigert. Blesta enthält in diesem Paket Hosting-Module; Domain-Manager-Registrar-Automation ist nicht enthalten.

## Inference und Hilfsressourcen

Inference ist nutzungsbasiert und hat keinen kaufbaren Dienst-Lebenszyklus. Alle Inference-, RIPE-, DDoS-, Account-, Billing- und Sub-Reseller-Endpunkte stehen in den SDKs bereit. Die nicht registrierte `ipv4.php` und alte `/products/pbs-storage`-Routen sind ausgeschlossen.
