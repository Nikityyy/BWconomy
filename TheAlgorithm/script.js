function analyzation(content, url) {
	if(window.location.href.includes("Conomy")) {
			var result = document.getElementById("result");
			var urlContainer = document.getElementById("urlContainer");
			var ps = document.getElementById("fourPs");
			var cs = document.getElementById("fourCs");
			var seo = document.getElementById("seo");
			var speed = document.getElementById("speed");
			var security = document.getElementById("security");
			var privacy = document.getElementById("privacy");
			var ctx = document.getElementById('swotChart').getContext('2d');
			var swotDiv = document.getElementById('swot');
			var summarization = document.getElementById("summarization");
			var abc = document.getElementById("abc");

			const marketingWords4Ps = ["Product", "Service", "Brand", "Quality", "Price", "Value", "Packaging", "Design", "Features", "Benefits", "Variety", "Functionality", "Durability", "Warranty", "Customer", "Demand", "Offering", "Promotion", "Advertisement", "Campaign", "Discount", "Sales", "Retail", "Wholesale", "Distribution", "Channel", "Supply", "Logistics", "Inventory", "Market", "Coverage", "Placement", "Retailer", "Ecommerce", "Online", "Offline", "Store", "Outlet", "Shipping", "Delivery", "Convenience", "Accessibility", "Availability", "Location", "Reach", "Customer Journey", "Purchase", "Payment", "Feedback", "Satisfaction", "Engagement", "Interaction", "Influencer", "Testimonial", "Loyalty Program", "Referral Program", "Word of Mouth", "Branding", "Awareness", "Target", "Audience", "Segmentation", "Demographics", "Psychographics", "Geographics", "Behaviour", "Customer Acquisition", "Retention", "Experience", "Satisfaction", "Comparison", "Research", "User", "Review", "Ratings", "Options", "Comparison", "Comparison Shopping", "Perception", "Reputation", "Assessment", "Trend", "Market Trend", "Consumer Trend", "Demand Trend", "Supply Chain", "Value Chain", "Lifecycle", "Customer Lifecycle", "Lifecycle Stage", "Lifecycle Marketing", "Lifecycle Management", "Lifecycle Cost", "Lifecycle Analysis", "Lifecycle Assessment", "Lifecycle Strategies", "Lifecycle Approach", "Lifecycle Model", "Lifecycle Planning", "Lifecycle Optimization", "Lifecycle Enhancement", "Lifecycle Monitoring", "Lifecycle Measurement", "Lifecycle Performance", "Lifecycle Improvement", "Lifecycle Evaluation", "Lifecycle Metrics", "Lifecycle KPIs", "Produkt", "Dienstleistung", "Marke", "Qualität", "Preis", "Wert", "Verpackung", "Design", "Funktionen", "Vorteile", "Vielfalt", "Funktionalität", "Haltbarkeit", "Garantie", "Kunde", "Nachfrage", "Angebot", "Werbung", "Anzeige", "Kampagne", "Rabatt", "Verkauf", "Einzelhandel", "Großhandel", "Vertrieb", "Kanal", "Angebot", "Logistik", "Inventar", "Markt", "Abdeckung", "Platzierung", "Einzelhändler", "E-Commerce", "Online", "Offline", "Geschäft", "Outlet", "Versand", "Lieferung", "Bequemlichkeit", "Zugänglichkeit", "Verfügbarkeit", "Standort", "Reichweite", "Customer Journey", "Kauf", "Zahlung", "Feedback", "Zufriedenheit", "Engagement", "Interaktion", "Influencer", "Testimonial", "Loyalität Programm", "Empfehlungsprogramm", "Mundpropaganda", "Branding", "Bewusstsein", "Zielgruppe", "Publikum", "Segmentierung", "Demografie", "Psychografie", "Geografie", "Verhalten", "Kundengewinnung", "Bindung", "Erfahrung", "Zufriedenheit", "Vergleich", "Forschung", "Benutzer", "Rezension", "Bewertungen", "Optionen", "Vergleich", "Preisvergleich", "Wahrnehmung", "Reputation", "Beurteilung", "Trend", "Markttrend", "Verbrauchertrend", "Nachfragetrend", "Lieferkette", "Wertschöpfungskette", "Lebenszyklus", "Kundenlebenszyklus", "Lebenszyklusphase", "Lebenszyklusmarketing", "Lebenszyklusmanagement", "Lebenszykluskosten", "Lebenszyklusanalyse", "Lebenszyklusbewertung", "Lebenszyklusstrategien", "Lebenszyklusansatz", "Lebenszyklusmodell", "Lebenszyklusplanung", "Lebenszyklusoptimierung", "Lebenszyklusverbesserung", "Lebenszyklusüberwachung", "Lebenszyklusmessung", "Lebenszyklusleistung", "Lebenszyklusverbesserung", "Lebenszyklusbewertung", "Lebenszyklusmetriken", "Lebenszyklus-KPIs"];
			const marketingWords4Cs = ["Customer", "Consumer", "Client", "Clientele", "Cost", "Convenience", "Communication", "Value", "Needs", "Wants", "Desires", "Satisfaction", "Experience", "Feedback", "Loyalty", "Service", "Support", "Relationship", "Engagement", "Personalization", "Trust", "Retention", "Acquisition", "Price", "Affordability", "Perception", "Total Cost of Ownership", "Investment", "Benefit", "Savings", "Budget", "Expense", "Discount", "Deal", "Economy", "Worth", "Advantage", "Profit", "Loss", "Convenience", "Ease", "Access", "Availability", "Delivery", "Shipping", "Location", "Proximity", "Channel", "Platform", "Online", "Offline", "Store", "Retail", "Ecommerce", "Mobile", "Support", "Help", "Assistance", "Time", "Effort", "Comfort", "Flexibility", "Usability", "Navigation", "Simplicity", "Interaction", "Message", "Media", "Social Media", "SEO", "SEM", "Content", "Email", "Marketing", "Campaign", "Strategy", "Conversation", "Feedback", "Response", "Survey", "Testimonial", "Review", "Publicity", "Promotion", "Advertising", "Relations", "Influence", "Brand", "Awareness", "Reach", "Target", "Audience", "Connection", "Touchpoint", "Channel", "Service Level", "Service Quality", "Service Standards", "Service Management", "Service Excellence", "Service Delivery", "Service Performance", "Service Improvement", "Service Innovation", "Service Integration", "Service Differentiation", "Service Personalization", "Service Optimization", "Service Evaluation", "Service Enhancement", "Service Monitoring", "Service Metrics", "Service KPIs", "Kunde", "Verbraucher", "Klient", "Klientel", "Kosten", "Bequemlichkeit", "Kommunikation", "Wert", "Bedürfnisse", "Wünsche", "Wünsche", "Zufriedenheit", "Erfahrung", "Feedback", "Loyalität", "Service", "Support", "Beziehung", "Engagement", "Personalisierung", "Vertrauen", "Bindung", "Akquise", "Preis", "Erschwinglichkeit", "Wahrnehmung", "Gesamtbetriebskosten", "Investition", "Nutzen", "Ersparnisse", "Budget", "Aufwand", "Rabatt", "Angebot", "Wirtschaftlichkeit", "Wert", "Vorteil", "Gewinn", "Verlust", "Bequemlichkeit", "Einfachheit", "Zugang", "Verfügbarkeit", "Lieferung", "Versand", "Standort", "Nähe", "Kanal", "Plattform", "Online", "Offline", "Geschäft", "Einzelhandel", "E-Commerce", "Mobil", "Support", "Hilfe", "Unterstützung", "Zeit", "Aufwand", "Komfort", "Flexibilität", "Benutzerfreundlichkeit", "Navigation", "Einfachheit", "Interaktion", "Nachricht", "Medien", "Soziale Medien", "SEO", "SEM", "Inhalt", "E-Mail", "Marketing", "Kampagne", "Strategie", "Gespräch", "Feedback", "Antwort", "Umfrage", "Testimonial", "Rezension", "Werbung", "Promotion", "Werbung", "Beziehungen", "Einfluss", "Marke", "Bewusstsein", "Reichweite", "Zielgruppe", "Publikum", "Verbindung", "Touchpoint", "Kanal", "Servicelevel", "Servicequalität", "Servicestandards", "Servicemanagement", "Serviceexzellenz", "Servicebereitstellung", "Serviceleistung", "Serviceverbesserung", "Serviceinnovation", "Serviceintegration", "Servicedifferenzierung", "Servicepersonalisierung", "Serviceoptimierung", "Servicebewertung", "Serviceverbesserung", "Serviceüberwachung", "Service Metriken", "Service-KPIs"];
			const seoWords = ["SEO", "Search", "Engine", "Optimization", "Keywords", "Content", "Backlinks", "Rankings", "Traffic", "Organic", "Paid", "Results", "SERP", "Meta", "Title", "Description", "Tags", "Headings", "URL", "Structure", "Sitemap", "Robots.txt", "Indexing", "Crawling", "Google", "Bing", "Yahoo", "Algorithm", "Analytics", "PageSpeed", "Mobile", "Responsive", "Design", "User", "Experience", "UX", "Interface", "UI", "Bounce Rate", "Click-Through Rate", "CTR", "Conversion", "Optimization", "CRO", "Alt Text", "Images", "Videos", "Schema", "Markup", "Structured Data", "Local SEO", "NAP", "Name", "Address", "Phone", "Google My Business", "Reviews", "Citations", "Map", "Pack", "Voice Search", "Long-tail Keywords", "Short-tail Keywords", "Blog", "Article", "Link Building", "Inbound", "Outbound", "Anchor Text", "Domain", "Authority", "Page", "Trust", "Spam", "Score", "Social Signals", "Engagement", "Analytics", "Tracking", "Performance", "Metrics", "KPI", "Heatmap", "A/B Testing", "Competitor Analysis", "Keyword Research", "On-page Optimization", "Off-page Optimization", "Technical SEO", "Link Profile", "Ranking Factors", "Mobile Optimization", "Local Search", "International SEO", "Multilingual SEO", "Voice Search Optimization", "Site Architecture", "Site Navigation", "Site Speed", "Site Security", "User Engagement", "User Experience", "User Intent", "User Signals", "Site Audit", "Keyword Density", "Keyword Stuffing", "Keyword Cannibalization", "Duplicate Content", "Canonicalization", "Page Authority", "Domain Age", "Domain Trust", "Link Quality", "Link Diversity", "Anchor Text Diversity", "Link Relevance", "Link Velocity", "Link Building Tactics", "Link Outreach", "Guest Posting", "Content Marketing", "Content Strategy", "Content Optimization", "Content Distribution", "Content Syndication", "Content Curation", "Content Calendar", "Content Audit", "Content Gap Analysis", "Content Performance", "Content Metrics", "Content ROI", "Content Promotion", "Content Outreach", "Social Media Marketing", "Social Signals", "Social Engagement", "Social Sharing", "Social Proof", "Social Listening", "Social Monitoring", "Social Analytics", "Social ROI", "Social Campaigns", "Social Advertising", "Social Influencers", "Social Outreach", "Local SEO Strategies", "Local Citations", "Local Directories", "Google My Business Optimization", "Local Reviews", "Local Backlinks", "Localized Content", "Local Link Building", "Local Schema Markup", "Local SEO Audits", "Local Landing Pages", "Local Link Building", "Niche Directories", "Industry Forums", "Local Networking", "Local Sponsorships", "Local Events", "Local Partnerships", "Local Content Marketing", "Local Press Releases", "Local Blogging", "Local Social Media Engagement", "Local Reviews Management", "Local Reputation Management", "Voice Search Optimization Strategies", "Voice Search Keywords", "Voice Search Content", "Voice Search Schema Markup", "Voice Search FAQs", "Voice Search User Intent", "Voice Search Analytics", "Voice Search Performance", "Voice Search Metrics", "Voice Search Conversion Optimization", "Long-tail Keywords Research", "Long-tail Keywords Optimization", "Long-tail Keywords Targeting", "Long-tail Keywords Content", "Long-tail Keywords Usage", "Long-tail Keywords Effectiveness", "Short-tail Keywords Analysis", "Short-tail Keywords Selection", "Short-tail Keywords Optimization", "Short-tail Keywords Targeting", "Short-tail Keywords Ranking", "Short-tail Keywords Traffic", "Short-tail Keywords Competition", "Short-tail Keywords Performance", "Short-tail Keywords Conversion", "Short-tail Keywords Usage", "Short-tail Keywords Effectiveness", "Blog Content Strategy", "Blog Topic Ideas", "Blog Writing", "Blog Optimization", "Blog Promotion", "Blog Engagement", "Blog Analytics", "Blog Conversion Optimization", "Blog Performance", "Blog Metrics", "Article Marketing", "Article Writing", "Article Optimization", "Article Distribution", "Article Promotion", "Article Engagement", "Article Analytics", "Article Conversion Optimization", "Article Performance", "Article Metrics", "Link Building Strategies", "Link Building Tactics", "Link Building Outreach", "Link Building Engagement", "Link Building Analytics", "Link Building Conversion Optimization", "Link Building Performance", "Link Building Metrics", "Inbound Marketing", "Inbound Strategy", "Inbound Campaigns", "Inbound Content", "Inbound Engagement", "Inbound Analytics", "Inbound Conversion Optimization", "Inbound Performance", "Inbound Metrics", "Outbound Marketing", "Outbound Strategy", "Outbound Campaigns", "Outbound Tactics", "Outbound Engagement", "Outbound Analytics", "Outbound Conversion Optimization", "Outbound Performance", "Outbound Metrics", "Anchor Text Optimization", "Anchor Text Diversity", "Anchor Text Relevance", "Anchor Text Analysis", "Anchor Text Usage", "Anchor Text Effectiveness", "Domain Authority Building", "Domain Authority Optimization", "Domain Authority Analysis", "Domain Authority Metrics", "Domain Authority Impact", "Page Authority Building", "Page Authority Optimization", "Page Authority Analysis", "Page Authority Metrics", "Page Authority Impact", "Trust Flow Building", "Trust Flow Optimization", "Trust Flow Analysis", "Trust Flow Metrics", "Trust Flow Impact", "Citation Building", "Citation Cleanup", "Citation Audits", "Citation Management", "Citation Optimization", "Citation Impact", "Schema Markup Implementation", "Schema Markup Optimization", "Schema Markup Analysis", "Schema Markup Testing", "Schema Markup Impact", "Structured Data Optimization", "Structured Data Analysis", "Structured Data Implementation", "Structured Data Testing", "Structured Data Impact", "Local Business Schema Markup", "Organization Schema Markup", "Product Schema Markup", "Article Schema Markup", "Event Schema Markup", "Review Schema Markup", "Video Schema Markup", "FAQ Schema Markup", "How-to Schema Markup", "Breadcrumbs Schema Markup", "Authorship Schema Markup", "Local Business NAP Consistency", "Local Business Address Consistency", "Local Business Phone Consistency", "Local Business Name Consistency", "Local Business Website Consistency", "Local Business Directory Listings", "Local Business Profile Listings", "Local Business Review Sites", "Local Business Mapping Services", "Local Business Citation Sites", "Local Business Review Management", "Local Business Reputation Management", "Local Business Map Listings", "Local Business Pack Optimization", "Local Business Reviews Generation", "Local Business Reviews Management", "Local Business Reviews Monitoring", "Local Business Reviews Analysis", "Local Business Reviews Performance", "Local Business Reviews Metrics", "Local Business Reviews Conversion", "Local Business Reviews ROI", "Local Business Citations Generation", "Local Business Citations Management", "Local Business Citations Monitoring", "Local Business Citations Analysis", "Local Business Citations Performance", "Local Business Citations Metrics", "Local Business Citations Conversion", "Local Business Citations ROI", "Local Business Map Listings Generation", "Local Business Map Listings Management", "Local Business Map Listings Monitoring", "Local Business Map Listings Analysis", "Local Business Map Listings Performance", "Local Business Map Listings Metrics", "Local Business Map Listings Conversion", "Local Business Map Listings ROI", "SEO", "Suche", "Engine", "Optimierung", "Keywords", "Inhalt", "Backlinks", "Rankings", "Traffic", "Organisch", "Bezahlt", "Ergebnisse", "SERP", "Meta", "Titel", "Beschreibung", "Tags", "Überschriften", "URL", "Struktur", "Sitemap", "Robots.txt", "Indizierung", "Crawling", "Google", "Bing", "Yahoo", "Algorithmus", "Analytics", "PageSpeed", "Mobil", "Responsive", "Design", "Benutzer", "Erfahrung", "UX", "Schnittstelle", "UI", "Absprungrate", "Click-Through-Rate", "CTR", "Conversion", "Optimierung", "CRO", "Alt-Text", "Bilder", "Videos", "Schema", "Markup", "Strukturierte Daten", "Lokale SEO", "NAP", "Name", "Adresse", "Telefon", "Google My Business", "Bewertungen", "Zitate", "Karte", "Paket", "Sprachsuche", "Long-Tail-Keywords", "Short-Tail-Keywords", "Blog", "Artikel", "Linkaufbau", "Eingehend", "Ausgehend", "Ankertext", "Domain", "Autorität", "Seite", "Vertrauen", "Spam", "Score", "Soziale Signale", "Engagement", "Analyse", "Tracking", "Leistung", "Metriken", "KPI", "Heatmap", "A/B-Tests", "Konkurrentenanalyse", "Keyword-Recherche", "On-Page-Optimierung", "Off-Page-Optimierung", "Technisches SEO", "Linkprofil", "Ranking-Faktoren", "Mobile Optimierung", "Lokale Suche", "Internationales SEO", "Mehrsprachiges SEO", "Optimierung für die Sprachsuche", "Site-Architektur", "Site-Navigation", "Site-Geschwindigkeit", "Site-Sicherheit", "Benutzer-Engagement", "Benutzererfahrung", "Benutzerabsicht", "Benutzersignale", "Site-Audit", "Keyword-Dichte", "Keyword-Stuffing", "Keyword-Kannibalisierung", "Duplicate Content", "Kanonisierung", "Seitenautorität", "Domainalter", "Domainvertrauen", "Linkqualität", "Linkvielfalt", "Ankertextvielfalt", "Linkrelevanz", "Linkgeschwindigkeit", "Linkaufbautaktiken", "Link-Outreach", "Gastbeiträge", "Content-Marketing", "Content-Strategie", "Content-Optimierung", "Content-Verteilung", "Content-Syndication", "Content-Kuration", "Content-Kalender", "Content-Audit", "Content-Gap-Analyse", "Content-Performance", "Content-Metriken", "Content-ROI", "Content-Promotion", "Content-Outreach", "Social-Media-Marketing", "Social Signals", "Social Engagement", "Social Sharing", "Social Proof", "Social Listening", "Social Monitoring", "Social Analytics", "Social ROI", "Social-Kampagnen", "Social Advertising", "Social Influencer", "Social Outreach", "Lokale SEO-Strategien", "Lokale Zitate", "Lokale Verzeichnisse", "Google My Business-Optimierung", "Lokale Bewertungen", "Lokale Backlinks", "Lokalisierter Inhalt", "Lokaler Linkaufbau", "Lokales Schema-Markup", "Lokale SEO-Audits", "Lokale Zielseiten", "Lokaler Linkaufbau", "Nischenverzeichnisse", "Branchenforen", "Lokales Networking", "Lokales Sponsoring", "Lokale Veranstaltungen", "Lokale Partnerschaften", "Lokales Content-Marketing", "Lokale Pressemitteilungen", "Lokales Bloggen", "Lokales Social-Media-Engagement", "Lokales Bewertungsmanagement", "Lokales Reputationsmanagement", "Optimierungsstrategien für die Sprachsuche", "Schlüsselwörter für die Sprachsuche", "Inhalt für die Sprachsuche", "Schema-Markup für die Sprachsuche", "FAQs zur Sprachsuche", "Benutzerabsicht für die Sprachsuche", "Analysen für die Sprachsuche", "Leistung der Sprachsuche", "Kennzahlen für die Sprachsuche", "Konvertierungsoptimierung für die Sprachsuche", "Recherche nach Long-Tail-Keywords", "Optimierung nach Long-Tail-Keywords", "Zielsetzung nach Long-Tail-Keywords", "Inhalt nach Long-Tail-Keywords", "Verwendung von Long-Tail-Keywords", "Effektivität von Long-Tail-Keywords", "Short-Tail-Keywords Analyse", "Auswahl von Short-Tail-Keywords", "Optimierung von Short-Tail-Keywords", "Zielsetzung für Short-Tail-Keywords", "Ranking von Short-Tail-Keywords", "Verkehr von Short-Tail-Keywords", "Wettbewerb von Short-Tail-Keywords", "Leistung von Short-Tail-Keywords", "Konvertierung von Short-Tail-Keywords", "Verwendung von Short-Tail-Keywords", "Effektivität von Short-Tail-Keywords", "Strategie für Blog-Inhalte", "Ideen für Blog-Themen", "Schreiben von Blogs", "Optimierung von Blogs", "Werbung für Blogs", "Engagement für Blogs", "Analyse von Blogs", "Optimierung der Blog-Konvertierung", "Leistung von Blogs", "Metriken für Blog-Artikel", "Marketing für Artikel", "Schreiben von Artikeln", "Optimierung von Artikeln", "Verteilung von Artikeln", "Werbung für Artikel", "Engagement für Artikel", "Analyse von Artikeln", "Optimierung der Artikel-Konvertierung", "Leistung von Artikeln", "Metriken für Linkaufbau", "Strategien für Linkaufbau", "Taktiken für Linkaufbau", "Reichweite von Linkaufbau", "Engagement für Linkaufbau", "Analyse von Linkaufbau", "Optimierung der Linkaufbau-Konvertierung", "Leistung von Linkaufbau", "Metriken für Linkaufbau", "Inbound-Marketing", "Inbound-Strategie", "Inbound-Kampagnen", "Inbound-Inhalte", "Engagement für Blogs", "Analyse von Inbound-Konvertierung", "Inbound-Leistung", "Inbound-Metriken", "Outbound-Marketing", "Outbound-Strategie", "Outbound-Kampagnen", "Outbound-Taktiken", "Outbound-Engagement", "Outbound-Analyse", "Outbound-Conversion-Optimierung", "Outbound-Performance", "Outbound-Metriken", "Ankertext-Optimierung", "Ankertext-Vielfalt", "Ankertext-Relevanz", "Ankertext-Analyse", "Ankertext-Verwendung", "Ankertext-Effektivität", "Domain-Authority-Aufbau", "Domain-Authority-Optimierung", "Domain-Authority-Analyse", "Domain-Authority-Metriken", "Domain-Authority-Impact", "Seitenautoritätsaufbau", "Seitenautoritätsoptimierung", "Seitenautoritätsanalyse", "Seitenautoritätsmetriken", "Seitenautoritätseinfluss", "Trust Flow-Aufbau", "Trust Flow-Optimierung", "Trust Flow-Analyse", "Trust Flow-Metriken", "Trust Flow-Einfluss", "Zitationsaufbau", "Zitationsbereinigung", "Zitationsprüfungen", "Zitationsverwaltung", "Zitationsoptimierung", "Zitationseinfluss", "Schema-Markup-Implementierung", "Schema-Markup-Optimierung", "Schema-Markup-Analyse", "Schema-Markup-Test", "Schema-Markup-Einfluss", "Strukturierte Datenoptimierung", "Strukturierte Datenanalyse", "Strukturierte Datenimplementierung", "Strukturierte Datentests", "Strukturierte Dateneinfluss", "Lokales Geschäftsschema-Markup", "Organisationsschema-Markup", "Produktschema-Markup", "Artikelschema-Markup", "Eventschema-Markup", "Rezensionsschema-Markup", "Videoschema-Markup", "FAQschema-Markup", "Anleitungsschema-Markup", "Breadcrumbsschema-Markup", "Autorenschaftsschema Markup", "Konsistenz der lokalen Geschäftsadresse", "Konsistenz der lokalen Geschäftstelefonnummer", "Konsistenz der lokalen Geschäftsnamen", "Konsistenz der lokalen Geschäftswebsite", "Einträge im lokalen Geschäftsverzeichnis", "Einträge im lokalen Geschäftsprofil", "Bewertungsseiten für lokale Geschäftskunden", "Kartendienste für lokale Geschäftskunden", "Zitationsseiten für lokale Geschäftskunden", "Bewertungsverwaltung für lokale Geschäftskunden", "Reputationsverwaltung für lokale Geschäftskunden", "Karteneinträge für lokale Geschäftskunden", "Optimierung von lokalen Geschäftspaketen", "Generierung lokaler Geschäftsbewertungen", "Verwaltung lokaler Geschäftsbewertungen", "Überwachung lokaler Geschäftsbewertungen", "Analyse lokaler Geschäftsbewertungen", "Leistung lokaler Geschäftsbewertungen", "Kennzahlen lokaler Geschäftsbewertungen", "Konvertierung lokaler Geschäftsbewertungen", "ROI lokaler Geschäftsbewertungen", "Generierung lokaler Geschäftszitate", "Verwaltung lokaler Geschäftszitate", "Überwachung lokaler Geschäftszitate", "Analyse lokaler Geschäftszitate", "Leistung lokaler Geschäftszitate", "Kennzahlen lokaler Geschäftszitate", "Konvertierung lokaler Geschäftszitate", "ROI lokaler Geschäftszitate", "Karteneinträge generieren", "Verwaltung lokaler Karteneinträge", "Überwachung lokaler Karteneinträge", "Analyse lokaler Karteneinträge", "Leistung lokaler Karteneinträge", "Kennzahlen lokaler Karteneinträge", "Konvertierung lokaler Karteneinträge", "ROI lokaler Karteneinträge"];

			function analyzeWordsPs(content, wordsArray) {
				const words = content.split(/\s+/);
				let wordCounts = {};
				words.forEach(word => {
					if (wordsArray.includes(word)) {
						wordCounts[word] = (wordCounts[word] || 0) + 1;
					}
				});

				let count = Object.keys(wordCounts).length;

				const excellentPs = languageData["excellentPs"];
				const decentPs = languageData["decentPs"];
				const poorPs = languageData["poorPs"];

				const wordCountList = Object.entries(wordCounts).map(([word, count]) => `<li>${word}: ${count}</li>`).join('');

				if (count >= 3) {
					score++;
					return `${getRandomMessage(excellentPs)}<ul>${wordCountList}</ul>`;
				} else if (count > 0) {
					score += 0.5;
					return `${getRandomMessage(decentPs)}<ul>${wordCountList}</ul>`;
				} else {
					return getRandomMessage(poorPs);
				}
			}

			function analyzeWordsCs(content, wordsArray) {
				const words = content.split(/\s+/);
				let wordCounts = {};
				words.forEach(word => {
					if (wordsArray.includes(word)) {
						wordCounts[word] = (wordCounts[word] || 0) + 1;
					}
				});

				let count = Object.keys(wordCounts).length;

				const excellentCs = languageData["excellentCs"];
				const decentCs = languageData["decentCs"];
				const poorCs = languageData["poorCs"];

				const wordCountList = Object.entries(wordCounts).map(([word, count]) => `<li>${word}: ${count}</li>`).join('');

				if (count >= 3) {
					score++;
					return `${getRandomMessage(excellentCs)}<ul>${wordCountList}</ul>`;
				} else if (count > 0) {
					score += 0.5;
					return `${getRandomMessage(decentCs)}<ul>${wordCountList}</ul>`;
				} else {
					return getRandomMessage(poorCs);
				}
			}

			function analyzeWordsSEO(content) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, 'text/html');

				const seoChecks = {
					title: !!doc.querySelector('title'),
					metaDescription: !!doc.querySelector('meta[name="description"]'),
					headings: {
						h1: !!doc.querySelector('h1'),
						h2: !!doc.querySelector('h2'),
						h3: !!doc.querySelector('h3')
					},
					imagesWithAlt: [...doc.querySelectorAll('img')].every(img => img.hasAttribute('alt')),
					internalLinks: [...doc.querySelectorAll('a')].filter(link => link.hostname === window.location.hostname).length > 0,
					externalLinks: [...doc.querySelectorAll('a')].filter(link => link.hostname !== window.location.hostname).length > 0,
					mobileFriendly: !!doc.querySelector('meta[name="viewport"]'),
					structuredData: !!doc.querySelector('script[type="application/ld+json"]'),
					sitemap: !!doc.querySelector('link[rel="sitemap"], sitemap'),
					socialMediaIntegration: checkSocialMediaIntegration(doc),
					contentQuality: checkContentQuality(doc),
					sslCertificate: checkSSLCertificate(),
					robotsTxt: !!doc.querySelector('meta[name="robots"]'),
					localSEO: checkLocalSEO(doc),
					keywordDensity: checkKeywordDensity(doc),
					urlStructure: checkUrlStructure(doc),
					breadcrumbs: checkBreadcrumbs(doc),
					canonicalTags: !!doc.querySelector('link[rel="canonical"]')
				};

				const usedSEO = Object.keys(seoChecks).filter(key => {
					if (typeof seoChecks[key] === 'object') {
						return Object.values(seoChecks[key]).some(Boolean);
					}
					return seoChecks[key];
				});

				const missingSEO = Object.keys(seoChecks).filter(key => {
					if (typeof seoChecks[key] === 'object') {
						return Object.values(seoChecks[key]).every(value => !value);
					}
					return !seoChecks[key];
				});

				let scoreSEO = usedSEO.length;

				const excellentSEO = languageData["excellentSEO"];
				const decentSEO = languageData["decentSEO"];
				const poorSEO = languageData["poorSEO"];

				let message;
				if (scoreSEO >= 20) {
					score++;
					message = getRandomMessage(excellentSEO);
				} else if (scoreSEO >= 10) {
					score += 0.5;
					message = getRandomMessage(decentSEO);
				} else {
					message = getRandomMessage(poorSEO);
				}

				const seoSummary = `
					${languageData["seoTechnique"]}
					${languageData["seoUsed"]}
						<ul class="seoList">
						${usedSEO.map(technique => `<li>${technique}</li>`).join('')}
					</ul>
					${languageData["seoMissing"]}
						<ul class="seoList">
						${missingSEO.map(technique => `<li>${technique}</li>`).join('')}
					</ul>
				`;

				message += seoSummary;

				return message;
			}

			function checkDuplicateContent(doc) {
				const bodyText = doc.body.textContent || '';
				const sentences = bodyText.split(/[.!?]/);
				const uniqueSentences = new Set(sentences);
				return uniqueSentences.size / sentences.length < 0.8;
			}

			function checkSocialMediaIntegration(doc) {
				return !!doc.querySelector('meta[property="og:url"], meta[name="twitter:card"]');
			}

			function checkContentQuality(doc) {
				const bodyText = doc.body.textContent || '';
				const sentences = bodyText.split(/[.!?]/);
				return sentences.length > 50;
			}

			function checkSSLCertificate() {
				return window.location.protocol === 'https:';
			}

			function checkLocalSEO(doc) {
				return !!doc.querySelector('meta[name="geo.position"]');
			}

			function checkKeywordDensity(doc) {
				const bodyText = doc.body.textContent || '';
				const words = bodyText.split(/\s+/);
				const keywordFrequency = words.reduce((acc, word) => {
					acc[word] = (acc[word] || 0) + 1;
					return acc;
				}, {});
				const keywordCount = Object.keys(keywordFrequency).filter(keyword => keywordFrequency[keyword] > 5).length;
				return keywordCount > 5;
			}

			function checkUrlStructure(doc) {
				const url = window.location.href;
				return url.split('/').length <= 5 && !url.includes('?');
			}

			function checkBreadcrumbs(doc) {
				return !!doc.querySelector('nav.breadcrumb');
			}

			function speedCheck() {
				var time = timeTaken / 1000;
				var timeString = time + ` ${languageData["seconds"]}`;
				var ip = document.getElementById('ip');

				const excellentSpeed = languageData["excellentSpeed"];
				const decentSpeed = languageData["decentSpeed"];
				const poorSpeed = languageData["poorSpeed"];

				if (!ip.innerHTML.includes(languageData["loadSpeed"])) {
					ip.innerHTML += `<br>${languageData["loadSpeed"]}: ${timeString}`;
				} else {
					ip.innerHTML = ip.innerHTML.replace(new RegExp(`${languageData["loadSpeed"]}\\s*:\\s*\\d+`, "g"), `${languageData["loadSpeed"]}: ${timeString}`);
				}

				if (timeTaken <= 2000) {
					score++;
					return getRandomMessage(excellentSpeed);
				} else if (timeTaken > 2000 && timeTaken <= 3000) {
					score += 0.5;
					return getRandomMessage(decentSpeed);
				} else {
					return getRandomMessage(poorSpeed);
				}
			}

			function securityCheck(content) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, 'text/html');

				const mail = 'mailto:';
				let missingFeatures = [];

				if (!doc.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
					missingFeatures.push('&lt;meta http-equiv="Content-Security-Policy"&gt;');
				}
				if (!doc.querySelector('meta[http-equiv="X-Content-Type-Options"]')) {
					missingFeatures.push('&lt;meta http-equiv="X-Content-Type-Options"&gt;');
				}

				const linkElement = doc.querySelector('link');
				if (linkElement && linkElement.hasAttribute('crossorigin')) {
					missingFeatures.push(languageData["crossorigin"]);
				}

				const iframeElement = doc.querySelector('iframe');
				if (iframeElement && iframeElement.hasAttribute('sandbox')) {
					missingFeatures.push(languageData["sandbox"]);
				}

				const inputElement = doc.querySelector('input');
				if (inputElement && inputElement.getAttribute('autocomplete') === 'off') {
					missingFeatures.push(languageData["autocomplete"]);
				}

				const scriptElement = doc.querySelector('script');
				if (scriptElement && scriptElement.hasAttribute('integrity')) {
					missingFeatures.push(languageData["integrity"]);
				}

				const anchorElements = doc.querySelectorAll('a');
				anchorElements.forEach(anchorElement => {
					const relAttribute = anchorElement.getAttribute('rel');
					if (relAttribute && relAttribute.includes('noopener') && relAttribute.includes('noreferrer')) {
						missingFeatures.push(languageData["rel"]);
					}
				});

				if (content.includes(mail)) {
					missingFeatures.push(languageData["mailto"]);
				}

				const excellentSecurity = languageData["excellentSecurity"];

				var decentSecurity = languageData.decentSecurity.map(template => template.replace('%missingFeatures%', missingFeatures.map(feature => `<li>${feature}</li>`).join('')));

				var poorSecurity = languageData.poorSecurity.map(template => template.replace('%missingFeatures%', missingFeatures.map(feature => `<li>${feature}</li>`).join('')));

				if (missingFeatures.length === 0) {
					score++;
					return getRandomMessage(excellentSecurity);
				} else if (missingFeatures.length <= 3) {
					score += 0.5;
					return getRandomMessage(decentSecurity);
				} else {
					return getRandomMessage(poorSecurity);
				}
			}

			function privacyComplianceCheck(content) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, 'text/html');

				function checkPrivacyPolicy() {
					const privacyTexts = ["privacy", "datenschutz"];
					const privacyLinks = [...doc.querySelectorAll('a')].filter(link =>
						privacyTexts.some(text => link.href.toLowerCase().includes(text) || link.textContent.toLowerCase().includes(text))
					);
					return privacyLinks.length > 0;
				}

				function checkConsentBanner() {
					const consentTexts = ["consent", "cookie", "privacy", "agree", "zustimmung", "cookie", "datenschutz", "einverstanden"];
					const banners = [...doc.querySelectorAll('div, section, aside')].filter(banner =>
						consentTexts.some(text => banner.textContent.toLowerCase().includes(text))
					);
					return banners.length > 0;
				}

				function checkDataRequestOptions() {
					const dataRequestTexts = ["data request", "access my data", "delete my data", "data deletion", "opt-out", "datenanfrage", "zugriff auf meine daten", "löschen meiner daten", "datenlöschung", "opt-out"];
					const dataRequestLinks = [...doc.querySelectorAll('a')].filter(link =>
						dataRequestTexts.some(text => link.textContent.toLowerCase().includes(text))
					);
					return dataRequestLinks.length > 0;
				}

				function checkContactInformation() {
					const contactTexts = ["contact", "email", "phone", "address", "kontakt", "e-mail", "telefon", "adresse"];
					const contactSections = [...doc.querySelectorAll('div, section, footer')].filter(section =>
						contactTexts.some(text => section.textContent.toLowerCase().includes(text))
					);
					return contactSections.length > 0;
				}

				const hasPrivacyPolicy = checkPrivacyPolicy();
				const hasConsentBanner = checkConsentBanner();
				const hasDataRequestOptions = checkDataRequestOptions();
				const hasContactInformation = checkContactInformation();

				const excellentPrivacy = languageData["excellentPrivacy"];

				const decentPrivacy = languageData["decentPrivacy"];

				const poorPrivacy = languageData["poorPrivacy"];

				const excellentCompliance = hasPrivacyPolicy && hasConsentBanner && hasDataRequestOptions && hasContactInformation;
				const decentCompliance = hasPrivacyPolicy || hasConsentBanner || hasDataRequestOptions || hasContactInformation;

				if (excellentCompliance) {
					score++;
					return excellentPrivacy[Math.floor(Math.random() * excellentPrivacy.length)];
				} else if (decentCompliance) {
					score += 0.5;
					const missing = !hasPrivacyPolicy ? "Privacy Policy" : !hasConsentBanner ? "Consent Banner" : !hasDataRequestOptions ? "Data Request Options" : "Contact Information";
					return decentPrivacy[Math.floor(Math.random() * decentPrivacy.length)].replace("Missing compliance with GDPR", `Missing compliance with ${missing}`);
				} else {
					return poorPrivacy[Math.floor(Math.random() * poorPrivacy.length)];
				}
			}

			function swotAnalysis(content) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, 'text/html');

				function getMetaTag(name) {
					return doc.querySelector(`meta[name="${name}"]`) || doc.querySelector(`meta[property="${name}"]`);
				}

				function checkResponsiveDesign() {
					return getMetaTag('viewport') !== null;
				}

				function checkMetaTags() {
					const title = doc.querySelector('title');
					const description = getMetaTag('description');
					return {
						title: title ? title.textContent : null,
						description: description ? description.getAttribute('content') : null,
					};
				}

				function checkHeadings() {
					const headings = {};
					for (let i = 1; i <= 6; i++) {
						headings[`h${i}`] = doc.querySelectorAll(`h${i}`).length;
					}
					return headings;
				}

				function checkImages() {
					const images = doc.querySelectorAll('img');
					const withoutAlt = [...images].filter(img => !img.hasAttribute('alt'));
					return {
						total: images.length,
						withoutAlt: withoutAlt.length,
					};
				}

				function checkAccessibility() {
					const roles = doc.querySelectorAll('[role]');
					const ariaLabels = doc.querySelectorAll('[aria-label]');
					const ariaDescribedBy = doc.querySelectorAll('[aria-describedby]');
					return {
						roles: roles.length,
						ariaLabels: ariaLabels.length,
						ariaDescribedBy: ariaDescribedBy.length,
					};
				}

				function checkLoadTimeIssues() {
					const scripts = doc.querySelectorAll('script[src]');
					const inlineStyles = doc.querySelectorAll('style, [style]');
					return {
						scripts: scripts.length,
						inlineStyles: inlineStyles.length,
					};
				}

				function checkContentLength() {
					const bodyText = doc.body.textContent || '';
					return bodyText.length;
				}

				function checkExternalResources() {
					const scripts = doc.querySelectorAll('script[src]');
					const links = doc.querySelectorAll('link[rel="stylesheet"]');
					return {
						externalScripts: scripts.length,
						externalStylesheets: links.length,
					};
				}

				const metaTags = checkMetaTags();
				const responsiveDesign = checkResponsiveDesign();
				const headings = checkHeadings();
				const images = checkImages();
				const accessibility = checkAccessibility();
				const loadTimeIssues = checkLoadTimeIssues();
				const contentLength = checkContentLength();
				const externalResources = checkExternalResources();

				const strengths = [];
				const weaknesses = [];
				const opportunities = [];
				const threats = [];

				if (metaTags.title) strengths.push(languageData["metaTitle"]);
				if (metaTags.description) strengths.push(languageData["metaDesc"]);
				if (responsiveDesign) strengths.push(languageData["metaDesign"]);
				if (headings.h1 > 0) strengths.push(languageData["metaH1"]);
				if (contentLength > 500) strengths.push(languageData["metaContent"]);

				if (!metaTags.title) weaknesses.push(languageData["metaTitle2"]);
				if (!metaTags.description) weaknesses.push(languageData["metaDesc2"]);
				if (!responsiveDesign) weaknesses.push(languageData["metaDesign2"]);
				if (images.withoutAlt > 0) weaknesses.push(`${images.withoutAlt} ${languageData["metaAlt"]}`);
				if (loadTimeIssues.inlineStyles > 0) weaknesses.push(languageData["metaStyle"]);
				if (contentLength < 300) weaknesses.push(languageData["metaContent2"]);

				if (metaTags.title && metaTags.title.length < 60) opportunities.push(languageData["metaTitle3"]);
				if (metaTags.description && metaTags.description.length < 160) opportunities.push(languageData["metaDesc3"]);
				if (headings.h2 === 0) opportunities.push(languageData["metaH2"]);
				if (accessibility.roles === 0) opportunities.push(languageData["metaRole"]);
				if (accessibility.ariaLabels === 0) opportunities.push(languageData["metaAriaLabel"]);
				if (accessibility.ariaDescribedBy === 0) opportunities.push(languageData["metaAriaDesc"]);

				if (externalResources.externalScripts > 0) threats.push(`${externalResources.externalScripts} ${languageData["metaExtScript"]}`);
				if (externalResources.externalStylesheets > 0) threats.push(`${externalResources.externalStylesheets} ${languageData["metaExtStyle"]}`);
				if (loadTimeIssues.scripts.length > 0) threats.push(`${loadTimeIssues.scripts.length} ${languageData["metaLoadScripts"]}`);
				const forms = doc.querySelectorAll('form');
				if (forms.length > 0) threats.push(`${forms.length} ${languageData["metaForms"]}`);
				const iframes = doc.querySelectorAll('iframe');
				if (iframes.length > 0) threats.push(`${iframes.length} ${languageData["metaIframe"]}`);
				const externalLinks = doc.querySelectorAll('a[href^="http"]');
				if (externalLinks.length > 0) threats.push(`${externalLinks.length} ${languageData["metaExt"]}`);

				return {
					strengths,
					weaknesses,
					opportunities,
					threats,
				};
			}

			const swot = swotAnalysis(content);

			const data = {
				labels: [`${languageData["Strengths"]}`, `${languageData["Weaknesses"]}`, `${languageData["Opportunities"]}`, `${languageData["Threats"]}`],
				datasets: [{
					label: `${languageData["SWOT-Analysis"]}`,
					data: [
						swot.strengths.length,
						swot.weaknesses.length,
						swot.opportunities.length,
						swot.threats.length
					],
					backgroundColor: [
						'rgba(75, 192, 192, 0.2)',
						'rgba(255, 99, 132, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(153, 102, 255, 0.2)'
					],
					borderColor: [
						'rgba(75, 192, 192, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(153, 102, 255, 1)'
					],
					borderWidth: 1
				}]
			};


			var existingChart = Chart.getChart("swotChart");

			if (existingChart) {
				existingChart.destroy();
			}

			const swotChart = new Chart(ctx, {
				type: 'bar',
				data: data,
				options: {
					plugins: {
						legend: {
							display: false
						},
					},
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});

			swotDiv.innerHTML = `
			<ul>
				${swot.strengths.length > 0 ? `<li><strong>${languageData["Strengths"]} (${swot.strengths.length}):</strong> ${swot.strengths.join(', ')}</li>` : `<li>${languageData["StrengthsGood"]}</li>`}
				${swot.weaknesses.length > 0 ? `<li><strong>${languageData["Weaknesses"]} (${swot.weaknesses.length}):</strong> ${swot.weaknesses.join(', ')}</li>` : `<li>${languageData["WeaknessesGood"]}</li>`}
				${swot.opportunities.length > 0 ? `<li><strong>${languageData["Opportunities"]} (${swot.opportunities.length}):</strong> ${swot.opportunities.join(', ')}</li>` : `<li>${languageData["OpportunitiesBad"]}</li>`}
				${swot.threats.length > 0 ? `<li><strong>${languageData["Threats"]} (${swot.threats.length}):</strong> ${swot.threats.join(', ')}</li>` : `<li>${languageData["ThreatsGood"]}</li>`}
			</ul>
		`;

			function abcAnalysis(content) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(content, 'text/html');

				const aCategory = [
					{ selector: 'meta[name="description"]', description: '&lt;meta name="description"&gt;' },
					{ selector: 'meta[charset]', description: '&lt;meta charset="UTF-8"&gt;' },
					{ selector: 'title', description: '&lt;title&gt;' },
					{ selector: 'link[rel="stylesheet"]', description: '&lt;link rel="stylesheet"&gt;' },
					{ selector: 'script[src]', description: '&lt;script src="..."&gt;' },
					{ selector: 'header', description: '&lt;header&gt;' },
					{ selector: 'footer', description: '&lt;footer&gt;' },
					{ selector: 'main', description: '&lt;main&gt;' },
					{ selector: 'nav', description: '&lt;nav&gt;' },
					{ selector: 'h1', description: '&lt;h1&gt;' }
				];

				const bCategory = [
					{ selector: 'section', description: '&lt;section&gt;' },
					{ selector: 'article', description: '&lt;article&gt;' },
					{ selector: 'aside', description: '&lt;aside&gt;' },
					{ selector: 'button', description: '&lt;button&gt;' },
					{ selector: 'form', description: '&lt;form&gt;' },
					{ selector: 'input', description: '&lt;input&gt;' },
					{ selector: 'img', description: '&lt;img&gt;' },
					{ selector: 'video', description: '&lt;video&gt;' },
					{ selector: 'audio', description: '&lt;audio&gt;' }
				];

				const cCategory = [
					{ selector: 'div', description: '&lt;div&gt;' },
					{ selector: 'span', description: '&lt;span&gt;' },
					{ selector: '[id]', description: 'id attribute' },
					{ selector: '[class]', description: 'class attribute' }
				];

				const missingFeaturesA = aCategory.filter(feature => !doc.querySelector(feature.selector)).map(feature => feature.description);
				const missingFeaturesB = bCategory.filter(feature => !doc.querySelector(feature.selector)).map(feature => feature.description);
				const missingFeaturesC = cCategory.filter(feature => !doc.querySelector(feature.selector)).map(feature => feature.description);

				const excellentA = languageData["excellentA"];

				const decentA = languageData["decentA"];

				const poorA = languageData["poorA"];

				const excellentB = languageData["excellentB"];

				const decentB = languageData["decentB"];

				const poorB = languageData["poorB"];

				const excellentC = languageData["excellentC"];

				const decentC = languageData["decentC"];

				const poorC = languageData["poorC"];

				let messageA, messageB, messageC;

				if (missingFeaturesA.length === 0) {
					score++;
					messageA = getRandomMessage(excellentA);
				} else if (missingFeaturesA.length <= 2) {
					score += 0.5;
					messageA = getRandomMessage(decentA);
				} else {
					messageA = getRandomMessage(poorA);
				}

				if (missingFeaturesB.length === 0) {
					score++;
					messageB = getRandomMessage(excellentB);
				} else if (missingFeaturesB.length <= 2) {
					score += 0.5;
					messageB = getRandomMessage(decentB);
				} else {
					messageB = getRandomMessage(poorB);
				}

				if (missingFeaturesC.length === 0) {
					score++;
					messageC = getRandomMessage(excellentC);
				} else if (missingFeaturesC.length <= 2) {
					score += 0.5;
					messageC = getRandomMessage(decentC);
				} else {
					messageC = getRandomMessage(poorC);
				}

				return `
						${languageData["categoryATitle"]}
						${languageData["categoryADescription"]}
						${languageData["categoryBTitle"]}
						${languageData["categoryBDescription"]}
						${languageData["categoryCTitle"]}
						${languageData["categoryCDescription"]}
					<div>
						${messageA}
						${missingFeaturesA.length > 0 ? `<p>${languageData["missing"]}:<ul>${missingFeaturesA.map(feature => `<li>${feature}</li>`).join('')}</ul></p>` : ''}
					</div>
					<div>
						${messageB}
						${missingFeaturesB.length > 0 ? `<p>${languageData["missing"]}:<ul>${missingFeaturesB.map(feature => `<li>${feature}</li>`).join('')}</ul></p>` : ''}
					</div>
					<div>
						${messageC}
						${missingFeaturesC.length > 0 ? `<p>${languageData["missing"]}:<ul>${missingFeaturesC.map(feature => `<li>${feature}</li>`).join('')}</ul></p>` : ''}
					</div>
				`;
			}

			function summarized() {
				const excellentScore = languageData["excellentScore"];

				const decentScore = languageData["decentScore"];

				const poorScore = languageData["poorScore"];

				if (score == maxScore) {
					return getRandomMessage(excellentScore);
				} else if (score >= (maxScore / 2)) {
					return getRandomMessage(decentScore);
				} else {
					return getRandomMessage(poorScore);
				}
			}

			var parser = new DOMParser();
			var doc = parser.parseFromString(content, 'text/html');
			var titleElement = doc.querySelector('title');
			var title = titleElement ? titleElement.textContent : `${languageData["titleNotFound"]}`;
			if (url !== "!^FILE^!") {
				var linkElement = document.createElement("a");
				linkElement.href = url;
				linkElement.target = "_blank";
				url = url.replace(/(^\w+:|^)\/\//, '');
				url = url.split('/')[0];
				linkElement.innerText = url;
				var existingElement = document.getElementById("websiteUrl");
				if (existingElement) {
					existingElement.remove();
				}
				linkElement.id = "websiteUrl";
				urlContainer.appendChild(linkElement);
			} else {
				var linkElement = document.createElement("a");
				linkElement.href = "https://hak-steyr.at/";
				linkElement.target = "_blank";
				url = url.replace(/(^\w+:|^)\/\//, '');
				url = url.split('/')[0];
				linkElement.innerText = title;
				var existingElement = document.getElementById("websiteUrl");
				if (existingElement) {
					existingElement.remove();
				}
				linkElement.id = "websiteUrl";
				urlContainer.appendChild(linkElement);
			}
			ps.innerHTML = analyzeWordsPs(content, marketingWords4Ps);
			cs.innerHTML = analyzeWordsCs(content, marketingWords4Cs);
			seo.innerHTML = analyzeWordsSEO(content, seoWords);
			speed.innerHTML = speedCheck();
			security.innerHTML = securityCheck(content);
			privacy.innerHTML = privacyComplianceCheck(content);
			summarization.innerHTML = summarized();
			abc.innerHTML = abcAnalysis(content);
			var remove = document.getElementById("remove-file");
			if (remove.style.display !== "none") {
				remove.click();
			}

			const scorePercentage = (score / maxScore) * 100;
			const remainingPercentage = 100 - scorePercentage;

			const ctx2 = document.getElementById('summarizationChart').getContext('2d');

			var existingChart2 = Chart.getChart("summarizationChart");

			if (existingChart2) {
				existingChart2.destroy();
			}

			const donutChart = new Chart(ctx2, {
				type: 'doughnut',
				data: {
					labels: [`${languageData["yourScore"]}`, `${languageData["remainingScore"]}`],
					datasets: [{
						data: [scorePercentage, remainingPercentage],
						backgroundColor: [
							'rgba(255, 70, 78, 0.6)',
							'rgba(0, 0, 0, 0)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
						],
						borderWidth: 1
					}]
				},
				options: {
					responsive: true,
					plugins: {
						tooltip: {
							callbacks: {
								label: function (tooltipItem) {
									return tooltipItem.raw.toFixed(2) + '%';
								}
							}
						}
					}
				}
			});

			removeSkeleton();
			var content = document.querySelector("#resultContent");
			var contentHeight = content.clientHeight;
			result.style.maxHeight = contentHeight + "px";
		}  else {
			console.log("You stole the algorithm from https://nikityyy.github.io/Conomy");
		}

		window.onresize = function () {
			var content = document.querySelector("#resultContent");
			var contentHeight = content.clientHeight;
			var fourPs = document.getElementById("fourPs");
			if (fourPs.innerHTML !== "") {
				result.style.maxHeight = contentHeight + "px";
			}
		}
}