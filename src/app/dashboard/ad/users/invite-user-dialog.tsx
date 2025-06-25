"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, Upload, X, Plus, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function InviteUserDialog() {
  const [open, setOpen] = useState(false);
  const [inviteLink, setInviteLink] = useState("");
  const [showInviteLink, setShowInviteLink] = useState(false);
  const [emailAddresses, setEmailAddresses] = useState<string[]>([
    "Jamesmark281@email.com",
    "Mathewracejark281@email.com",
    "Daniel12vic@email.com",
    "Austingrake019829@email.com",
  ]);
  const [newEmail, setNewEmail] = useState("");
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const generateInviteLink = () => {
    // Simulate generating an invite link
    const generatedLink = `https://yourapp.com/invite/${Math.random()
      .toString(36)
      .substring(2, 15)}`;
    setInviteLink(generatedLink);
    setShowInviteLink(true);
    toast("Invite link generated", {
      description: "You can now copy the invite link.",
    });
  };

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
      toast("Link copied", {
        description: "Invite link has been copied to clipboard.",
      });
    } catch (err) {
      toast("Failed to copy", {
        description: "Could not copy the invite link.",
      });
    }
  };

  const addEmailAddress = () => {
    if (newEmail && !emailAddresses.includes(newEmail)) {
      setEmailAddresses([...emailAddresses, newEmail]);
      setNewEmail("");
    }
  };

  const removeEmailAddress = (email: string) => {
    setEmailAddresses(emailAddresses.filter((e) => e !== email));
  };

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);
      // Here you would typically parse the CSV file
      toast("CSV uploaded", {
        description: `File "${file.name}" has been uploaded successfully.`,
      });
    } else {
      toast("Invalid file", {
        description: "Please upload a valid CSV file.",
      });
    }
  };

  const sendInvites = () => {
    // Simulate sending invites
    toast("Invites sent", {
      description: `Invites have been sent to ${emailAddresses.length} email addresses.`,
    });
    setOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addEmailAddress();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="">Invite New User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="bg-cyan-500 text-white p-6 rounded-t-lg">
          <DialogTitle className="text-2xl font-semibold text-center">
            Invite New User
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="link">Invite Link</TabsTrigger>
              <TabsTrigger value="email">Email Invites</TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium text-gray-700">
                    Invite link
                  </Label>
                  <Button
                    onClick={generateInviteLink}
                    variant="link"
                    className="text-cyan-500 hover:text-cyan-600 p-0 h-auto font-medium"
                  >
                    Generate Invite link
                  </Button>
                </div>

                <div className="relative">
                  <Input
                    type={showInviteLink ? "text" : "password"}
                    value={inviteLink}
                    placeholder="Generated invite link will appear here"
                    readOnly
                    className="pr-20 bg-gray-50"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setShowInviteLink(!showInviteLink)}
                    >
                      {showInviteLink ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    {inviteLink && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={copyInviteLink}
                      >
                        {linkCopied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium text-gray-700">
                    Upload CSV File
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="file"
                      accept=".csv"
                      onChange={handleCsvUpload}
                      className="hidden"
                      id="csv-upload"
                    />
                    <Label
                      htmlFor="csv-upload"
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Choose CSV File</span>
                    </Label>
                    {csvFile && (
                      <span className="text-sm text-gray-600">
                        {csvFile.name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Label className="text-base font-medium text-gray-700">
                    Email Addresses
                  </Label>

                  <div className="mt-3 p-4 bg-gray-50 rounded-lg min-h-[200px]">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {emailAddresses.map((email, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center justify-between p-2 bg-white border"
                        >
                          <span className="text-sm truncate">{email}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 ml-2"
                            onClick={() => removeEmailAddress(email)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                      />
                      <Button
                        onClick={addEmailAddress}
                        variant="link"
                        className="text-cyan-500 hover:text-cyan-600 p-0 h-auto font-medium"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Email Address
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Button
              onClick={sendInvites}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg font-medium"
            >
              Send Invite →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
