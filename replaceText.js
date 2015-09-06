document.title = replaceText(document.title)
walkDocument();
setInterval(walkDocument, 1050);

function walkDocument()
{
	walk(document.body);
}

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
		default:
			break;
	}
}

function handleText(textNode) 
{
	var text = textNode.nodeValue;

	
	textNode.nodeValue = replaceText(text);
}

function replaceText(text) {
	text = text.replace(/Stanford/g, "Stanfurd");
	text = text.replace(/stanford/g, "stanfurd");
	text = text.replace(/STANFORD/g, "STANFURD");
	text = text.replace(/\bSTAN\b/g, "FURD");
	return text;
}
